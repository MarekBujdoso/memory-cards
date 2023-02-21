import React, { useState } from "react";
import ThumbUpButton from "./ThumbUpButton";
import ThumbDownButton from "./ThumbDownButton";
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
  const isTranisitionEnded = isSelected && showAnswerButtons;

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
        <div className="front" onClick={onFrontClick}>
          {front}
        </div>
        <div className="back" onClick={handleBackTurn}>
          {back}
        </div>
        {isTranisitionEnded && (
          <div className="answer">
            <ThumbUpButton onClick={handleCorrect} />
            <ThumbDownButton onClick={handleWrong} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
