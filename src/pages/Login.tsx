import {FormEvent, useState} from 'react'
import { NavLink } from 'react-router-dom';
// import useFetch from '../hooks/UseFetch';
// const API_URL = "http://localhost:3001/auth/login";

export const Login = () => {
  
  const [errores, setErrores] = useState(false);
 
  const iniciarSesion = (e:any) => {
    
    e.preventDefault();
    
    
  }

  return (
      <div>
          <div className='w-full  text-center text-4xl py-5'>
          <h2>Inicio de sesión</h2>
          {errores ? (<>Hubo errores</>) : (<></>)}

          </div>
          <form onSubmit={iniciarSesion} className='w-1/2 mx-auto rounded-lg shadow bg-slate-50 py-4 px-8 flex-col text-center space-y-7'>

            <div className=''>
              <label className='text-xl font-semibold'>E-mail:</label><br></br>
              <input className="w-4/5 py-4 px-8 rounded-lg shadow" type="email" name="email" id="email" placeholder=' ej. test@test.com'/>
            </div>

            <div >
              <label className='text-xl font-semibold'>Contraseña</label><br></br>
              <input className="w-4/5 py-4 px-8 rounded-lg shadow" type="password" name="password" id="password" placeholder=" Contraseña..." />
            </div>

            <div className='flex justify-between text-sm'>
              <NavLink to="/registrar" className="hover:underline">
                  ¿No tienes cuenta?, registrate aquí
              </NavLink>

              <NavLink to="/olvide-contrasenia" className="hover:underline">
                ¿Olvidaste tú contraseña?
              </NavLink>
            </div>
       
            <input type="submit" value="Ingresar" className="bg-indigo-800 rounded-lg shadow pb-5 py-4 px-10 text-white hover:bg-indigo-500 cursor-pointer"/>

          </form>
      </div>
  )
}
