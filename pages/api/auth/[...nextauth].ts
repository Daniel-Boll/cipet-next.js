import NextAuth from "next-auth";
import { JWTOptions } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  jwt: process.env.NEXT_PUBLIC_JWT_SIGNING_PRIVATE_KEY as Partial<JWTOptions>,
});
