import React from "react";
import {useNavigate} from 'react-router-dom';

// EN ESTE ARCHIVO CREO UN CONTEXTO PARA PODER MANEJAR LA INFORMACIN DE LOS USUARIO CUANDO SE AUTENTICAN,
// ESTO ES SOLO UNA SIMULACION DE AUTENTICACION, NO ES UN PROCESO REAL ES UN FAKEAUTH

// creo el contexto
const AuthContext = React.createContext();

// creo una funcion para poder usar el provider y poder pasar y recibir los datos
function AuthProvider ({children}){
    const navigate = useNavigate();
    const [user , setUser] = React.useState(null);  //esto es un estado para poder manipular los datos del usuario , null quiere decir que no hay usuario autenticado

    // esta funcion es para poder setear el dato del username, y asi poder asignar o rellenar la variable auth y el estado user ,con lo que escribio el usuario
    const login = ({username}) => {
        setUser({username}); // seteo lo que el usuario haya escrito como username
        navigate('/profile'); // luego le digo que me navegue a la pagina del profile.
    }

    // esta funcion es para cuando el usuario haga logout ponga en null la variable auth y el estado user
    const logout = () => {
        setUser(null); // simula que se cierra la sesion y pongo user  en null 
        navigate('/'); // luego de cerrar la sesion hago que navege a la pagina del home
    }

    const auth = {user, login, logout}; // aqui le asigno a la propiedad auth, todos los estados y funciones para que puedan ser usados por todos los compoonentes hijos.
    return (
        // aqui creo el provider que va a tener todas la variable para ser consumidas y recibidas en un variable principal "auth"
        <AuthContext.Provider value={auth}> 
            {/* es importante definir la logica de los contextos para que los componente que estan encapsulados en el componente del contexto puedan comuncarse entre si */}
            {children} 
        </AuthContext.Provider>
    );
}

// IMPORTANTE : AQUI CREO UN REACT HOOK QUE VA A TENER EL CONSUMER , VA A LLAMAR AL CONSUMER DEL CONTEXTO PARA PODER LO QUE TENGA EL PROVIDER 
// SE PUEDE HACER ASI PARA QUE DIRECTAMENTE TENGA EL CONSUMO EN UN SOLO ARCHIVO

// esta es la funcion de reacthook con la convencion useAuth, todo reacthook debe empezar con esa convencion "use"
// esto es lo que se exporta (useAuth) para que se haga corractamente el consumo del contexto creado en el provider. aqui estara la informacion de la autenticacion.
function useAuth(){
    const auth = React.useContext(AuthContext);
    return auth;
}

// aqui se hace una exportacion de multiples propiedad y funciones para ser consumidad por los demas componentes
export {
    AuthProvider,
    useAuth,
};