import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                await new Promise(r => setTimeout(r, 1000));
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com", role: "admin" }
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.user = user;
            }
            return token
        },
        async session({ session, user, token }) {
            return session
        }
    },
    pages: {
        signIn: '/signin',
    }
};