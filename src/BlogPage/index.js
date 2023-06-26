import React from 'react';
import {Link} from 'react-router-dom';
import {postdata} from '../Constant/postdata.js'
function BlogPage() {
  return (
    <div>
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