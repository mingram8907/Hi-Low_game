
// select and store deal button in variable
const dealButton = document.getElementById("Deal")


// select and store the live display in variable
const liveDisplay = document.getElementById("Live")


// declare live number variable globally
let liveNum


// generate random number to predict from
function randomLive() {
    liveNum = Math.floor(Math.random() * 99) + 1;
}


// add click event to deal button
dealButton.addEventListener("click", function() {
    
    randomLive()
    
    // log to test
    console.log(liveNum);

    // set live display to show the random liveNum
    liveDisplay.innerHTML = liveNum
})


// select and store the new display in variable
const newDisplay = document.getElementById("New")


// select and store the higher button in variable
const higherButton = document.getElementById("Higher")

// declare new number variable globally
let newNum


// generate new number to compare against live number
function randomNew() {
    newNum = Math.floor(Math.random() * 99) + 1;
}


// add click event to higher button
higherButton.addEventListener("click", function() {

    randomNew()

    // log to test
    console.log(newNum);

    // set new display to show the random newNum
    newDisplay.innerHTML = newNum
    // let playerScore = 0
    // let computerScore = 0
    let winningPoints = 0
    
    
    // determine the round's winner
    if (newNum > liveNum) {
        console.log("You win");
        winningPoints = Math.abs(newNum - liveNum)
        playerScore.innerHTML = Number(playerScore.innerHTML) + winningPoints 
        result.innerHTML = "Correct! You win " + winningPoints + " points!"
        // console.log(playerScore);
        // playerWinsRound()
    }
    else if (liveNum > newNum) {
        console.log("Computer wins");
        winningPoints = Math.abs(newNum - liveNum)
        computerScore.innerHTML = Number(computerScore.innerHTML) + winningPoints
        result.innerHTML = "Wrong! Computer wins " + winningPoints + " points!"
        // console.log(computerScore);
        // computerWinsRound()
    }
    else {
        console.log("Tie");
        result.innerHTML = "Tie! No winner. Play again!"
    }
    
    // randomNew()
    // console.log(newNum);

    // randomLive()
    // liveDisplay.innerHTML = liveNum
    // console.log(liveNum);
    // reset round -- create another button and assign as click event
    // setTimeout(resetRound(), 5000)
})


// select and store the player score and computer score in separate variables
// let playerScore;

// let computerScore;


// define point calculator -- moved inside of click event for higher + lower buttons
// let pointCalculator = Math.abs(newNum - liveNum)


// define scoring system for player
// function playerWinsRound() {
    
//     playerScore = Math.abs(newNum - liveNum)
    
//     document.getElementById("Player").innerHTML = playerScore

//     if (newNum > liveNum) {
//         console.log("You win");
//         result.innerHTML = "Correct! You win " + playerScore + " points!"
//         playerWinsRound()
//     }
//     else if (newNum < liveNum) {
//         console.log("You win");
//         result.innerHTML = "Correct! You win " + playerScore + " points!"
//         playerWinsRound() 
//     }
//     else {
//         console.log("Tie");
//         result.innerHTML = "Tie! No winner. Play again!"
//     }
// }


// define scoring system for computer
// function computerWinsRound() {
//     playerScore = Math.abs(newNum - liveNum)
    
//     document.getElementById("Computer").innerHTML = computerScore

//     if (liveNum > newNum) {
//         console.log("Computer wins");
//         result.innerHTML = "Wrong! Computer wins " + playerScore + " points!"
//         computerWinsRound()
//     }
//     else if (liveNum < newNum) {
//         console.log("Computer wins");
//         result.innerHTML = "Wrong! Computer wins " + playerScore + " points!"
//         computerWinsRound() 
//     }
//     else {
//         console.log("Tie");
//         result.innerHTML = "Tie! No winner. Play again!"
//     }
// }

// select and store result in variable
const result = document.getElementById("Result")
let playerScore = document.getElementById("Player")
let computerScore = document.getElementById("Computer")


// define how to determine the round's winner if higher is selected
// function whoWinsRoundHigher() {
    // if (newNum > liveNum) {
    //     console.log("You win");
    //     result.innerHTML = "Correct! You win " + playerScore + " points!"
    //     playerWinsRound()
    // }
    // else if (liveNum > newNum) {
    //     console.log("Computer wins");
    //     result.innerHTML = "Wrong! Computer wins " + playerScore + " points!"
    //     computerWinsRound()
    // }
    // else {
    //     console.log("Tie");
    //     result.innerHTML = "Tie! No winner. Play again!"
    // }
// }


// select and store the lower button in variable
const lowerButton = document.getElementById("Lower")


// define how to determine the round's winner if lower is selected
// function whoWinsRoundLower() {
    // if (newNum < liveNum) {
    //     console.log("You win");
    //     result.innerHTML = "Correct! You win " + playerScore + " points!"
    //     playerWinsRound()
    // }
    // else if (liveNum < newNum) {
    //     console.log("Computer wins");
    //     result.innerHTML = "Wrong! Computer wins " + playerScore + " points!"
    //     computerWinsRound()
    // }
    // else {
    //     console.log("Tie");
    //     result.innerHTML = "Tie! No winner. Play again!"
    // }
// }


// add click event to lower button
lowerButton.addEventListener("click", function() {

    randomNew()

    // log to test
    console.log(newNum);

    // set new display to show the random newNum
    newDisplay.innerHTML = newNum

    // let playerScore 
    // let computerScore
    let winningPoints = 0

    // document.getElementById("Player").innerHTML = playerScore
    // document.getElementById("Computer").innerHTML = computerScore

    // determine the round's winner
    if (newNum < liveNum) {
        console.log("You win");
        winningPoints = Math.abs(newNum - liveNum)
        playerScore.innerHTML = Number(playerScore.innerHTML) + winningPoints
        result.innerHTML = "Correct! You win " + winningPoints + " points!"
        // playerWinsRound()
    }
    else if (liveNum < newNum) {
        console.log("Computer wins");
        winningPoints = Math.abs(newNum - liveNum)
        computerScore.innerHTML = Number(computerScore.innerHTML) + winningPoints
        result.innerHTML = "Wrong! Computer wins " + winningPoints + " points!"
        // computerWinsRound()
    }
    else {
        console.log("Tie");
        result.innerHTML = "Tie! No winner. Play again!"
    }

    // reset round
    // setTimeout(resetRound(), 5000)
})



// select and store the next round button in variable
const nextButton = document.getElementById("Next")


// add click event to next button
nextButton.addEventListener("click", function() {

    // clear live display
    liveDisplay.innerHTML = "-"
    
    // clear new display
     newDisplay.innerHTML = "-"

    // clear result
    result.innerHTML = ""
})

function resetRound() {
    // clear live display
    liveDisplay.innerHTML = ""

    // clear new display
    newDisplay.innerHTML = 

    // clear result
    result.innerHTML = ""


}