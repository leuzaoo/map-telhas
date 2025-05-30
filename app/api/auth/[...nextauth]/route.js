import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/app/lib/mongodb";
import User from "@/app/models/user";
import NextAuth from "next-auth/next";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = password === user.password;
          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Erro: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
