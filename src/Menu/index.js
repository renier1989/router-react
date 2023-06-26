import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav>
        <ul>
          {/* es la forma mas basica para poder manejar la navegacion con <Link></Link> */}
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li> */}

          {/* es una forma mas estilizada de manejar la navegacion porque posee una propiedad isActive y aplicar algunos estilos acorde a la ruta en la que estemos ubicados */}

          {/* <li>
            <NavLink 
            className={({isActive}) => ''}
            style={({isActive})=>({color : isActive ? 'red' : 'green'})}
            to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
            className={({isActive}) => ''}
            style={({isActive})=>({color : isActive ? 'red' : 'green'})}
            to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
            className={({isActive}) => ''}
            style={({isActive})=>({color : isActive ? 'red' : 'green'})}
            to="/profile">
              Profile
            </NavLink>
          </li> */}

          {routes.map((route)=>(
            <li>
              <NavLink 
              style={({isActive})=>({color : isActive ? 'red' : 'green'})}
              to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          ))
          }

        </ul>
    </nav>
  )
}

const routes = [];
routes.push({
  to : '/',
  text : 'Home',
});
routes.push({
  to : '/blog',
  text : 'Blog',
});
routes.push({
  to : '/profile',
  text : 'Profile',
});

export  {Menu}