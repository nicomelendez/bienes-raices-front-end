import React, { useEffect } from 'react'

const API_URL = "http://localhost:3001/auth/login";


export const Login = () => {

  async function login(){

    const personal = await fetch(API_URL)
    .then(response => response.json())
    .then(data =>(console.log(data)));
    
    return personal;
  }

  useEffect(()=>{
    login();
  },[]);
  return (
    <div>
      
    </div>
  )
}
