import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const transfer = async (req: Request, res: Response) => {
  const { username, amount } = req.body;
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId }, include: { account: true } });
    const recipient = await prisma.user.findUnique({ where: { username }, include: { account: true } });

    if (!user) {
      console.error(`User with ID ${userId} not found`);
      return res.status(404).json({ error: 'User not found' });
    }

    if (!recipient) {
      console.error(`Recipient with username ${username} not found`);
      return res.status(404).json({ error: 'Recipient not found' });
    }

    if (user.id === recipient.id) {
      return res.status(400).json({ error: 'Cannot transfer to self' });
    }

    if (user.account.balance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    await prisma.$transaction([
      prisma.account.update({ where: { id: user.account.id }, data: { balance: user.account.balance - amount } }),
      prisma.account.update({ where: { id: recipient.account.id }, data: { balance: recipient.account.balance + amount } }),
      prisma.transaction.create({
        data: {
          debitedAccountId: user.account.id,
          creditedAccountId: recipient.account.id,
          value: amount,
        },
      }),
    ]);

    return res.status(200).json({ message: 'Transfer successful' });
  } catch (error) {
    console.error('Error during transfer:', error);
    return res.status(500).json({ error: 'Transfer failed' });
  }
};

const getTransactions = async (req: Request, res: Response) => {
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId }, include: { account: true } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const transactions = await prisma.transaction.findMany({
      where: {
        OR: [
          { debitedAccountId: user.account.id },
          { creditedAccountId: user.account.id },
        ],
      },
    });

    return res.status(200).json(transactions);
  } catch (error) {
    console.error('Error retrieving transactions:', error);
    return res.status(500).json({ error: 'Failed to retrieve transactions' });
  }
};

export default { transfer, getTransactions };
