import React from 'react';
import {postdata} from '../Constant/postdata'
import { useParams, useNavigate } from 'react-router-dom';

function BlogPost() {
    const navigate = useNavigate(); // con esto le podemos indicar a una funcion hacia donde nos queremos mover.
    const {slug} = useParams(); // esta es la propiedad que me facilita la captura de lo que se esta pasando por la url.
    const blogpost  = postdata.find(post => post.slug === slug);
    const onGoingBack = () => {
        navigate('/blog');
    };

  return (
    <div>
        <h2>{blogpost.title}</h2>
        <button onClick={onGoingBack}>Return</button>
        <p>{blogpost.author}</p>
        <p>{blogpost.content}</p>
    </div>
  )
}

export  {BlogPost}