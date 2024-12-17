let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


let genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
msg.innerText = "Game Draw";
msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
      
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN. ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
       
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOST. ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

let playGame = (userChoice) => {
  console.log("User choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp choice =", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  }else{
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else if(userChoice === "scissor"){
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }


};

let choices = document.querySelectorAll(".choice");
let userChoice = choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
