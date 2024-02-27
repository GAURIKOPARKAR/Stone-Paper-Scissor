let choices = document.querySelectorAll(".choice")
let comp_choice =  document.querySelector("#comp-choice")
let start = document.querySelector("#start")
let your_score = document.querySelector("#your-score")
let comp_score = document.querySelector("#comp-score")


let scoreComp = 0;
let scoreYou = 0;
const choiceOptions = ["stone","paper","scissor"]


const generateChoice = ()=>{
    let generateIndex = Math.floor(Math.random()*choiceOptions.length)
    return choiceOptions[generateIndex]

}
const updateScore = (clickedChoice,compChoice)=>{
    let youWin;
    if(clickedChoice===compChoice)
     {
        start.innerText = "Its a Tie Play again"
        start.style.backgroundColor = "blue"
        return;
    }else{
           if(compChoice==="stone")
          youWin = clickedChoice==="paper"?true:false
          else if(compChoice==="paper")
          youWin = clickedChoice==="scissor"?true:false
          else
          youWin =clickedChoice==="stone"?true:false
    }
    if(youWin){
        scoreYou++;
        your_score.innerText = scoreYou
        start.innerText = `You Win!! Your ${clickedChoice} beat the ${compChoice}`
        start.style.backgroundColor = "green"
    }
    else{
        scoreComp++;
        comp_score.innerText = scoreComp
        start.innerText = 'You Lost !! Play Again'
        start.style.backgroundColor = "red"

    }
     

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

        let clickedChoice = choice.getAttribute("id")
        console.log(clickedChoice)

        let compChoice = generateChoice()
        console.log(compChoice)
        comp_choice.innerText = compChoice

        updateScore(clickedChoice,compChoice)



    })
})