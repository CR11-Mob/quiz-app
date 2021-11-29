import { questionArray } from "questions.js";

// console.log(questionArray);

// if (window.location.href !== "http://127.0.0.1:5500/otaku.html") {
//   document
//     .getElementById("quizz-btn")
//     .setAttribute(
//       "onclick",
//       "location.href='http://127.0.0.1:5500/otaku.html'"
//     );
// }

const quickQuizBtn = document.getElementById("quick-quizz-btn").textContent;

console.log(quickQuizBtn);

const letters = quickQuizBtn.split("");

let randomTextColor = () => {
  let htmlString = "";

  let colorLetter = document.getElementById("quick-quizz-btn");

  for (let i = 0; i < letters.length; i++) {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log("Hex color:", randomColor);

    htmlString += `<div style="color:${randomColor}; border: none">${colorLetter.innerText[i]}</div>`;
  }

  colorLetter.innerHTML = htmlString;
  console.log("Letter After Color:", colorLetter);
};

randomTextColor();
