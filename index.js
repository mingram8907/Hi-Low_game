
// select and store deal button in variable
const dealButton = document.getElementById("Deal")


// select and store the live display in variable
const liveDisplay = document.getElementById("Live")


// generate random number to predict from
let liveNum; 


// add click event to deal button
dealButton.addEventListener("click", function() {
    
    random()
    
    // log to test
    console.log(liveNum);

    // set live display to show the random liveNum
    liveDisplay.innerHTML = liveNum
})

function random() {
    liveNum = Math.floor(Math.random() * 100) + 1;
}


// select and store the new display in variable
const newDisplay = document.getElementById("New")


// select and store the higher button in variable
const higherButton = document.getElementById("Higher")


// generate new number to compare against live number
let newNum = Math.floor(Math.random() * 100) + 1


// add click event to higher button
higherButton.addEventListener("click", function() {

    // log to test
    console.log(newNum);

    // set new display to show the random newNum
    newDisplay.innerHTML = newNum

    playerScore = Math.abs(newNum - liveNum)
    computerScore = Math.abs(newNum - liveNum)

    // determine the round's winner
    if (newNum > liveNum) {
        console.log("You win");
        result.innerHTML = "Correct! You win " + playerScore + " points!"
        // playerWinsRound()
    }
    else if (liveNum > newNum) {
        console.log("Computer wins");
        result.innerHTML = "Wrong! Computer wins " + playerScore + " points!"
        // computerWinsRound()
    }
    else {
        console.log("Tie");
        result.innerHTML = "Tie! No winner. Play again!"
    }

    // reset round -- create another button and assign as click event
    // setTimeout(resetRound(), 5000)
})


// select and store the player score and computer score in separate variables
let playerScore;

let computerScore;


// define point calculator
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

    // log to test
    console.log(newNum);

    // set new display to show the random newNum
    newDisplay.innerHTML = newNum

    playerScore = Math.abs(newNum - liveNum)
    computerScore = Math.abs(newNum - liveNum)

    // determine the round's winner
    if (newNum < liveNum) {
        console.log("You win");
        result.innerHTML = "Correct! You win " + playerScore + " points!"
        // playerWinsRound()
    }
    else if (liveNum < newNum) {
        console.log("Computer wins");
        result.innerHTML = "Wrong! Computer wins " + playerScore + " points!"
        // computerWinsRound()
    }
    else {
        console.log("Tie");
        result.innerHTML = "Tie! No winner. Play again!"
    }

    // reset round
    // setTimeout(resetRound(), 5000)
})

function resetRound() {
    // clear live display
    liveDisplay.innerHTML = ""

    // clear new display
    newDisplay.innerHTML = 

    // clear result
    result.innerHTML = ""


}