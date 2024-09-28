

let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;



const quizArray = [
  {
    id: "0",
    question: "What is National Sport Of India?",
    options: ["Cricket", "Hocky", "Kho-Kho", "Kabbadi"],
    correct: "Hocky",
  },
  {
    id: "1",
    question: "What is National Language Of India?",
    options: ["Marathi", "Hindi", "English", "Tamil"],
    correct: "Hindi",
  },
  {
    id: "2",
    question: "Odd Man Out",
    options: ["Fish", "Tiger", "Dog", "Cat"],
    correct: "Fish",
  },

  {
    id: "3",
    question: "What is Capital Of India?",
    options: ["Delhi", "Mumbai", "Kolkatta", "Chennai"],
    correct: "Delhi",
  },

  {
    id: "4",
    question: "What is the National Bird Of India?",
    options: ["Peacock", "Parrot", "Eagle", "Crow"],
    correct: "Peacock",
  },



];


restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});


nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    
    questionCount += 1;
    
    if (questionCount == quizArray.length) {
      
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
     
      
      
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } 
    
    
    else {
    
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      
     
     
        quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);


const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};


const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
 
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  
  quizCards[questionCount].classList.remove("hide");
};


function quizCreator() {
  
  quizArray.sort(() => Math.random() - 0.5);
 
 
 
  for (let i of quizArray) {
   
    
    
    i.options.sort(() => Math.random() - 0.5);
   
    
    
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
   
   
   
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    
    
    
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
   
   
    
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

// option is correct or not--------
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //correct option stored in object-----
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    
    
    //For marking the correct option-------
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  
}

//initial setup-----
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

// start button-----
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen-----
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};