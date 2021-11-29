import { questionArray } from "questions.js";

/********** ID'S SELECTION **********/

const quesCounter = document.getElementById("question-counter");
const hintCounter = document.getElementById("hint-counter");

const question = document.getElementById("main-question");

const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

const hintSec = document.getElementById("hint-section");
const hintBtn = document.getElementById("hint-btn");
const hintText = document.getElementById("hint-text");

/******** SHUFFLE ARRAY *********/

let shuffleQuesArr = [...questionArray];

shuffleQuesArr = questionArray.sort(() => Math.random() - 0.5);

console.log(shuffleQuesArr);

let index = 0;
let count = 0;
let interval = null;

let startInterval = () => {
  interval = setInterval(() => {
    index++;
    renderQues();
    console.log("Intervel index:", index);
  }, 3000);
};

startInterval();

let endInterval = () => {
  clearInterval(interval);
  console.log("End Interval");
};

/********** VALIDATING ANSWER'S **********/

let checkAns = () => {
  optionA.addEventListener("click", () => {
    console.log(index);
    endInterval();
    let result =
      shuffleQuesArr[index].options[0] === shuffleQuesArr[index].answer
        ? correctAns()
        : wrongAns();
    startInterval();
  });

  optionB.addEventListener("click", () => {
    console.log(index);

    let result =
      shuffleQuesArr[index].options[1] === shuffleQuesArr[index].answer
        ? correctAns()
        : wrongAns();
  });

  optionC.addEventListener("click", () => {
    console.log(index);

    let result =
      shuffleQuesArr[index].options[2] === shuffleQuesArr[index].answer
        ? correctAns()
        : wrongAns();
  });

  optionD.addEventListener("click", () => {
    console.log(index);

    let result =
      shuffleQuesArr[index].options[3] === shuffleQuesArr[index].answer
        ? correctAns()
        : wrongAns();
  });

  hintBtn.addEventListener("click", () => {
    count++;
    renderQues();

    hintBtn.classList.add("fade-out");
    hintText.classList.add("fade-in");

    hintBtn.classList.add("hide-btn");
    console.log(shuffleQuesArr[index].hint);
    hintText.innerHTML = `${shuffleQuesArr[index].hint}`;

    hintText.classList.remove("hide-btn");
  });
};

checkAns();

/********** RENDERING **********/

let renderQues = () => {
  quesCounter.innerHTML = `${index + 1}/${shuffleQuesArr.length}`;
  hintCounter.innerHTML = `${count}/3`;

  question.innerHTML = `${shuffleQuesArr[index].question}`;

  optionA.innerHTML = ` ${shuffleQuesArr[index].options[0]}`;
  optionB.innerHTML = ` ${shuffleQuesArr[index].options[1]}`;
  optionC.innerHTML = ` ${shuffleQuesArr[index].options[2]}`;
  optionD.innerHTML = ` ${shuffleQuesArr[index].options[3]}`;
  hintBtn.classList.remove("fade-out");
  hintText.classList.add("hide-btn");
  hintBtn.classList.remove("hide-btn");
  if (count >= 3) {
    hintBtn.classList.add("btn-disable");
  }

  console.log("Render Index:", index);

  if (index >= 9) {
    endInterval();
    console.log("Render clear interval:", index);
  }
};

renderQues();

/********** CHECKING ANSWER'S **********/

const correctAns = () => {
  index++;
  console.log(" You Are Correct! ");
  renderQues();

  console.log("Question Index After Increment: ", index);
};

const wrongAns = () => {
  index++;
  console.log(" You Are Wrong! ");
  renderQues();

  console.log("Question Index After Increment: ", index);
};
