import { userLogin } from '../interfaces/interface';

export const iniciarSesion = (e: React.FormEvent<HTMLFormElement>) => {
  
    e.preventDefault();
  
    const {email, password} = e.currentTarget
  
    const usuario:userLogin = {
  
      email: email.value,
      password: password.value
  
    }
    
    return console.log(usuario)

  }

async function peticionLogin(usuario:userLogin){
    
}