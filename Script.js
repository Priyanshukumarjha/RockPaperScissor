let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("compScore");
const scoreBoardDiv = document.querySelector(".ScoreBoard");
const resultDiv = document.querySelector(".Results");
const rockDiv = document.getElementById("Rock");
const paperDiv = document.getElementById("Paper");
const scissorDiv = document.getElementById("Scissor");
const rockVsScissor = "Rock Destroyed Scissor";
const rockVsPaper = "Paper Covers Rock";
const scissorVsPaper = "Scissor Cuts the Paper";
let resultStatment = "Game Begins";

function getComputerChoice() {
    const choices = ["Rock","Paper","Scissor"];
    const randNumber = Math.floor(Math.random() * 3);
    return choices[randNumber];
}

function win(userChoice,computerChoice,resultStatment) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = "You Choose: "+userChoice+" & "+"Computer Choose: "+computerChoice+". "+resultStatment+", You Win!";
}

function lose(userChoice,computerChoice,resultStatment) {
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = "You Choose: "+userChoice+" & "+"Computer Choose: "+computerChoice+". "+resultStatment+", You Lose!";
}

function draw(userChoice,computerChoice) {
    resultStatment = "Same Character Do Nothing";
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = "You Choose: "+userChoice+" & "+"Computer Choose: "+computerChoice+". "+resultStatment+", Its Draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice == computerChoice) {
        draw(userChoice,computerChoice);
    }
    else if (computerChoice == "Rock") {
        if (userChoice == "Scissor") {
            resultStatment = rockVsScissor;
            lose(userChoice,computerChoice,resultStatment);
        }
        else if (userChoice == "Paper") {
            resultStatment = rockVsPaper;
            win(userChoice,computerChoice,resultStatment);
        }
    }
    else if (computerChoice == "Paper") {
        if (userChoice == "Scissor") {
            resultStatment = scissorVsPaper;
            win(userChoice,computerChoice,resultStatment);
        }
        else if (userChoice == "Rock") {
            resultStatment = rockVsPaper;
            lose(userChoice,computerChoice,resultStatment);
        }
    }
    else if (computerChoice == "Scissor") {
        if (userChoice == "Rock") {
            resultStatment = rockVsScissor;
            win(userChoice,computerChoice,resultStatment);
        }
        else if (userChoice == "Paper") {
            resultStatment = scissorVsPaper;
            lose(userChoice,computerChoice,resultStatment);
        }
    }
}

function main() {
    rockDiv.addEventListener("click", function () {
        game("Rock");
    })
    paperDiv.addEventListener("click", function () {
        game("Paper");
    })
    scissorDiv.addEventListener("click", function () {
        game("Scissor");
    })
}

main();
game();