import { BASE_LEVEL } from "./const";

export function storeDay(day) {
  localStorage.setItem("memory_card_last_day", day);
  localStorage.setItem("memory_card_last_day_date", new Date());
}

export function getLastDayAndDate() {
  const storedDay = Number.parseInt(localStorage.getItem("memory_card_last_day")) || BASE_LEVEL;
  const storedDayDate =
    new Date(localStorage.getItem("memory_card_last_day_date")) || new Date();
  return [storedDay, storedDayDate];
}

export function saveQuestions(questions) {
  localStorage.setItem("memory_card_data", JSON.stringify(questions));
}

export function loadQuestions() {
  const jsonQuestions = localStorage.getItem("memory_card_data");
  return JSON.parse(jsonQuestions);
}