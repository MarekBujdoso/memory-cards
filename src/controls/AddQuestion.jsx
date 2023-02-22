import React, { useState } from "react";
import PropTypes from "prop-types";
import "./questionList.css";
import EditableCard from "./cards/EditableCard";

function getEmptyQuestion() {
  return {
    answer: "",
    id: crypto.randomUUID(),
    question: ""
  };
}

const AddQuestion = ({ onQuestionAdd }) => {
  const [questionObj, setQuestionObj] = useState(getEmptyQuestion());
  const [error, setError] = useState("");
  const [isNewVisible, setIsNewVisible] = useState(false);

  const handleQuestionAdd = () => {
    if (questionObj.question && questionObj.answer) {
      onQuestionAdd(questionObj);
      setQuestionObj(getEmptyQuestion());
    } else {
      setError("Please, populate question and answer.");
    }
  };

  const handleQuestionChange = (questionChange) => {
    setQuestionObj({ ...questionObj, ...questionChange });
    setError("");
  };

  return (
    <div className="newQuestion">
      <button
        className="addButton"
        onClick={() => setIsNewVisible((is) => !is)}
      >
        Add a new card
      </button>
      <div className={`newCard ${isNewVisible ? "visible" : ""}`}>
        <EditableCard
          key={questionObj.id}
          questionObj={questionObj}
          onQuestionChange={handleQuestionChange}
          error={error}
        />
        <button className="saveButton" onClick={handleQuestionAdd}>
          Save
        </button>
      </div>
    </div>
  );
};

AddQuestion.propTypes = {
  onQuestionAdd: PropTypes.func.isRequired
};

export default AddQuestion;
