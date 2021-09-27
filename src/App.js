import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() { 
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
                        .then((response) => response.json())
                        .catch((error) => {
                          console.log(error)
                        });
      setPosts(response);
    }
    fetchPosts();
  }, []);


  if (posts) {
    return (
      <div className="App">
        {posts.map((post) => {
          return <PostDetail post={post} key={post.id} />
        })}
      </div>
    )
  }
  return "Loading...";
}

export default App;