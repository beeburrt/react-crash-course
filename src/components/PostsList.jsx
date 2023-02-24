import { useState, useEffect } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./posts-list.module.css";

const PostsList = ({ modalVisible, onPostDone }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((data) => setPosts(JSON.parse(data.posts)));
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
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
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
    </>
  );
};

export default PostsList;
