import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./posts-list.module.css";

const PostsList = (props) => {
  return (
    <>
    <NewPost />
    <ul className={classes.posts}>
        <Post author="Chuck Norris" text="You suck Max" />
        <Post author="Boogie Brown" text="This is the best!" />
    </ul>
    </>
  )
}

export default PostsList;
