import ReactPost from "./ReactPost";

const questions = [
  {
    question: "What are three advantages of using React?",
    answer:
      "React is fast, flexible, and allows for great usability. Moreover, it allows the developer to build reusable and custom components, creating a rich single page application.",
  },
  {
    question:
      "What does Single Page Application mean and how does it differ from a 'regular' website?",
    answer:
      "A Single Page Application (SPA) relies on JavaScript to render components within one single HTML file, whereas a Multi Page Application (MPA) secures each page to its core. Implementing SPA with React, hence, does not require page-reloading during use.",
  },
  {
    question: "Name three differences between React and Angular.",
    answer:
      "Angular (A) is a Javascript framework built using Typescript, while React (R)is a Javascript library and built using JSX. A is mostly used to build complex enterprise-grade apps, while R is used to build UI components in any app with frequently variable data. A’s learning curve is steeper due to its too many in-built functionalities while R’s smaller package size makes it easier to learn.",
  },
];

const BulletinBoard = () => {
  return (
    <div className="bulletin-wrapper">
      {questions.map((question, i) => {
        return <ReactPost key={i} {...question} />;
      })}
    </div>
  );
};

export default BulletinBoard;
