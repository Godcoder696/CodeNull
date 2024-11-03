import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

const handler= NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_AUTH_KEY??"",
            clientSecret: process.env.GOOGLE_AUTH_SECRET??""
        })
    ],
    secret: process.env.NEXT_PUBLIC_SECRET
})

export {handler as GET, handler as POST};