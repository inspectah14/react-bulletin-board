const ReactPost = (props) => {
  return (
    <div className="post-container">
      <h4> {props.question} </h4>
      <p> {props.answer} </p>
      <button> Like </button>
    </div>
  );
};

export default ReactPost;
