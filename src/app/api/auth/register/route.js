import { NextResponse } from "next/server"
import db from "@/libs/db"

export async function POST(request) {
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

  const newUser = await db.user.create({
    data
  })

  return NextResponse.json(newUser)
}
