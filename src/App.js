import {HashRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { Menu } from './Menu';
import { BlogPost } from './BlogPage/BlogPost.js';


function App() {
  return (
    <>
      <HashRouter>        {/* esto sera como el provider para las rutas  */}
        <Menu />          {/* puede ser un componente para la navegacion */}
        <Routes>          {/* aqui es donde ira la parte dinamica y donde cambiaran a las diferentes vistas */}
          
          {/* el Route es el que me desplegara la nueva ruta y el o los componentes que se van a renderizar */}
          <Route path="/" element={<HomePage />} />
          {/* con esto vamos a poder hacer uso del Outlet, quiere decir que el componente BlogPage (el papa) , va a poder renderizar en el mismo lo que tenga el BlogPost en el lugar que llamemos al componente <Outlet /> */}
          <Route path="/blog" element={<BlogPage />} >
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          
          <Route path="/profile" element={<ProfilePage />} />
          
          <Route path="*" element={<p> Not Found!</p>} />   {/* este me dira que si ingreso a una ruta que no este definida muestro algo opcional importante , esta tiene que estar difinida al final de todas las rutas validas */}

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
