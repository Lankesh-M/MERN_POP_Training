import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectApi = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log("Couldn't read the API", err));
  }, []);   
  return (
    <div>
      <h1>This is UseEffect example with API call</h1>
      <h2>We are going to fetch data from JSON Placeholder and display the data</h2>
      <hr>
      </hr>
      <ol>
        {posts.map((post)=>(<li key={post.id}>{post.title}</li>))}
      </ol>
    </div>
  );
};

export default UseEffectApi;
