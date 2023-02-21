import Card from "./Card";
import "./questionList.css";
import { MAX_LEVEL } from "../utils/const";
import AddQuestion from "./AddQuestion";

const QuestionsList = ({
  lvlQuestions,
  onQuestionMove,
  selectedId,
  onSelect,
  onQuestionAdd
}) => {
  return (
    <div className="levelWrapper">
      <h2>Check the cards:</h2>
      {lvlQuestions.map(({ question, answer, id, level }) => (
        <Card
          key={id}
          front={question}
          back={answer}
          onCorrectAnswer={() => {
            onQuestionMove({
              from: level,
              to: Math.min(level + 1, MAX_LEVEL),
              id
            });
          }}
          onWrongAnswer={() => {
            onQuestionMove({ from: level, to: 1, id });
          }}
          isSelected={selectedId === id}
          onFrontClick={() => onSelect(id)}
          onBackClick={() => onSelect(null)}
        />
      ))}
      <AddQuestion onQuestionAdd={onQuestionAdd} />
    </div>
  );
};

export default QuestionsList;
