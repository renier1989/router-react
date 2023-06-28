import React from 'react';
import {postdata} from '../Constant/postdata'
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/auth';

function BlogPost() {
    const navigate = useNavigate(); // con esto le podemos indicar a una funcion hacia donde nos queremos mover.
    const {slug} = useParams(); // esta es la propiedad que me facilita la captura de lo que se esta pasando por la url.
    const blogpost  = postdata.find(post => post.slug === slug);
    const onGoingBack = () => {
        navigate('/blog');
    };
    const auth = useAuth(); 

    // con eso hago una validacion para que identificar si el usuario que esta autenticado es Admin o si es el autor de post.
    const doActions = auth.user?.isAdmin || blogpost.author === auth.user?.username; 

  return (
    <div>
        <h2>{blogpost.title}</h2>
        <button onClick={onGoingBack}>Return</button>
        {/* hago la validacion para mostrar el boton fake para editar los post  */}
        {doActions && (
            <button>Edit Post</button>
        )}
        <p>{blogpost.author}</p>
        <p>{blogpost.content}</p>
    </div>
  )
}

export  {BlogPost}