import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./posts-list.module.css";

const PostsList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
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
