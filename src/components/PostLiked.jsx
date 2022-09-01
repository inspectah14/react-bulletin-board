import { useState } from "react";

const PostLiked = () => {
  const [like, setLike] = useState(false);

  const clickHandler = () => {
    setLike(!like);
  };
  return (
    <div className="post-liked">
      <button
        className={like ? "like-btn hidden" : "like-btn"}
        onClick={clickHandler}
      >
        Like
      </button>
      <p className={!like ? "like-text hidden" : "like-text"}>
        You've liked this post!
      </p>
    </div>
  );
};

export default PostLiked;
