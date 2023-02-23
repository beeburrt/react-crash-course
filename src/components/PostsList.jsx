import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./posts-list.module.css";

const PostsList = ({ modalVisible, onPostDone }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (evt) => {
    setEnteredBody(evt.target.value);
  };

  const authorChangeHandler = (evt) => {
    setEnteredAuthor(evt.target.value);
  };

  return (
    <>
      {modalVisible && (
        <Modal onClose={onPostDone}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} text={enteredBody} />
        <Post author="Boogie Brown" text="This is the best!" />
      </ul>
    </>
  );
};

export default PostsList;
