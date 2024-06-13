import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(2);
  const [idFromButtonClick, setIdFromButtonClick] = useState(2);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  //2nd parameter helping in getting the dynamic id from the input and setting in url

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" class="btn btn-primary" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  );
}
export default DataFetching;
