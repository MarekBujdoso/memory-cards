import React from "react";
import PropTypes from "prop-types";
import Card from "./cards/Card";
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

QuestionsList.propTypes = {
  lvlQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired
    })
  ).isRequired,
  onQuestionMove: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onQuestionAdd: PropTypes.func.isRequired
};

export default QuestionsList;
