import { Link } from "react-router-dom";
import styles from "./Post.module.css";

function Post({ id, author, body }: PostType) {
  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
