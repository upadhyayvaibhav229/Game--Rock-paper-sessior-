let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompchoice = ()=>{
    const options = ['rock','paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// draw condition
const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw! play again"
    msg.style.backgroundColor = "#081b31";

};

// this will show winner
const showWinner = (userWin, userchoice, compchoice) =>{

    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText = `You Win! your ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose!")
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

// game logic how game works
const playGame = (userchoice) =>{
        console.log("users choice= ",userchoice);
        const compchoice = genCompchoice();
        console.log("computer choice= ",compchoice);
        
        if (userchoice === compchoice) {
            // game draw
            drawGame();
        }else{
            let userWin = true;
            if (userchoice == "rock") {
                // scissor, paper
                userWin = compchoice === "paper"? false: true;
            }else if (userchoice === "paper") {
                // rock, scissors
                userWin = compchoice === "scissors" ? false : true
            }else{
                // rock, paper
                userWin = compchoice === "rock" ? false : true
            }
            showWinner(userWin, userchoice, compchoice);
        }
}

// 
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");//get the id
        
        console.log("choice was clicked", userchoice);//show the user and comp choice
        playGame(userchoice);
    });
});