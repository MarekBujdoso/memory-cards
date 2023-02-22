import dayjs from "dayjs";
import { getLastDayAndDate } from "./dataApi";
import { BASE_LEVEL } from "./const";

const DAILY_LEVELS = {
  1: [1],
  2: [2, 1],
  3: [3, 1],
  4: [2, 1],
  5: [1],
  6: [4, 2, 1],
  7: [3, 1],
  8: [2, 1],
  9: [1],
  10: [2, 1],
  11: [3, 1],
  12: [2, 1],
  13: [5, 1],
  14: [4, 2, 1],
  15: [3, 1],
  16: [2, 1],
  17: [6, 1],
  18: [2, 1],
  19: [3, 1],
  20: [2, 1],
  21: [1],
  22: [4, 2, 1],
  23: [3, 1],
  24: [2, 1],
  25: [1],
  26: [2, 1],
  27: [3, 1],
  28: [2, 1],
  29: [5, 1],
  30: [4, 2, 1],
  31: [3, 1],
  32: [2, 1],
  33: [1],
  34: [2, 1],
  35: [3, 1],
  36: [2, 1],
  37: [1],
  38: [4, 2, 1],
  39: [3, 1],
  40: [2, 1],
  41: [1],
  42: [2, 1],
  43: [3, 1],
  44: [2, 1],
  45: [5, 1],
  46: [4, 2, 1],
  47: [3, 1],
  48: [2, 1],
  49: [6, 1],
  50: [2, 1],
  51: [3, 1],
  52: [2, 1],
  53: [1],
  54: [4, 2, 1],
  55: [3, 1],
  56: [2, 1],
  57: [7, 1],
  58: [2, 1],
  59: [3, 1],
  60: [2, 1],
  61: [5, 1],
  62: [4, 2, 1],
  63: [3, 1],
  64: [2, 1],
};

const DAYS_IN_CYCLE = 64;

export function getLevelsForDay(day) {
  return DAILY_LEVELS[day];
}

export function calculateCurrentDay(storedDay, storedDayDate) {
  const storedDayDayJS = dayjs(storedDayDate);
  const today = dayjs(new Date()).startOf("day");
  const diff = storedDayDayJS.startOf("day").diff(today, "day");
  if (diff < 0) {
    return storedDay < DAYS_IN_CYCLE ? storedDay + 1 : BASE_LEVEL;
  } else {
    return storedDay;
  }
}

export function getCurrentDay() {
  const [storedDay, storedDayDate] = getLastDayAndDate();
  return calculateCurrentDay(storedDay, storedDayDate);
}

export function getQuestionsForLevels(questions, levels) {
  const today = dayjs(new Date()).startOf("day");
  return levels.reduce(
    (lvlQuestions, level) => [
      ...lvlQuestions,
      ...questions[level]
        .filter((q) => level === BASE_LEVEL || !q.answeredDate || dayjs(q.answeredDate) <= today)
        .map((q) => ({ ...q, level })),
    ],
    []
  );
}

export function exportQuestions(questions) {
  return JSON.stringify(questions);
}
