import { useState, useEffect } from "react";

import Post from "./Post";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import classes from "./posts-list.module.css";

const PostsList = ({ modalVisible, onPostDone }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {modalVisible && (
        <Modal onClose={onPostDone}>
          <NewPost onCancel={onPostDone} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && (
        <div
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          <h2>No posts found</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isLoading && (
        <div
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
};

export default PostsList;
