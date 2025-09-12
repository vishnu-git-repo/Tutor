import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient(
    {
        log: ['query', 'info', 'warn', 'error'],
    }
)

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email }
  })
}

export async function createUser(data: {
  email: string
  name?: string
  passwordHash?: string
  image?: string
}) {
  return await prisma.user.create({
    data
  })
}
