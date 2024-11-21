import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "@/app/models/UserSchema";
import bcrypt from "bcryptjs";
import connectMongoDB from "./app/libs/mongodb";
import messages from "./app/constants/messages";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await connectMongoDB();

        if (!credentials) {
          return null;
        }

        try {
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error(messages.USER.INVALID_LOGIN);
          }

          const validPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!validPassword) {
            throw new Error(messages.USER.INVALID_LOGIN);
          }

          return {
            name: user.firstName,
            email: user.email,
            budget: user.budget,
          };
        } catch (error) {
          console.error("Error in authorize function:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      console.log("jwt callback fired");
      return token;
    },
    async session({ session, token, user }) {
      console.log("session callback fired");
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
});
