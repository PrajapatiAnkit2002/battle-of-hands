let userScore = 0;
let compScore = 0;
const msg = document.getElementById("msg");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    
    return options[randIdx];
};

const drawGame = () => {

    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    // generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
            // comp -> "paper", "scissor"
            userWin = (compChoice == "paper") ? false : true;
        }
        else if(userChoice === "paper"){
            // comp -> "rock", "scissor"
            userWin = (compChoice === "scissor") ? false : true;
        }
        else{
            // user -> scissor
            // comp -> "rock", "paper"
            userWin = (compChoice === "rock") ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);
    })
})