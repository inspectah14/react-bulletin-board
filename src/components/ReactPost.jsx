import PostLiked from "./PostLiked";

const ReactPost = (props) => {
  const { question, answer } = props;
  return (
    <div className="post-container">
      <h4> {question} </h4>
      <p> {answer} </p>
      <PostLiked />
    </div>
  );
};

export default ReactPost;
