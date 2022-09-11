import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import {Login} from '../pages/Login';
import { NavBienesRaices } from "../components/layout/NavBienesRaices";

export const Navigation = () => {
    
    return(
       
            <BrowserRouter>
                <section className='container mx-auto'>

                    <NavBienesRaices/>
                    
                    <div className="w-full h-screen fondo rounded-xl"> 

                        <Routes>
                                
                                {routes.map(({to,path,Component})=>{
                                    return(
                                    <Route key={to} 
                                            path={path} 
                                            element={<Component/>} 
                                    />
                                    )
                                })}
                                
                                <Route path="/inicio-de-sesion" element={<Login/>}/>
                                <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>

                        </Routes>
                    </div>


                </section>
            </BrowserRouter>
    )
}