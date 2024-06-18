import { PrismaClient, User, Account } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateUserInput {
  username: string;
  password: string;
  accountId: number;
}

async function createUserWithAccount(userData: CreateUserInput) {
  try {
    const newUser = await prisma.user.create({
      data: {
        username: userData.username,
        password: userData.password,
        account: {
          create: {
            balance: 0, // Exemplo de saldo inicial
          },
        },
      },
      include: {
        account: true,
      },
    });

    return newUser;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw new Error('Erro ao criar usuário');
  }
}

export default createUserWithAccount;
