import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

export const RegistrarUsuario = () => {
    const [errores, setErrores] = useState(false);

  return (
    <div>
        <div className='w-full  text-center text-4xl py-5'>
            <h2>Registarme</h2>
            {errores ? (<>Errores</>) : (<></>)}
        </div>

        <form className='w-1/2 mx-auto rounded-lg shadow bg-slate-50 py-4 px-8 flex-col text-center space-y-7'>
            <div className='flex justify-around'>
                <div className='space-y-1 pb-2 pr-5'>
                    <label className='text-xl font-semibold'>Nombre</label><br>
                    </br>
                    <input className="w-full py-4 px-8 rounded-lg shadow" type="text" name="nombre" placeholder='Nombre...'/>
                </div>
                <div className='space-y-1 pb-2'>
                    <label className='text-xl font-semibold'>Apellido</label><br>
                    </br>
                    <input className="w-full py-4 px-8 rounded-lg shadow" type="text" name="apellido" placeholder='Apellido...'/>
                </div>
            </div>
            <div className='space-y-1 pb-2'>
                <label className='text-xl font-semibold'>E-mail:</label><br></br>
                <input className="w-4/5 py-4 px-8 rounded-lg shadow" type="email" name="email" id="email" placeholder=' ej. test@test.com'/>
            </div>
            <div className='space-y-1 pb-2'>
                <label className='text-xl font-semibold'>Contraseña</label><br>
                </br>
                <input className="w-4/5 py-4 px-8 rounded-lg shadow" type="password" name="password" placeholder='Contraseña...'/>
            </div>

            <div className='space-y-1 pb-2'>
                <label className='text-xl font-semibold'>Repetir contraseña</label><br>
                </br>
                <input className="w-4/5 py-4 px-8 rounded-lg shadow" type="repetir-password" name="repetir-password" placeholder='Repetir contraseña...'/>
            </div>

            <div className='flex justify-between text-sm'>
              <NavLink to="/inicio-de-sesion" className="hover:underline">
                  ¿Tienes cuenta?, inicia sesión aquí
              </NavLink>

              <NavLink to="/olvide-contrasenia" className="hover:underline">
                ¿Olvidaste tú contraseña?
              </NavLink>
            </div>

            <input type="submit" value="Registrarme" className="bg-indigo-800 rounded-lg shadow pb-5 py-4 px-10 text-white hover:bg-indigo-500 cursor-pointer"/>

        </form>
    </div>
  )

}
