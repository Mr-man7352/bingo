let numberArray = [];
let boardArray = [] // this array will contain actual random numbers
let nArrayCounter = 1
let counter = 0

// this loop will populate numberArray, from which we will generate boardArray
while (nArrayCounter < 26) {
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

// function to cross the on clicking
function cross(id) {
    let box = document.getElementById(id);
    let num = box.innerHTML
    box.onclick = null;
    box.classList.add('boxRed')
    box.innerHTML = `${num}<i style="font-size:16px" class="fas fa-times"></i>`
    // console.log(box);
}

// function to change the color 
function bingoFun(id) {
    let box = document.getElementById(id);
    box.classList.toggle('red')
}

