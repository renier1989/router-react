import React from 'react'
import { useAuth } from '../Auth/auth';
import { Navigate, useLocation } from 'react-router-dom';

function LoginPage() {
  
const auth = useAuth(); // aqui ya esta definida la conexion con el contexto de la fakeautentication, aqui puedo accedor a todo los estado y funciones definidas en el contexto , como un objeto { user, login, logout} o como simplemente auth pero accediendolos cono auth.user auth.login auth.logout
const [username , setUsername] = React.useState('');


// esta funcion es para poder hacer login
const login = (e) =>{
    e.preventDefault();
    auth.login({username}); //le paso al contexto a travez de la funcion auth.login definida en el AuthProvider con el username
}

// esta validacion lo que hace es que si ya estoy autenticado y el usuario quiere volver a ingresar a la ruta de "login" entonces le hago un redirect hace la pagina de perfil 
if(auth.user){return <Navigate to="/profile" />}

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <label>UserName: </label>
            <input onChange={e =>setUsername(e.target.value)} /> 
            <button type="submit">Log In</button>
        </form>
    </div>
  )
}

export {LoginPage}