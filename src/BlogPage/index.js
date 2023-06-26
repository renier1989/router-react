import React from 'react';
import {Link , Outlet} from 'react-router-dom';
import {postdata} from '../Constant/postdata.js'
function BlogPage() {
  return (
    <div>

      <h1>Blog</h1>

      {/* con esto puedo hacer que las rutas anidadas se muestren dentro  del mimso componente padre .  */}
      {/* importante en la difinicion de rutas, la ruta debe estar contenida on encerrada en otra etiqueta route para poder hacer usao del Outlet */}
      <Outlet />   

      <ul>
          {postdata.map((post)=>(
            <BlogLink key={post.slug} post={post} />
          ))}
      </ul>
    </div>
  )
}

function BlogLink({post}) {
  return (
    <li>
      <Link to={post.slug}>
        {post.title}
      </Link>
    </li>
  );
}
  
export {BlogPage}