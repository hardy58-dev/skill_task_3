/*
  Flagdata = [
    {name: “Australia”, link: “./img/australia.jpg”},
    {name: “America”, link: “./img/America.jpg”}
    …
  ]
*/
import Flag from "./data.js";
import { shuffle, showNotification } from "./helper.js";


const progressText = document.getElementById("progress-text");
const questionText = document.getElementById("question-text");
const flagImage = document.getElementById("flag-image");
const form = document.getElementById("option-form");
const dataLength = Flag.length;

let questionCountry, correctCountry, correctCountryPicture = "";
let currentQuestion = 0;
let correctAnswer = 0;
let isTrue = true;
let countryList = shuffle(Flag);

function getTureOrFalse() {
  let randomIndex = Math.floor(Math.random() * 2);
  console.log(randomIndex);
  if (randomIndex === 0) return true;
  return false;
}

function getRandomCountryName(correctIndex) {
  let randomIndex = Math.floor(Math.random() * dataLength);
  if (randomIndex === correctIndex) randomIndex = (randomIndex + 1) % dataLength;
  return countryList[randomIndex].name;
}

function start() {
  if (currentQuestion >= dataLength) {
    endGame();
  }
  isTrue = getTureOrFalse();
  correctCountry = countryList[currentQuestion].name;
  correctCountryPicture = countryList[currentQuestion].link;
  questionCountry = isTrue ? correctCountry : getRandomCountryName(currentQuestion)
  console.log(currentQuestion, countryList, isTrue, questionCountry)
  updateView();
}

function submit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  if (formData.get("options") === isTrue.toString()) {
    correctAnswer++;
    showNotification("You did it!", "success");
  }
  else {
    showNotification("Nope! You'll get the next one!", "error");
  }
  currentQuestion++;
  start();
}

function updateView() {
  questionText.innerText = questionCountry;
  flagImage.src = correctCountryPicture;
  progressText.innerText = `Questions ${currentQuestion + 1}/${dataLength}`;
  form.reset();
}

function endGame() {
  showNotification(`You got ${correctAnswer}/${dataLength} correct!`, "success");
  currentQuestion = 0;
  correctAnswer = 0;
  countryList = shuffle(Flag);
}

form.addEventListener("submit", (e) => {
  submit(e)
})
start();