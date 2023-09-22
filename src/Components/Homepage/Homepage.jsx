import CreatePostCard from "../Post Cards/CreatePostCard";
import { Login } from "../Login/Login";
import postMalone from "./929026_v9_bb.jpg";

export function Homepage() {
  return (
    <>
      <header>
        <h1>Post Alone</h1> <img src={postMalone} alt="" />;
      </header>
      <section>
        <Login></Login>
      </section>
      <main>
        <CreatePostCard></CreatePostCard>
      </main>
    </>
  );
}
