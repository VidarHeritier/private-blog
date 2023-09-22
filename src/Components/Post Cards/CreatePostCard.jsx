import { LikeCounter } from "../Reactions/LikeCounter/LikeCounter";
import "./Cards.modale.css";

function CreatePostCard() {
  return (
    <>
      <div className="card">
        <div className="user">
          <img src="" alt="" />
          <h3>Alias: Killer23498</h3>
        </div>
        <div className="post">
          <h2 className="title">Hola</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            aperiam maiores quidem cupiditate quae labore, quam quas quisquam
            obcaecati enim inventore totam similique sint nulla rem aliquid est!
            Repellendus, eveniet?
          </p>
        </div>
        <div className="reactions">
          <LikeCounter></LikeCounter>
        </div>
      </div>
    </>
  );
}
export default CreatePostCard;
