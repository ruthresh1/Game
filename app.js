let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

main();

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            lose(userChoice, computerChoice);
            break;
        default:
            draw();
            break;
    }
}


function win(player, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToInit(player)} beats ${convertToInit(computer)}. You win!! B)`;
    const div = document.getElementById(player);
    div.classList.add('green');
    setTimeout(() => {
        div.classList.remove('green');
    }, 600);
}

function lose(player, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToInit(computer)} beats ${convertToInit(player)}. You loose.. :(`;
    const div = document.getElementById(player);
    div.classList.add('red');
    setTimeout(() => {
        div.classList.remove('red');
    }, 600);
}

function draw() {
    result_div.innerHTML = `Choices are same. Nothing changes. :|`;
    //do something else
}

function convertToInit(word) {
    if(word === "rock")
        return "Rock";
    else if(word === "paper")
        return "Paper";
    else
        return "Scissors";
}