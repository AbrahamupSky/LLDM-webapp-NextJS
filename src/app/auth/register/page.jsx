"use client"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { useRouter } from "next/navigation";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const router = useRouter()
  
  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return toast.error('Las contraseñas no coinciden');
    }
  
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          nombres: data.nombres,
          apellidos: data.apellidos,
          username: data.username,
          email: data.email,
          domicilio: data.domicilio,
          colonia: data.colonia,
          telefono: data.telefono,
          ocupacion: data.ocupacion,
          zipcode: data.zipcode,
          estudios: data.estudios,
          emergencia: data.emergencia,
          parentesco: data.parentesco,
          numero: data.numero,
          password: data.password,
          fechaNacim: data.fechaNacim,
          actividadesExtra: data.actividadesExtra,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status} ${res.statusText}`);
      }
  
      // Verificar si la respuesta contiene datos antes de intentar analizarla
      const isJSONResponse = res.headers.get('content-type')?.includes('application/json');

      if (res.ok){
        router.push('/auth/login')
      }
  
      console.log(res);
    } catch (error) {
      console.error('Error al procesar la respuesta:', error);
    }
  });  
  
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center ">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-3xl font-bold mb-5">Registro</h1>

        <label htmlFor="" className="text-slate-500 mb-1 block text-sm">Nombres</label>
        <input type="text" placeholder="Nombres"
          {...(register("nombres", {
            required: {
              value: true,
              message: 'El nombre es requerido'
            }
          }))}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        {errors.nombres && <p className="text-red-500 text-xs">{errors.nombres.message}</p>}
        
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
        {errors.apellidos && <p className="text-red-500 text-xs">{errors.apellidos.message}</p>}
        
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
        {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
        
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
        {errors.domicilio && <p className="text-red-500 text-xs">{errors.domicilio.message}</p>}
        
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
        {errors.colonia && <p className="text-red-500 text-xs">{errors.colonia.message}</p>}
        
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
        {errors.telefono && <p className="text-red-500 text-xs">{errors.telefono.message}</p>}
        
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
        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
        
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
        {errors.emergencia && <p className="text-red-500 text-xs">{errors.emergencia.message}</p>}
        
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
        {errors.parentesco && <p className="text-red-500 text-xs">{errors.parentesco.message}</p>}
        
        
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
        {errors.numero && <p className="text-red-500 text-xs">{errors.numero.message}</p>}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4">
          Registrarse
        </button>
      </form>
    </div>
  )
}

export default RegisterPage