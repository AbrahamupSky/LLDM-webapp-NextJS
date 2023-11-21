"use client"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = handleSubmit(data => {
    console.log(data)
  })
  
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-3xl font-bold mb-5">Registro</h1>

        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Nombres</label>
        <input type="text" placeholder="Nombres"
          {...(register("name", {
            required: {
              value: true,
              message: 'El nombre es requerido'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.name && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm mt-3">Apellidos</label>
        <input type="text" placeholder="Apellidos"
          {...(register("apellidos", {
            required: {
              value: true,
              message: 'El apellido es requerido'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.apellidos && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Nombre de Usuario</label>
        <input type="text" placeholder="Username"
          {...(register("username", {
            required: {
              value: true,
              message: 'El nombre de usuario es requerido'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.username && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
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
        {errors.email && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Domicilio</label>
        <input type="text" placeholder="Domicilio"
          {...(register("domicilio", {
            required: {
              value: true,
              message: 'El domicilio es requerido'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.domicilio && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Colonia</label>
        <input type="text" placeholder="Colonia"
          {...(register("colonia", {
            required: {
              value: true,
              message: 'La colonia es requerida'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.colonia && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Telefono</label>
        <input type="number" placeholder="Telefono"
          {...(register("telefono", {
            required: {
              value: true,
              message: 'El telefono es requerido'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.telefono && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
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
        {errors.password && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Repetir contraseña</label>
        <input type="password" placeholder="Contraseña 2 ahora es personal"
          {...(register("confirmPassword", {
            required: {
              value: true,
              message: 'La contraseña es requerida'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Contacto de emergencia</label>
        <input type="text" placeholder="Contacto de emergencia"
          {...(register("emergencia", {
            required: {
              value: true,
              message: 'El contacto de emergencia es requerido'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.emergencia && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Parentesco</label>
        <input type="text" placeholder="Parentesco"
          {...(register("parentesco", {
            required: {
              value: true,
              message: 'El parentesco es requerido'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.parentesco && <p className="text-red-500 text-xs">Este campo es requerido</p>}
        
        
        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Numero de emergencia</label>
        <input type="number" placeholder="Telefono de emergencia"
          {...(register("numero", {
            required: {
              value: true,
              message: 'El telefono de emergencia es requerido'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.numero && <p className="text-red-500 text-xs">Este campo es requerido</p>}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4">
          Registrarse
        </button>
      </form>
    </div>
  )
}

export default RegisterPage