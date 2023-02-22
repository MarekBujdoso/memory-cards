import React, { useState } from "react";
import PropTypes from "prop-types";
import "./card.css";

const EditableCard = ({ questionObj, onQuestionChange, error = "" }) => {
  const [isBack, setIsBack] = useState(false);
  const { answer, question } = questionObj;

  return (
    <div className={`card ${isBack ? "clicked" : ""}`}>
      <div className="content">
        <div className="front editable" onClick={() => setIsBack((b) => !b)}>
          <label className="cardLabel" htmlFor="new_question">
            Question:
          </label>
          <textarea
            id="new_question"
            className="input textarea"
            type="text"
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => onQuestionChange({ question: e.target.value })}
            value={question}
          />
          <span className="error">{error}</span>
        </div>
        <div className="back editable" onClick={() => setIsBack((b) => !b)}>
          <label className="cardLabel" htmlFor="new_answer">
            Answer:
          </label>
          <input
            id="new_answer"
            className="input"
            type="text"
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => onQuestionChange({ answer: e.target.value })}
            value={answer}
          />
          <span className="error">{error}</span>
        </div>
      </div>
    </div>
  );
};

EditableCard.propTypes = {
  questionObj: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired
  }).isRequired,
  onQuestionChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default EditableCard;
