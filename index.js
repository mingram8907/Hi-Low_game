
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

    if ((Number(playerScore.innerHTML) >= 500)) {
        liveDisplay.innerHTML = "CONGRATULATIONS! YOU WIN!"
    }
    else if (Number(healthScore.innerHTML) > 0 && (Number(playerScore.innerHTML) < 500)) {

        // set live display to show the random liveNum
        liveDisplay.innerHTML = liveNum
    }
    else {
        liveDisplay.innerHTML = "NO LIVES! GAME OVER!"
    }
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
    

    // declare winning points variable
    let winningPoints = 0
    
    
    // determine the round's winner
    if ((Number(healthScore.innerHTML) === 0)) {
        console.log("Game Over!");
        newDisplay.innerHTML = "Nice try! Game Over!"
        result.innerHTML = "No lives left! Restart game!"
    }
    else if ((Number(playerScore.innerHTML) >= 500)) {
        console.log("You win!");
        newDisplay.innerHTML = "You win!"
        result.innerHTML = "Great job!"
    }
    else if (newNum > liveNum && (Number(healthScore.innerHTML) > 0)) {
        console.log("You win");
        winningPoints = Math.abs(newNum - liveNum)
        playerScore.innerHTML = Number(playerScore.innerHTML) + winningPoints 
        result.innerHTML = "Correct! You win " + winningPoints + " points!"
    }
    else if (liveNum > newNum && (Number(healthScore.innerHTML) > 0)) {
        console.log("Computer wins");
        winningPoints = Math.abs(newNum - liveNum)
        computerScore.innerHTML = Number(computerScore.innerHTML) + winningPoints
        healthScore.innerHTML = Number(healthScore.innerHTML) - 1
        result.innerHTML = "Wrong! Computer wins " + winningPoints + " points and you lose 1 life!"
    }
    else {
        console.log("Tie");
        result.innerHTML = "Tie! No winner. Play again!"
    }
    
})


// select and store result, player score & computer score in variable
const result = document.getElementById("Result")
let playerScore = document.getElementById("Player")
let computerScore = document.getElementById("Computer")
let healthScore = document.getElementById("Health")


// select and store the lower button in variable
const lowerButton = document.getElementById("Lower")


// add click event to lower button
lowerButton.addEventListener("click", function() {

    randomNew()

    // log to test
    console.log(newNum);


    // set new display to show the random newNum
    newDisplay.innerHTML = newNum


    // declare winning points variable
    let winningPoints = 0

    
    // determine the round's winner
    if ((Number(healthScore.innerHTML) === 0)) {
        console.log("Game Over!");
        newDisplay.innerHTML = "Nice try! Game Over!"
        result.innerHTML = "No lives left! Restart game!"
    }
    else if ((Number(playerScore.innerHTML) >= 500)) {
        console.log("You win!");
        newDisplay.innerHTML = "You win!"
        result.innerHTML = "Great job!"
    }
    else if (newNum < liveNum) {
        console.log("You win");
        winningPoints = Math.abs(newNum - liveNum)
        playerScore.innerHTML = Number(playerScore.innerHTML) + winningPoints
        result.innerHTML = "Correct! You win " + winningPoints + " points!"
    }
    else if (liveNum < newNum) {
        console.log("Computer wins");
        winningPoints = Math.abs(newNum - liveNum)
        computerScore.innerHTML = Number(computerScore.innerHTML) + winningPoints
        healthScore.innerHTML = Number(healthScore.innerHTML) - 1
        result.innerHTML = "Wrong! Computer wins " + winningPoints + " points and you lose 1 life!"
    }
    else {
        console.log("Tie");
        result.innerHTML = "Tie! No winner. Play again!"
    }

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

