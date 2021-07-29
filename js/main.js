let numberArray = [];
let boardArray = [] // this array will contain actual random numbers
let nArrayCounter = 0
let counter = 0

// this loop will populate numberArray, from which we will generate boardArray
while (nArrayCounter < 25) {
    numberArray.push(nArrayCounter);
    nArrayCounter += 1
}

// this loop will generate boardArray
while (boardArray.length !== 25) {
    randomNumber = Math.floor(Math.random() * numberArray.length);
    tempNumber = numberArray[randomNumber];
    boardArray.push(tempNumber);
    numberArray.splice(randomNumber, 1);
}

// this loop to target each box and fill the board with random numbers
while (counter < 25) {
    let box = document.getElementById(`bno${counter}`);
    let number = boardArray[counter];
    box.innerHTML = number;
    counter += 1;
}


