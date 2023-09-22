import { useState } from "react";

export function LikeCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="plus">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="heart"
        >
          &#10084;
        </button>
        <p>{count}</p>
        <button
          className="minus"
          onClick={() => setCount((count) => (count <= 0 ? 0 : count - 1))}
        >
          &#127183;
        </button>
      </div>
    </>
  );
}
