import React from "react";
import {useNavigate, Navigate, useLocation} from 'react-router-dom';

// EN ESTE ARCHIVO CREO UN CONTEXTO PARA PODER MANEJAR LA INFORMACIN DE LOS USUARIO CUANDO SE AUTENTICAN,
// ESTO ES SOLO UNA SIMULACION DE AUTENTICACION, NO ES UN PROCESO REAL ES UN FAKEAUTH

// creo el contexto
const AuthContext = React.createContext();

// creo una lista simple para simular a personas que var a poder tener permiso de Admin
const AdminList = ['renier', 'admin', 'nancy'];

// creo una funcion para poder usar el provider y poder pasar y recibir los datos
function AuthProvider ({children}){
    const location = useLocation();
    
    const navigate = useNavigate();
    const [user , setUser] = React.useState(null);  //esto es un estado para poder manipular los datos del usuario , null quiere decir que no hay usuario autenticado
    
    // console.log(location);
    let from = location.state?.from?.pathname || '/';
    
    // esta funcion es para poder setear el dato del username, y asi poder asignar o rellenar la variable auth y el estado user ,con lo que escribio el usuario
    const login = ({username}) => {
        const isAdmin = AdminList.includes(username); 

        // const isAdmin = AdminList.find(admin => admin === username); // aqui lo que hago es buscar en la lista de admin si el nombre que escribio la peronsa esta y devolvera TRUE, esto lo seteo como una propiedad del estado user para poder usarlo en los componente donde necesite
        setUser({username, isAdmin}); // seteo lo que el usuario haya escrito como username
        // navigate('/profile'); // luego le digo que me navegue a la pagina del profile.
        navigate(from , {replae : true}); // luego le digo que me navegue a la pagina del profile.
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

// esto es un componente que se usa para proteger las rutas si es que no tiene a un usuario autenticado y hacerle un redirect a otra pagina
function AuthRouteProtect (props){
    const location = useLocation(); // con esto accedor un hook de la react router dom para capturar las locations de las rutas visitadas
    const auth = React.useContext(AuthContext);
    if(!auth.user){

        // se le debe pasar el parametro state con un objeto para poder capturar la ruta de la que se esta navegando.
        return <Navigate to="/login" state={{from:location}} replace />
    }else{
        return props.children
    }
}

// aqui se hace una exportacion de multiples propiedad y funciones para ser consumidad por los demas componentes
export {
    AuthProvider,
    useAuth,
    AuthRouteProtect,
};