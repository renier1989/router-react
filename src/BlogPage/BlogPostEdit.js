import React from 'react';
import {postdata} from '../Constant/postdata'
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/auth';

function BlogPostEdit() {
    const navigate = useNavigate(); // con esto le podemos indicar a una funcion hacia donde nos queremos mover.
    const {slug} = useParams(); // esta es la propiedad que me facilita la captura de lo que se esta pasando por la url.
    const blogpost  = postdata.find(post => post.slug === slug);
    const onGoingBack = () => {
        navigate('/blog');
    };
    const auth = useAuth(); 
    console.log('SOY ADMIN: ', auth.user.isAdmin);
    console.log('SOY AUTOR: ', blogpost.author === auth.user?.username);
    console.log('PUEDO EDITAR: ', (auth.user.isAdmin || blogpost.author === auth.user?.username));

    // con eso hago una validacion para que identificar si el usuario que esta autenticado es Admin o si es el autor de post.
    if(auth.user.isAdmin || blogpost.author !== auth.user?.username ){
    }else{
        return <Navigate to='/profile' />;
    }

  return (
    <div>
        <h1>Aqui edito los datos del post</h1>
        <form >
            <label >title:</label>
            <input type="text" />
            <label >Content:</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
        {/* <h2>{blogpost.title}</h2> */}
        <button onClick={onGoingBack}>Return</button>
        {/* hago la validacion para mostrar el boton fake para editar los post  */}
        {/* {doActions && (
            <button>Edit Post</button>
        )} */}
        {/* <p>{blogpost.author}</p> */}
        {/* <p>{blogpost.content}</p> */}
    </div>
  )
}

export  {BlogPostEdit}