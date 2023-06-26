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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          <Route path="*" element={<p> Not Found!</p>} />   {/* este me dira que si ingreso a una ruta que no este definida muestro algo opcional importante , esta tiene que estar difinida al final de todas las rutas validas */}

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
