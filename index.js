
// select and store deal button in variable
const dealButton = document.getElementById("Deal")


// select and store the live display in variable
const liveDisplay = document.getElementById("Live")


// generate random number to predict from
const liveNum = Math.floor(Math.random() * 100) + 1

// add click event to deal button
dealButton.addEventListener("click", function() {
     
    // log to test
    console.log(liveNum);

    // set live display to show the random liveNum
    liveDisplay.innerHTML = liveNum
})


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

    // determine the round's winner
    whoWinsRoundHigher()
})

// define how to determine the round's winner if higher is selected
function whoWinsRoundHigher() {
    if (newNum > liveNum) {
        console.log("You win");
    }
    else {
        console.log("Computer wins");
    }
}

// select and store the lower button in variable
const lowerButton = document.getElementById("Lower")


// define how to determine the round's winner if lower is selected
function whoWinsRoundLower() {
    if (newNum < liveNum) {
        console.log("You win");
    }
    else {
        console.log("Computer wins");
    }
}


// add click event to lower button
lowerButton.addEventListener("click", function() {

    // log to test
    console.log(newNum);

    // set new display to show the random newNum
    newDisplay.innerHTML = newNum

    // determine the round's winner
    whoWinsRoundLower()
})




