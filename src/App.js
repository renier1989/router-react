import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";
import { BlogPost } from "./BlogPage/BlogPost.js";
import { LoginPage } from "./Login/LoginPage";
import { LogoutPage } from "./Login/LogoutPage";
import { AuthProvider } from "./Auth/auth";

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
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<p> Not Found!</p>} />
            {/* este me dira que si ingreso a una ruta que no este definida muestro algo opcional importante , esta tiene que estar difinida al final de todas las rutas validas */}
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
