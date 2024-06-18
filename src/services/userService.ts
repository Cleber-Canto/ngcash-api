import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getBalance = async (req: Request, res: Response) => {
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { account: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ balance: user.account.balance });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve balance' });
  }
};

export default { getBalance };
