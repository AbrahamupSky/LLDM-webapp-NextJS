import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import db from "@/libs/db"
import bcrypt from "bcrypt"

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password"
        },
      },
      async authorize(credentials, req) {
        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!userFound) {
          throw new Error("Usuario no encontrado")
        }
        console.log(userFound)

        const mathPassword = await bcrypt.compare(credentials.password, userFound.password)

        if (!mathPassword) {
          throw new Error("Contraseña incorrecta")
        }

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/login"
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }