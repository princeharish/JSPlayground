const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#winnerText");
const userScoreText = document.querySelector("#userScore");
const compScoreText = document.querySelector("#compScore");
let userCount = 0;
let CompCount = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("clicked ${userchoice}", userchoice);
        const compChoice = GenRandomChoice();
        console.log("Comp Choice ", compChoice);
        PlayGame(userchoice, compChoice);
        
    })
})

function PlayGame(userChoice, compChoice)
{
    let didUserWin = false;
    userChoice = userChoice.slice(0,-3);
    compChoice = compChoice.slice(0,-3);
    if (userChoice === compChoice)
    {
        MakeDrawChanges(userChoice,compChoice);
        return;
    }
    if (userChoice === "rock" && compChoice === "scissor")
    {
        didUserWin = true;
    }
    if (userChoice === "paper" && compChoice === "rock") {
        didUserWin = true;
    }
    if (userChoice === "scissor" && compChoice === "paper")
    {
        didUserWin = true;
    }
    if (didUserWin === false) {
      MakeCompWinChanges(userChoice,compChoice);
    }
    else {
        MakeUserWinChanges(userChoice,compChoice);
    }
}

function MakeUserWinChanges(userChoice,compChoice)
{
    userCount++;
    userScoreText.innerText = userCount;
    msg.innerText = `You Win!! your ${userChoice} beat ${compChoice}`;
    msg.classList.remove("indicateLoss");
    msg.classList.remove("indicateDraw");
    msg.classList.add("indicateWin");
    
}

function MakeDrawChanges(userChoice,compChoice)
{
    msg.innerText = `Draw! You and Computer chosen ${userChoice}`;
    msg.classList.remove("indicateWin");
    msg.classList.remove("indicateLoss");
    msg.classList.add("indicateDraw")
}

function MakeCompWinChanges(userChoice,compChoice)
{
    CompCount++;
    compScoreText.innerText = CompCount;
    msg.innerText = `You Lost!  ${compChoice} beat your ${userChoice}`;
    msg.classList.remove("indicateWin");
    msg.classList.remove("indicateDraw");
    msg.classList.add("indicateLoss");
    
}

function GenRandomChoice() {
    let options = [ "rockDiv" , "paperDiv" , "scissorDiv"]
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}