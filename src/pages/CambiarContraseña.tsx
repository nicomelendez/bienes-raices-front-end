import React, {useState} from 'react'
import {NavLink } from "react-router-dom";
export const CambiarContraseña = () => {

    const [errores, setErrores] = useState(false);

  return (
    <div>
          <div className='w-full  text-center text-4xl py-5'>
          <h2>Inicio de sesión</h2>
          {errores ? (<>Hubo errores</>) : (<></>)}

          </div>
          <form className='w-1/2 mx-auto rounded-lg shadow bg-slate-50 py-4 px-8 flex-col text-center space-y-7'>

            <div className=''>
              <label className='text-xl font-semibold'>E-mail:</label><br></br>
              <input className="w-4/5 py-4 px-8 rounded-lg shadow" type="email" name="email" id="email" placeholder=' ej. test@test.com'/>
            </div>

            <div className='flex justify-between text-sm'>
              <NavLink to="/registrar" className="hover:underline">
                  ¿No tienes cuenta?, registrate aquí
              </NavLink>

              <NavLink to="/inicio-de-sesion" className="hover:underline">
                ¿Tienes cuenta?, inicia sesión aquí
              </NavLink>
            </div>

           
            <input type="submit" value="Recuperar contraseña" className="bg-indigo-800 rounded-lg shadow pb-5 py-4 px-10 text-white hover:bg-indigo-500 cursor-pointer"/>

          </form>
      </div>
  )
}
