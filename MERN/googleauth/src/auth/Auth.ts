import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/lib/db";
import bcrypt from "bcryptjs";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials) return null
                const { email, password } = credentials
                const user = await getUserByEmail(email)
                if (user && user.passwordHash && bcrypt.compareSync(password, user.passwordHash)) {
                    return { id: user.id, name: user.name, email: user.email, image: user.image }
                } else {
                    throw new Error('Invalid credentials')
                }
            },
        }),
    ],
    session: {
        strategy: "jwt" as const,
        maxAge: 1 * 24 * 60 * 60, // 1 day
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }: any) {
            if (session.user && token.id) {
                (session.user as any).id = token.id as string
            }
            return session
        },
    },
    pages: {
        signIn: '/',
    },
};

export default NextAuth(authOptions);