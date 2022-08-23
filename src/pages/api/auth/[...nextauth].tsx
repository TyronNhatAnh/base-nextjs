import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({user, account, profile, email, credentials}) {
      console.log(user);
      return true;
    },
    async session({session, token}) {
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({token, user}) {
      if (user?.token) {
        token.accessToken = user.token;
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url === "/profile") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
