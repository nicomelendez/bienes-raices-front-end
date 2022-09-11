import React from 'react'
import {NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";

export const NavBienesRaices = () => {
  return (
    <nav className='flex-col items-center justify-center drop-shadow-sm'>

        <div className="w-full flex justify-end items-center bg-slate-50 pt-5 shadow rounded-lg">
            <div className="flex p-5 " >
                <NavLink className='border rounded-xl px-6 py-3' to="/inicio-de-sesion">
                    Iniciar sesion
                </NavLink>
                <NavLink className='px-6 py-3' to="/registrar">
                    Registrarme
                </NavLink>
            </div>
        </div>

        <div className="flex justify-around items-center py-8">
            <div className=''>
                <NavLink to='' className=''>
                    <h1 className='flex text-4xl font-bold'>Bienes<span className='font-light '>raices</span></h1>
                </NavLink>
            </div>

            <ul className='flex w-3/5 justify-end gap-5'>
                {
                    routes.map(({to,name})=>{
                    
                    if(to === "/olvide-contrasenia" || to === "/registrar"){
                        return null;
                    }
                        return(
                            <li key={to}>
                                <NavLink className={({isActive})=> isActive ? 'nav-active font-light px-6 py-3':'border rounded-xl font-light px-6 py-3'} 
                                    to={to}>
                                        {name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    </nav>
  )
}
