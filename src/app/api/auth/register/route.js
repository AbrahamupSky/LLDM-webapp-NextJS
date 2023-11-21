import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import db from "@/libs/db"

export async function POST(request) {
  try {
    const data = await request.json()

    const emailAlreadyExists = await db.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (emailAlreadyExists) {
      return NextResponse.json({
        error: "Ese correo ya existe",
      }, {
        status: 400,
      })
    }

    const usernameAlreadyExists = await db.user.findUnique({
      where: {
        username: data.username,
      },
    })

    if (usernameAlreadyExists) {
      return NextResponse.json({
        error: "Ese nombre de usuario ya existe",
      }, {
        status: 400,
      })
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    const newUser = await db.user.create({
      data: {
        ...data,
        password: hashedPassword,
      }
    })

    const { password:_, ...user } = newUser

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    }, {
      status: 500,
    })
  }
}
