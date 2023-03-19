import React, { useState, useEffect } from 'react';
import './styles.css';
import { questions } from './temp/data';
import { moveQuestionToOtherLevel } from './utils/questions';
import QuestionsList from './controls/QuestionList';
import { getCurrentDay, getLevelsForDay, getQuestionsForLevels } from './utils/calculations';
import { loadQuestions, saveQuestions, storeDay } from './utils/dataApi';
import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore/lite';

export default function App() {
  const loadedQuestions = loadQuestions();
  const [questionsMap, setQuestionsMap] = useState(loadedQuestions || questions);
  const [selectedId, setSelectedId] = useState(null);
  const currentDay = getCurrentDay();

  useEffect(() => {
    async function loadCards() {
      const cardsCol = collection(db, 'cards');
      const cardSnapshot = await getDocs(cardsCol);
      const levels = getLevelsForDay(currentDay);
      const cardList = cardSnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((card) => levels.includes(card.level))
        .sort((a, b) => b.level - a.level);
      console.log(cardList, questionsMap);
      return cardList;
    }
    loadCards();
  }, []);

  const handleSelectionChange = (id) => {
    setSelectedId(id);
  };

  const handleQuestionMove = ({ from, to, id }) => {
    const newMap = moveQuestionToOtherLevel({
      questionsMap,
      lvlFrom: from,
      lvlTo: to,
      questionId: id
    });
    setQuestionsMap(newMap);
    saveQuestions(newMap);
    const isEverythingAnswered = getQuestionsForLevels(newMap, levels).length === 0;
    if (isEverythingAnswered) {
      storeDay(currentDay);
    }
  };

  const handleQuestionAdd = (newQuestion) => {
    const newMap = { ...questionsMap, 1: [...questionsMap[1], newQuestion] };
    setQuestionsMap(newMap);
    saveQuestions(newMap);
  };

  const levels = getLevelsForDay(currentDay);
  const questionsData = getQuestionsForLevels(questionsMap, levels);
  return (
    <>
      <span>
        levels: {levels.toString()} day:{currentDay}
      </span>
      <QuestionsList
        questions={questionsData}
        onQuestionMove={handleQuestionMove}
        selectedId={selectedId}
        onSelect={handleSelectionChange}
        onQuestionAdd={handleQuestionAdd}
      />
    </>
  );
}
