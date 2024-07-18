import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import styles from "./PostsList.module.css";
import { PostType } from "../types";

function PostsList() {
  const posts = useLoaderData() as PostType[];

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
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
        <div style={{ textAlign: "center", color: "whitesmoke" }}>
          <h2>No posts yet...</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
