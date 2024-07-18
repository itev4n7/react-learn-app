import { useLoaderData, Link, LoaderFunctionArgs } from "react-router-dom";
import Modal from "../components/Modal";
import { PostType } from "../types";
import styles from "./PostDetails.module.css";
import { BASE_URL } from "../constants";

export async function loader({ params }: LoaderFunctionArgs) {
  const response = await fetch(`${BASE_URL}/posts/${params.postId}`);
  const data = await response.json();
  return data.post;
}

function PostDetails() {
  const post = useLoaderData() as PostType;

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={styles.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;
