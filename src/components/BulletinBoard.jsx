import ReactPost from "./ReactPost";

const questions = [
  {
    question: "Vad är tre fördelar med att använda React?",
    answer: "A roman pasta dish",
  },
  {
    question:
      "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
    answer: "Caracas",
  },
  {
    question: "Nämn tre skillnader mellan React och Angular.",
    answer: "The Perigrine Falcon",
  },
];

const BulletinBoard = () => {
  return (
    <div>
      <h2>Bulletin Board</h2>
      <div className="bulletin-wrapper">
        {questions.map((question, i) => {
          return <ReactPost key={i} {...question} />;
        })}
      </div>
    </div>
  );
};

export default BulletinBoard;
