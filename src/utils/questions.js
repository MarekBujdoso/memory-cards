export function moveQuestionToOtherLevel({
  questionsMap,
  lvlFrom,
  lvlTo,
  questionId
}) {
  if (lvlFrom === lvlTo) {
    return questionsMap;
  }
  const movedQuestion = questionsMap[lvlFrom].find((q) => q.id === questionId);
  return {
    ...questionsMap,
    [lvlFrom]: questionsMap[lvlFrom].filter((q) => q.id !== questionId),
    [lvlTo]: [...questionsMap[lvlTo], movedQuestion]
  };
}
