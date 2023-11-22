"use client"
import { usehtmlForm } from "react-hook-htmlForm"
import { toast } from 'sonner'
import { useRouter } from "next/navigation"
import { useEffect } from 'react'
import Datepicker from 'flowbite-datepicker/Datepicker'

function RegisterPage() {
  const { register, handleSubmit, htmlFormState: { errors } } = usehtmlForm()
  const router = useRouter()

  useEffect(() => {
    const datepickerEl = document.getElementById('datepickerId');

    if (datepickerEl) {
      new Datepicker(datepickerEl, {
        htmlFormat: 'yyyy-mm-dd',
        language: 'es',
      });
    } else {
      console.error("Element with ID 'datepickerId' not found");
    }
  }, []);
  
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
  })
  
  return (
    <div class="p-4 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <form onSubmit={onSubmit}>

          <div class="bg-gray-800 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <h1 className="text-3xl text-slate-200 font-bold mb-4">Registrar usuario</h1>
            <div class="gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mb-10">
              <div class="text-gray-600 mb-5">
                <p class="font-medium text-lg text-white">Datos personales</p>
                <p className="text-white">Por favor llena todos los campos</p>
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-2">
                    <label htmlFor="full_name">Nombres</label>
                    <input 
                      placeholder='Cristiano Ronaldo' 
                      type="text" 
                      name="full_name" 
                      id="full_name" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    />
                  </div>
                  
                  <div class="md:col-span-2">
                    <label htmlFor="full_name">Apellidos</label>
                    <input 
                      placeholder='dos Santos Aveiro' 
                      type="text" 
                      name="full_name" 
                      id="full_name" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="md:col-span-1">
                    <label htmlFor="full_name">Nombre de usuario</label>
                    <input 
                      placeholder='El Bicho' 
                      type="text" 
                      name="full_name" 
                      id="full_name" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label htmlFor="email">Correo Electronico</label>
                    <input 
                      type="text" 
                      name="email" 
                      id="email" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@correo.com"
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label htmlFor="address">Domicilio</label>
                    <input 
                      placeholder="Algun lugar 777"  
                      type="text" 
                      name="address" 
                      id="address" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label htmlFor="city">Colonia</label>
                    <input 
                      placeholder="Hermosa Provincia" 
                      type="text" 
                      name="city" 
                      id="city" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label htmlFor="country">Telefono</label>
                    <input 
                      name="country" 
                      id="country" 
                      placeholder="3333333333" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label htmlFor="state">Ocupación</label>
                    <input 
                      name="state" 
                      id="state" 
                      placeholder="Estudiante" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="md:col-span-1">
                    <label htmlFor="zipcode">Grado de Estudios</label>
                    <input 
                      type="text" 
                      name="zipcode" 
                      id="zipcode" 
                      class="transition-all items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Universidad"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-white">Contraseña</label>
                    <input  
                      type="password" 
                      className="transition-all items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="**************" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-white">Repetir Contraseña</label>
                    <input  
                      type="password" 
                      className="transition-all items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="**************" 
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label className="text-white">Fecha de Nacimiento</label>
                    
                    <div class="relative max-w-sm">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </div>
                      <input 
                        autoComplete="off" 
                        id="datepickerId" 
                        datepicker-buttons 
                        type="text" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"
                      />
                    </div>

                  </div>

                  <div className="md:col-span-5">
                    <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                  </div>

                  <div className="md:col-span-5">
                    <h1 className='text-white text-2xl font-bold mb-4'>Contacto de Emergencia</h1>
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-white">Contacto de Emergencia</label>
                    <input  
                      type="text" 
                      className="transition-all items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Leonel Messi" 
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-white">Parentesco</label>
                    <input  
                      type="text" 
                      className="transition-all items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Padre / Madre" 
                    />
                  </div>

                  <div class="md:col-span-1">
                    <label htmlFor="country">Telefono</label>
                    <input 
                      name="country" 
                      id="country" 
                      placeholder="3333333333" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                </div>
                <div className="w-full mt-5 bg-blue-700 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded text-center cursor-pointer">
                  <button className="text-white">Registrar</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage