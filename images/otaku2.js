import { questionArray } from "/questions.js";

/*************** ID'S SELECTION ***************/

/***** QUESTION ID'S *****/

const quesCounter = document.getElementById("question-counter");
const quesHeading = document.getElementById("qcounter-heading");
const timeIntervalBar = document.getElementById("time-interval-bar");

const questionLine1 = document.getElementById("question-line1");
const questionLine2 = document.getElementById("question-line2");

/***** HINT ID'S *****/

const hintCounter = document.getElementById("hint-counter");
const hintText1 = document.getElementById("hint-line-1");
const hintText2 = document.getElementById("hint-line-2");
const hintText3 = document.getElementById("hint-line-3");

const hintBtnDiv = document.getElementById("hint-btn-div");
const hintBtn = document.getElementById("hint-btn");
const addTimeDiv = document.getElementById("add-time-div");
const addTime = document.getElementById("add-time");
const hintBtnText = document.getElementById("hint-btn").textContent;

/***** QUESTION OPTION'S ID'S *****/

const optionAandB = document.getElementById("optionA-B");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");

const optionCandD = document.getElementById("optionC-D");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

/*************** SHUFFLE ARRAY ****************/

let shuffleQuesArr = [...questionArray];

shuffleQuesArr = questionArray.sort(() => Math.random() - 0.5);

console.log(shuffleQuesArr);

/*************** VARIABLE'S  **************/

let index = 0;
let count = 0;
let mark = 0;

let btnStringColor = "";

let quesLine1 = "";
let quesLine2 = "";

let hintLine1 = "";
let hintLine2 = "";
let hintLine3 = "";

let interval = null;

let valueInterval = null;

let width = 0;

/*************** RANDOM HEX COLOR ***************/

const hexColorsArray = [
  "#8ecae6",
  "#219ebc",
  "#023047",
  "#ffb703",
  "#fb8500",
  "#9d0208",
  "#ff006e",
  "#8d99ae",
  "#80b918",
  "#973aa8",
];

const letters = hintBtnText.split("");

let randomTextColor = () => {
  for (let i = 0; i < letters.length; i++) {
    let randomColor = Math.floor(Math.random() * hexColorsArray.length);

    btnStringColor += `<div onMouseOver="this.style.fontSize='3rem'"
    onMouseOut="this.style.fontSize='2rem'" style="color:${hexColorsArray[randomColor]};">${hintBtn.innerText[i]}</div>`;
  }

  hintBtn.innerHTML = btnStringColor;
};

randomTextColor();

/*************** INTERVAL'S **************/

/***** GRAYSCALE BAR *****/

let intervalBar = () => {
  if (width >= 100) {
    clearInterval(valueInterval);
    console.log("Value Interval Clear:");
  } else {
    width += 10;
    console.log("width value:", width);
    timeIntervalBar.style.width = width + "%";
  }
};

valueInterval = setInterval(intervalBar, 1000);

/***** QUESTIONS INTERVAL *****/

let startInterval = () => {
  interval = setInterval(() => {
    index++;
    quesLine1 = "";
    quesLine2 = "";

    hintLine1 = "";
    hintLine2 = "";
    hintLine3 = "";

    hintBtn.classList.remove("btn-disable");

    renderQues();

    addTime.classList.remove("hide-text");
    addTime.classList.remove("fade-out-left");
    addTime.innerHTML = ``;

    width = 0;
    console.log("Intervel index:", index);

    // randomTextColor();
  }, 10000);
};

startInterval();

let endInterval = () => {
  clearInterval(interval);
  clearInterval(valueInterval);
  console.log("clear question Interval");
  console.log("clear value interval");
};

/*************** VALIDATING ANSWER'S ***************/

let checkAns = () => {
  optionA.addEventListener("click", () => {
    hintBtn.classList.remove("btn-disable");
    width = 0;
    timeIntervalBar.style.width = width + "%";

    quesLine1 = "";
    quesLine2 = "";

    hintLine1 = "";
    hintLine2 = "";
    hintLine3 = "";

    endInterval();

    let result =
      shuffleQuesArr[index].options[0] === shuffleQuesArr[index].answer
        ? correctAns()
        : wrongAns();

    // valueInterval = setInterval(intervalBar, 1000);

    // startInterval();
  });

  optionB.addEventListener("click", () => {
    hintBtn.classList.remove("btn-disable");
    width = 0;
    timeIntervalBar.style.width = width + "%";

    quesLine1 = "";
    quesLine2 = "";

    hintLine1 = "";
    hintLine2 = "";
    hintLine3 = "";

    endInterval();

    let result =
      shuffleQuesArr[index].options[1] === shuffleQuesArr[index].answer
        ? correctAns()
        : wrongAns();
    // valueInterval = setInterval(intervalBar, 1000);

    // startInterval();
  });

  optionC.addEventListener("click", () => {
    hintBtn.classList.remove("btn-disable");
    width = 0;
    timeIntervalBar.style.width = width + "%";

    quesLine1 = "";
    quesLine2 = "";

    hintLine1 = "";
    hintLine2 = "";
    hintLine3 = "";

    endInterval();

    let result =
      shuffleQuesArr[index].options[2] === shuffleQuesArr[index].answer
        ? correctAns()
        : wrongAns();
    // valueInterval = setInterval(intervalBar, 1000);

    // startInterval();
  });

  optionD.addEventListener("click", () => {
    hintBtn.classList.remove("btn-disable");
    width = 0;
    timeIntervalBar.style.width = width + "%";

    quesLine1 = "";
    quesLine2 = "";

    hintLine1 = "";
    hintLine2 = "";
    hintLine3 = "";

    endInterval();

    let result =
      shuffleQuesArr[index].options[3] === shuffleQuesArr[index].answer
        ? correctAns()
        : wrongAns();
    // valueInterval = setInterval(intervalBar, 1000);

    // startInterval();
  });

  hintBtn.addEventListener("click", () => {
    count++;
    hintBtn.classList.add("btn-disable");

    let hintText = shuffleQuesArr[index].hint;

    let hintTextArr = hintText.split(" ");

    for (let i = 0; i < hintTextArr.length; i++) {
      if (i < 10) {
        hintLine1 += " " + hintTextArr[i];
      } else if (i >= 10 && i < 20) {
        hintLine2 += " " + hintTextArr[i];
      } else {
        hintLine3 += " " + hintTextArr[i];
      }
    }

    quesLine1 = "";
    quesLine2 = "";

    addTime.innerHTML = ` +10`;
    addTime.classList.add("fade-out-left");

    setTimeout(() => {
      addTime.classList.add("hide-text");
      console.log("Add time has been removed!");
    }, 2000);

    endInterval();

    width = 0;
    valueInterval = setInterval(intervalBar, 1000);

    renderQues();

    startInterval();
  });
};

