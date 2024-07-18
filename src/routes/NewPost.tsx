import { Link, Form, ActionFunctionArgs, redirect } from "react-router-dom";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { BASE_URL } from "../constants";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
