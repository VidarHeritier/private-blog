import "./Blogpost.modale.css";
import { Posted } from "../Posted/Posted";

export function BlogPost() {
  return (
    <>
      <div className="post-box">
        <input type="text" name="blog post" id="post" />
        <input
          type="submit"
          value="Post"
          className="submit-post"
          onClick={Posted}
        />
      </div>
    </>
  );
}
