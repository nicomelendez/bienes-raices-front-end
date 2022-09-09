import useFetch from '../hooks/UseFetch';

const API_URL = "http://localhost:3001/auth/login";


export const Login = () => {

    const dataCurso = useFetch(API_URL);
    console.log(dataCurso.data)
    if(dataCurso.state === "loading" || dataCurso.state === "idle"){
        return <>cargando...</>;
    }

    if(dataCurso.state === "error" || !dataCurso.data){
        return <>Error</>;
    }

  return (
    <>
       <h2>Hola</h2>
    </>
  )
}
