
// create deal button
const dealButton = document.createElement("button")
dealButton.textContent = "Deal"

console.log(dealButton);

const body = document.querySelector("body")
body.appendChild(dealButton)
console.log(body);

// number to guess from
const liveNum = Math.floor(Math.random() * 50) + 1
console.log(liveNum);

// next number
const nextNum = Math.floor(Math.random() * 50) + 1
console.log(nextNum);