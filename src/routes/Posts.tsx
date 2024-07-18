import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";
import { BASE_URL } from "../constants";

export async function loader() {
  const response = await fetch(`${BASE_URL}/posts`);
  const data = await response.json();
  return data.posts;
}

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
