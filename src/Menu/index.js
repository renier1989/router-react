import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../Auth/auth'

function Menu() {
  const auth = useAuth();
  return (
    <nav>
        <ul>
          {routes.map((route,index)=>{
            if(route.private && !auth.user) return null;

            return(
            <li key={index}>
              <NavLink 
              style={({isActive})=>({color : isActive ? 'red' : 'green'})}
              to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          )}
          )
          }

        </ul>
    </nav>
  )
}

const routes = [];
routes.push({
  to : '/',
  text : 'Home',
  private : false,
});
routes.push({
  to : '/blog',
  text : 'Blog',
  private : false,
});
routes.push({
  to : '/profile',
  text : 'Profile',
  private : true,
});
routes.push({
  to : '/login',
  text : 'Login',
  private : false,
});
routes.push({
  to : '/logout',
  text : 'Logout',
  private : true,
});
  
export  {Menu}