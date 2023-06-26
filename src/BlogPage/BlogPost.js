import React from 'react';
import {postdata} from '../Constant/postdata'
import { useParams } from 'react-router-dom';

function BlogPost() {

    const {slug} = useParams(); // esta es la propiedad que me facilita la captura de lo que se esta pasando por la url.
    const blogpost  = postdata.find(post => post.slug === slug);

  return (
    <div>
        <h2>{blogpost.title}</h2>
        <p>{blogpost.author}</p>
        <p>{blogpost.content}</p>
    </div>
  )
}

export  {BlogPost}