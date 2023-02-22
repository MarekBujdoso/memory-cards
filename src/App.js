import React, { useState } from "react";
import "./styles.css";
import { questions } from "./temp/data";
import { moveQuestionToOtherLevel } from "./utils/questions";
import QuestionsList from "./controls/QuestionList";
import {
  getCurrentDay,
  getLevelsForDay,
  getQuestionsForLevels,
} from "./utils/calculations";
import { loadQuestions, saveQuestions, storeDay } from "./utils/dataApi";

export default function App() {
  const loadedQuestions = loadQuestions();
  const [questionsMap, setQuestionsMap] = useState(
    loadedQuestions || questions
  );
  const [selectedId, setSelectedId] = useState(null);
  const currentDay = getCurrentDay();

  const handleSelectionChange = (id) => {
    setSelectedId(id);
  };

  const handleQuestionMove = ({ from, to, id }) => {
    const newMap = moveQuestionToOtherLevel({
      questionsMap,
      lvlFrom: from,
      lvlTo: to,
      questionId: id,
    });
    setQuestionsMap(newMap);
    saveQuestions(newMap);
    storeDay(currentDay);
  };

  const handleQuestionAdd = (newQuestion) => {
    const newMap = { ...questionsMap, 1: [...questionsMap[1], newQuestion] };
    setQuestionsMap(newMap);
    saveQuestions(newMap);
    storeDay(currentDay);
  };

  const levels = getLevelsForDay(currentDay);
  const lvlQuestions = getQuestionsForLevels(questionsMap, levels);
  return (
    <div className="App">
      <QuestionsList
        key={1}
        level={1}
        lvlQuestions={lvlQuestions}
        onQuestionMove={handleQuestionMove}
        selectedId={selectedId}
        onSelect={handleSelectionChange}
        onQuestionAdd={handleQuestionAdd}
      />
    </div>
  );
}
