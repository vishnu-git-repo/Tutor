import { prisma } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: { email }
    })
}

export const createUser = async (data: {
    email: string
    name?: string
    passwordHash?: string
    image?: string
}) => {
    return await prisma.user.create({
        data
    })
}