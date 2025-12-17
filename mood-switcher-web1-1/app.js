"use strict"; // Enable strict mode for better error checking ECMAScript 5 feature
// Define moods
const moods = [
  { text: "Happy", emoji: "😊", color: "green" },
  { text: "Sad", emoji: "😢", color: "blue" },
  { text: "Angry", emoji: "😠", color: "red" },
  { text: "Calm", emoji: "😌", color: "lightblue" }, // auto
  { text: "Focused", emoji: "🧠", color: "lightblue" },
  { text: "Chill", emoji: "😎", color: "lightgreen" },
];

const changeBtn = document.getElementById("change-btn");
const autoBtn = document.getElementById("auto-btn");
const moodStatus = document.querySelector("#mood-text strong");
const body = document.body;
let autoInterval = null;
let arrayIndex = null;

autoBtn.addEventListener("click", () => {
  if (autoInterval != null) {
    // clear interval
    clearInterval(autoInterval);
    autoBtn.innerText = "Start Auto";
  } else {
    autoInterval = setInterval(() => {
      let arrayIndex = Math.floor(Math.random() * moods.length);
      setMood(arrayIndex);
    }, 2000);
    autoBtn.innerText = "Stop Auto";
  }
});

changeBtn.addEventListener("click", () => {
  // Generate random number
  arrayIndex = Math.floor(Math.random() * moods.length);
  setMood(arrayIndex);
});

function generateText(arrayIndex) {
  return moods[arrayIndex]["text"] + " " + moods[arrayIndex]["emoji"];
}

function changeBodyBackgroundColor(arrayIndex) {
  body.style.backgroundColor = moods[arrayIndex]["color"];
}

function setMood(arrayIndex) {
  moodStatus.innerText = generateText(arrayIndex);
  changeBodyBackgroundColor(arrayIndex);
}