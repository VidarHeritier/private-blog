import CreatePostCard from "../Post Cards/CreatePostCard";
import postMalone from "../Homepage/929026_v9_bb.jpg";
import { BlogPost } from "../Blogpost/Blogpost";

export function Posted() {
  return (
    <>
      <header>
        <h1>Post Alone</h1> <img src={postMalone} alt="" />
      </header>
      <main>
        <BlogPost></BlogPost>
        <CreatePostCard></CreatePostCard>
      </main>
    </>
  );
}