checkAns();

/*************** RENDERING ***************/

let renderQues = () => {
  if (index >= 10) {
    endInterval();
    console.log("Clear Render interval:", index);
    console.log("You have answer all question!");

    const modal = document.createElement("div");
    modal.id = "my-modal";
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.id = "content";
    modalContent.className = "modal-content";

    const modalHeader = document.createElement("div");
    modalHeader.id = "heading";
    modalHeader.className = "modal-header";

    modalHeader.innerHTML = `<h3>Final-Result</h3>`;

    const modalBody = document.createElement("div");
    modalBody.id = "marks";
    modalBody.className = "modal-body";

    const modalFooter = document.createElement("div");
    modalFooter.id = "report-card";
    modalFooter.className = "modal-footer";

    modalContent.append(modalHeader, modalBody, modalFooter);

    modal.appendChild(modalContent);

    document.getElementById("otaku-container").appendChild(modal);

    console.log("Your total marks is:", mark);
  } else {
    hintCounter.innerHTML = `<h3><span style = "font-family:perspective;">H</span></span><span style = "font-family:fredericka-the-great; font-weight:500">int</span> <span style = "font-family: perspective;font-weight: 600;">${count}/3</span></h3> `;

    quesHeading.innerHTML = `<span style = "font-family:perspective;">Q</span><span style = "font-family:fredericka-the-great; font-weight:500">uestion</span> <span style = "font-family: perspective;font-weight: 600; margin-left: 5px"> ${
      index + 1
    }/${shuffleQuesArr.length}</span>`;

    const quesText = shuffleQuesArr[index].question;
    const quesTextArr = quesText.split(" ");

    for (let i = 0; i < quesTextArr.length; i++) {
      if (i < 10) {
        quesLine1 += " " + quesTextArr[i];
      } else {
        quesLine2 += " " + quesTextArr[i];
      }
    }

    questionLine1.innerHTML = `<p>${quesLine1}</p>`;
    questionLine2.innerHTML = `<p>${quesLine2}</p>`;

    optionA.innerHTML = `<span onMouseOver="this.style.fontSize = '1.8rem'"
    onMouseOut="this.style.fontSize = '1.5rem'"> 1. ${shuffleQuesArr[index].options[0]}</span>`;

    optionB.innerHTML = `<span onMouseOver="this.style.fontSize='1.8rem'"
    onMouseOut="this.style.fontSize='1.5rem'"> 2. ${shuffleQuesArr[index].options[1]}</span>`;

    optionC.innerHTML = `<span onMouseOver="this.style.fontSize='1.8rem'"
    onMouseOut="this.style.fontSize='1.5rem'"> 3. ${shuffleQuesArr[index].options[2]}</span>`;

    optionD.innerHTML = `<span onMouseOver="this.style.fontSize='1.8rem'"
    onMouseOut="this.style.fontSize='1.5rem'"> 4. ${shuffleQuesArr[index].options[3]}</span>`;

    hintText1.innerHTML = `<p class = "fade-in-left">${hintLine1}</p>`;
    hintText2.innerHTML = `<p class = "fade-in-left">${hintLine2}</p>`;
    hintText3.innerHTML = `<p class = "fade-in-left">${hintLine3}</p>`;
  }

  if (count >= 3) {
    hintBtn.classList.add("btn-disable");
  }

  //   console.log("Render Index:", index);
};

renderQues();

/*************** CHECKING ANSWER'S ***************/

const correctAns = () => {
  mark += 10;
  index++;
  console.log(" You get " + mark + " marks");
  valueInterval = setInterval(intervalBar, 1000);

  startInterval();
  renderQues();

  console.log("Question Index After Increment: ", index);
};

const wrongAns = () => {
  index++;
  console.log(" You Are Wrong! ");
  valueInterval = setInterval(intervalBar, 1000);

  startInterval();
  renderQues();

  console.log("Question Index After Increment: ", index);
};
