import { Link } from "react-router-dom";

import classes from "./post.module.css";

const Post = ({ id, body, author }) => {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;
