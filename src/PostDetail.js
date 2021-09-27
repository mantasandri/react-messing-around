import React, { useEffect, useState } from 'react'

function PostDetail({ post }) {
  const [active, setActive] = useState(false);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    async function fetchPosts() { 
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                        .then((response) => response.json())
                        .catch((error) => {
                          console.log(error)
                        });
    setPostComments(response);
    }
    fetchPosts();
  }, [post.id]);

  function toggleActive() {
    setActive(!active)
  }

  function PostDetailComments() {
    return (
      <>
       {postComments.map((comment) => {
         return (
           <div key={comment.id}>
            <h2><a href={`mailto:${comment.email}`}>{ comment.name }</a></h2>
            <p>{ comment.body }</p>
           </div>
         )
       })} 
      </>
    )
  }

  if (postComments) {
    return (
      <>
       <h1>{ post.title }</h1>
       <p onClick={toggleActive}>{ post.body }</p>
       { active ? <PostDetailComments/> : <></> }
      </>
    )
  }

  return "Loading comments...";
}

export default PostDetail;