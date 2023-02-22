import React, { useState } from "react";
import PropTypes from "prop-types";
import ThumbUpButton from "../buttons/ThumbUpButton";
import ThumbDownButton from "../buttons/ThumbDownButton";
import "./card.css";

const Card = ({
  back,
  front,
  onCorrectAnswer = () => {},
  onWrongAnswer = () => {},
  isSelected,
  onBackClick,
  onFrontClick
}) => {
  const [showAnswerButtons, setShowAnswerButtons] = useState(false);
  const isTransitionEnded = isSelected && showAnswerButtons;

  function handleBackTurn() {
    setShowAnswerButtons(false);
    onBackClick();
  }

  const handleCorrect = () => {
    handleBackTurn();
    setTimeout(() => onCorrectAnswer(), 1000);
  };

  const handleWrong = () => {
    handleBackTurn();
    setTimeout(() => onWrongAnswer(), 1000);
  };

  return (
    <div
      className={`card ${isSelected ? "clicked" : ""}`}
      onTransitionEnd={() => setShowAnswerButtons(isSelected)}
    >
      <div className="content">
        <button className="front" onClick={onFrontClick}>
          {front}
        </button>
        <button className="back" onClick={handleBackTurn}>
          {back}
        </button>
        {isTransitionEnded && (
          <div className="answer">
            <ThumbUpButton onClick={handleCorrect} />
            <ThumbDownButton onClick={handleWrong} />
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  back: PropTypes.string.isRequired,
  front: PropTypes.string.isRequired,
  onCorrectAnswer: PropTypes.func,
  onWrongAnswer: PropTypes.func,
  isSelected: PropTypes.bool,
  onBackClick: PropTypes.func,
  onFrontClick: PropTypes.func
};

export default Card;
