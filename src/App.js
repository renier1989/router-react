import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";
import { BlogPost } from "./BlogPage/BlogPost.js";
import { BlogPostEdit } from "./BlogPage/BlogPostEdit.js";
import { LoginPage } from "./Login/LoginPage";
import { LogoutPage } from "./Login/LogoutPage";
import { AuthProvider, AuthRouteProtect } from "./Auth/auth";


function App() {
  return (
    <>
        {/* esto sera como el provider para las rutas  */}
      <HashRouter>
        {/* este es el provider para el proceso de ls fake autenticacion. se pone en este nivel , siendo encapsulado por el provider del HashRouter, para que el  AuthProvider puede hacer uso de metodos y propiedades que pueda tener el HashRouter */}
        <AuthProvider>
          <Menu /> {/* puede ser un componente para la navegacion */}
          <Routes>
            {/* aqui es donde ira la parte dinamica y donde cambiaran a las diferentes vistas */}
            {/* el Route es el que me desplegara la nueva ruta y el o los componentes que se van a renderizar */}
            <Route path="/" element={<HomePage />} />
            {/* con esto vamos a poder hacer uso del Outlet, quiere decir que el componente BlogPage (el papa) , va a poder renderizar en el mismo lo que tenga el BlogPost en el lugar que llamemos al componente <Outlet /> */}
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
              <Route path=":slug/edit" element={
                <AuthRouteProtect>
                  <BlogPostEdit />
                </AuthRouteProtect>
              } />              
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={
              // con esto protejo el componente y la ruta de mostrarse si es que no hay un usuario autenticado
              <AuthRouteProtect>
                <LogoutPage />
              </AuthRouteProtect>
            } />
            <Route path="/profile" element={
              // con esto protejo el componente y la ruta si es que el usuario no esta autenticado 
              <AuthRouteProtect>
                <ProfilePage />
              </AuthRouteProtect>
            } />
            <Route path="*" element={<p> Not Found!</p>} />
            {/* este me dira que si ingreso a una ruta que no este definida muestro algo opcional importante , esta tiene que estar difinida al final de todas las rutas validas */}
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
