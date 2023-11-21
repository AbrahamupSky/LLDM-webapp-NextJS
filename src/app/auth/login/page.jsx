"use client"

import { toast } from 'sonner'
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState(null)

  const router = useRouter()
  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password
    })

    if (res.error) {
      setError(toast.error(res.error))
    } else {
      router.push("/")
    }

    console.log(res)
  })
  

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center" >
      <form onSubmit={onSubmit} className='w-1/4'>
        <h1 className="text-3xl font-bold mb-5">Login</h1>
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Correo Electronico</label>
          <input type="email" placeholder="Correo Electronico"
            {...(register("email", {
              required: {
                value: true,
                message: 'El correo electronico es requerido'
              }
            }))}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Contraseña</label>
          <input type="password" placeholder="Contraseña"
            {...(register("password", {
              required: {
                value: true,
                message: 'La contraseña es requerida'
              }
            }))}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4">
          Iniciar Sesion
        </button>
      </form>
    </div>
  )
}

export default LoginPage