"use client"
import { useState } from "react"
import { toast } from 'sonner'
import { useRouter } from "next/navigation"
import { useEffect } from 'react'
import Datepicker from 'flowbite-datepicker/Datepicker'
import { useForm } from 'react-hook-form'

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
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
    <div className="p-4 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <form onSubmit={onSubmit}>

          <div className="bg-gray-800 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <h1 className="text-3xl text-slate-200 font-bold mb-4">Registrar usuario</h1>
            <div className="gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mb-10">
              <div className="text-gray-600 mb-5">
                <p className="font-medium text-lg text-white">Datos personales</p>
                <p className="text-white">Por favor llena todos los campos</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <label htmlFor="full_name">Nombres</label>
                    <input 
                      placeholder='Cristiano Ronaldo' 
                      type="text" 
                      name="full_name" 
                      id="full_name" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      {...(register("nombres", {
                        required: {
                          value: true,
                          message: 'El nombre es requerido'
                        }
                      }))}
                    />
                    {errors.nombres && <p className="text-red-500 text-xs">{errors.nombres.message}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="full_name">Apellidos</label>
                    <input 
                      placeholder='dos Santos Aveiro' 
                      type="text" 
                      name="full_name" 
                      id="full_name" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...(register("apellidos", {
                        required: {
                          value: true,
                          message: 'El apellido es requerido'
                        }
                      }))}
                    />
                    {errors.apellidos && <p className="text-red-500 text-xs">{errors.apellidos.message}</p>}
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="full_name">Nombre de usuario</label>
                    <input 
                      placeholder='El Bicho' 
                      type="text" 
                      name="full_name" 
                      id="full_name" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...(register("username", {
                        required: {
                          value: true,
                          message: 'El nombre de usuario es requerido'
                        }
                      }))}
                    />
                    {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Correo Electronico</label>
                    <input 
                      type="text" 
                      name="email" 
                      id="email" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@correo.com"
                      {...(register("email", {
                        required: {
                          value: true,
                          message: 'El correo electronico es requerido'
                        }
                      }))}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address">Domicilio</label>
                    <input 
                      placeholder="Algun lugar 777"  
                      type="text" 
                      name="address" 
                      id="address" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...(register("domicilio", {
                        required: {
                          value: true,
                          message: 'El domicilio es requerido'
                        }
                      }))}
                    />
                    {errors.domicilio && <p className="text-red-500 text-xs">{errors.domicilio.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">Colonia</label>
                    <input 
                      placeholder="Hermosa Provincia" 
                      type="text" 
                      name="city" 
                      id="city" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...(register("colonia", {
                        required: {
                          value: true,
                          message: 'La colonia es requerida'
                        }
                      }))}
                    />
                    {errors.colonia && <p className="text-red-500 text-xs">{errors.colonia.message}</p>}
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Código Postal</label>
                    <input 
                      placeholder="44770" 
                      type="text" 
                      id="zipcode" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...(register("zipcode", {
                        required: {
                          value: true,
                          message: 'El codigo postal es requerido'
                        }
                      }))}
                    />
                    {errors.colonia && <p className="text-red-500 text-xs">{errors.colonia.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Telefono</label>
                    <input 
                      name="country" 
                      id="country" 
                      placeholder="3333333333" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...(register("telefono", {
                        required: {
                          value: true,
                          message: 'El telefono es requerido'
                        }
                      }))}
                    />
                    {errors.telefono && <p className="text-red-500 text-xs">{errors.telefono.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">Ocupación</label>
                    <input 
                      name="state" 
                      id="state" 
                      placeholder="Estudiante" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...(register("ocupacion", {
                        required: false
                      }))}
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Grado de Estudios</label>
                    <input 
                      type="text" 
                      name="zipcode" 
                      id="zipcode" 
                      className="transition-all items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Universidad"
                      {...(register("estudios", {
                        required: false
                      }))}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-white">Contraseña</label>
                    <input  
                      type="password" 
                      className="transition-all items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="**************" 
                      {...(register("password", {
                        required: {
                          value: true,
                          message: 'La contraseña es requerida'
                        }
                      }))}
                    />
                    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-white">Repetir Contraseña</label>
                    <input  
                      type="password" 
                      className="transition-all items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="**************"
                      {...(register("confirmPassword", {
                        required: {
                          value: true,
                          message: 'La contraseña es requerida'
                        }
                      }))}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
                  </div>

                  <div className="md:col-span-1">
                    <label className="text-white">Fecha de Nacimiento</label>
                    
                    <div className="relative max-w-sm">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </div>
                      <input 
                        autoComplete="off" 
                        id="datepickerId" 
                        datepicker-buttons 
                        type="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"
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
                      {...(register("emergencia", {
                        required: {
                          value: true,
                          message: 'El contacto de emergencia es requerido'
                        }
                      }))}
                    />
                    {errors.emergencia && <p className="text-red-500 text-xs">{errors.emergencia.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-white">Parentesco</label>
                    <input  
                      type="text" 
                      className="transition-all items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Padre / Madre" 
                      {...(register("parentesco", {
                        required: {
                          value: true,
                          message: 'El parentesco es requerido'
                        }
                      }))}
                    />
                    {errors.parentesco && <p className="text-red-500 text-xs">{errors.parentesco.message}</p>}
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="country">Telefono</label>
                    <input 
                      name="country" 
                      id="country" 
                      placeholder="3333333333" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...(register("numero", {
                        required: {
                          value: true,
                          message: 'El telefono de emergencia es requerido'
                        }
                      }))}
                    />
                    {errors.numero && <p className="text-red-500 text-xs">{errors.numero.message}</p>}
                  </div>

                  <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4">
                    Registrarse
                  </button>
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