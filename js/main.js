let numberArray = [];
let boardArray = []; // this array will contain actual random numbers
let nArrayCounter = 1;
let counter = 0;
let crossedBox = [];
let verticalElements = [
    ["bno0", "bno5", "bno10", "bno15", "bno20"],
    ["bno1", "bno6", "bno11", "bno16", "bno21"],
    ["bno2", "bno7", "bno12", "bno17", "bno22"],
    ["bno3", "bno8", "bno13", "bno18", "bno23"],
    ["bno4", "bno9", "bno14", "bno19", "bno24"]
];
let horizontalElements = [
    ["bno0", "bno1", "bno2", "bno3", "bno4"],
    ["bno5", "bno6", "bno7", "bno8", "bno9"],
    ["bno10", "bno11", "bno12", "bno13", "bno14"],
    ["bno15", "bno16", "bno17", "bno18", "bno19"],
    ["bno20", "bno21", "bno22", "bno23", "bno24"]
];

let diagonalElements = [
    ["bno0", "bno6", "bno12", "bno18", "bno24"],
    ["bno4", "bno8", "bno12", "bno16", "bno20"]

];


// this loop will populate numberArray, from which we will generate boardArray
while (nArrayCounter < 26) {
    numberArray.push(nArrayCounter);
    nArrayCounter += 1
};

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
    crossedBox.push(box.id);
    box.classList.add('boxRed');
    // console.log(crossedBox);
    bingo(box.id);
    box.innerHTML = `${num}<i style="font-size:16px" class="fas fa-times"></i>`;

}

// function to toggle the color 
function bingoFun(id) {
    let box = document.getElementById(id);
    box.classList.toggle('red')
}

function crossedElements(arrayOfCrossedElements) {
    let i = 0;
    while (i < 5) {
        crossedElement(arrayOfCrossedElements[i])
        i += 1;
    }
}

function crossedElement(id) {
    let box = document.getElementById(id);
    box.classList.add('paired');

}


const bingo = (id) => {
    switch (id) {
        // start cases
        case "bno0":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno5') && crossedBox.includes('bno10') && crossedBox.includes('bno15') && crossedBox.includes('bno20')) {
                crossedElements(verticalElements[0]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno1') && crossedBox.includes('bno2') && crossedBox.includes('bno3') && crossedBox.includes('bno4')) {
                crossedElements(horizontalElements[0]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno12') && crossedBox.includes('bno18') && crossedBox.includes('bno24')) {
                crossedElements(diagonalElements[0]);
            }
            break;

        case "bno1":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno11') && crossedBox.includes('bno16') && crossedBox.includes('bno21')) {
                crossedElements(verticalElements[1]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno0') && crossedBox.includes('bno2') && crossedBox.includes('bno3') && crossedBox.includes('bno4')) {
                crossedElements(horizontalElements[0]);
            }
            break;

        case "bno2":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno7') && crossedBox.includes('bno12') && crossedBox.includes('bno17') && crossedBox.includes('bno22')) {
                crossedElements(verticalElements[2]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno1') && crossedBox.includes('bno0') && crossedBox.includes('bno3') && crossedBox.includes('bno4')) {
                crossedElements(horizontalElements[0]);
            }
            break;

        case "bno3":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno8') && crossedBox.includes('bno13') && crossedBox.includes('bno18') && crossedBox.includes('bno23')) {
                crossedElements(verticalElements[3]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno1') && crossedBox.includes('bno2') && crossedBox.includes('bno0') && crossedBox.includes('bno4')) {
                crossedElements(horizontalElements[0]);
            }
            break;

        case "bno4":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno9') && crossedBox.includes('bno14') && crossedBox.includes('bno19') && crossedBox.includes('bno24')) {
                crossedElements(verticalElements[4]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno1') && crossedBox.includes('bno2') && crossedBox.includes('bno3') && crossedBox.includes('bno4')) {
                crossedElements(horizontalElements[0]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno8') && crossedBox.includes('bno12') && crossedBox.includes('bno16') && crossedBox.includes('bno20')) {
                crossedElements(diagonalElements[1]);
            }
            break;

        //  above is first row

        case "bno5":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno0') && crossedBox.includes('bno10') && crossedBox.includes('bno15') && crossedBox.includes('bno20')) {
                crossedElements(verticalElements[0]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno7') && crossedBox.includes('bno8') && crossedBox.includes('bno9')) {
                crossedElements(horizontalElements[1]);
            }
            break;

        case "bno6":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno1') && crossedBox.includes('bno11') && crossedBox.includes('bno16') && crossedBox.includes('bno21')) {
                crossedElements(verticalElements[1]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno5') && crossedBox.includes('bno7') && crossedBox.includes('bno8') && crossedBox.includes('bno9')) {
                crossedElements(horizontalElements[1]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno0') && crossedBox.includes('bno12') && crossedBox.includes('bno18') && crossedBox.includes('bno24')) {
                crossedElements(diagonalElements[0]);
            }
            break;

        case "bno7":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno2') && crossedBox.includes('bno12') && crossedBox.includes('bno17') && crossedBox.includes('bno22')) {
                crossedElements(verticalElements[2]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno5') && crossedBox.includes('bno8') && crossedBox.includes('bno9')) {
                crossedElements(horizontalElements[1]);
            }
            break;

        case "bno8":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno3') && crossedBox.includes('bno13') && crossedBox.includes('bno18') && crossedBox.includes('bno23')) {
                crossedElements(verticalElements[3]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno7') && crossedBox.includes('bno5') && crossedBox.includes('bno9')) {
                crossedElements(horizontalElements[1]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno4') && crossedBox.includes('bno12') && crossedBox.includes('bno16') && crossedBox.includes('bno20')) {
                crossedElements(diagonalElements[1]);
            }
            break;

        case "bno9":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno4') && crossedBox.includes('bno14') && crossedBox.includes('bno19') && crossedBox.includes('bno24')) {
                crossedElements(verticalElements[4]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno7') && crossedBox.includes('bno8') && crossedBox.includes('bno5')) {
                crossedElements(horizontalElements[1]);
            }
            break;

        //  above is second row

        case "bno10":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno5') && crossedBox.includes('bno0') && crossedBox.includes('bno15') && crossedBox.includes('bno20')) {
                crossedElements(verticalElements[0]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno11') && crossedBox.includes('bno12') && crossedBox.includes('bno13') && crossedBox.includes('bno14')) {
                crossedElements(horizontalElements[2]);
            }
            break;

        case "bno11":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno1') && crossedBox.includes('bno16') && crossedBox.includes('bno21')) {
                crossedElements(verticalElements[1]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno10') && crossedBox.includes('bno12') && crossedBox.includes('bno13') && crossedBox.includes('bno14')) {
                crossedElements(horizontalElements[2]);
            }
            break;

        case "bno12":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno7') && crossedBox.includes('bno2') && crossedBox.includes('bno17') && crossedBox.includes('bno22')) {
                crossedElements(verticalElements[2]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno11') && crossedBox.includes('bno10') && crossedBox.includes('bno13') && crossedBox.includes('bno14')) {
                crossedElements(horizontalElements[2]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno0') && crossedBox.includes('bno18') && crossedBox.includes('bno24')) {
                crossedElements(diagonalElements[0]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno8') && crossedBox.includes('bno4') && crossedBox.includes('bno16') && crossedBox.includes('bno20')) {
                crossedElements(diagonalElements[1]);
            }
            break;

        case "bno13":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno8') && crossedBox.includes('bno3') && crossedBox.includes('bno18') && crossedBox.includes('bno23')) {
                crossedElements(verticalElements[3]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno11') && crossedBox.includes('bno12') && crossedBox.includes('bno10') && crossedBox.includes('bno14')) {
                crossedElements(horizontalElements[2]);
            }
            break;

        case "bno14":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno9') && crossedBox.includes('bno4') && crossedBox.includes('bno19') && crossedBox.includes('bno24')) {
                crossedElements(verticalElements[4]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno11') && crossedBox.includes('bno12') && crossedBox.includes('bno13') && crossedBox.includes('bno10')) {
                crossedElements(horizontalElements[2]);
            }
            break;

        //  above is third row

        case "bno15":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno5') && crossedBox.includes('bno10') && crossedBox.includes('bno0') && crossedBox.includes('bno20')) {
                crossedElements(verticalElements[0]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno16') && crossedBox.includes('bno17') && crossedBox.includes('bno18') && crossedBox.includes('bno19')) {
                crossedElements(horizontalElements[3]);
            }
            break;

        case "bno16":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno11') && crossedBox.includes('bno1') && crossedBox.includes('bno21')) {
                crossedElements(verticalElements[1]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno15') && crossedBox.includes('bno17') && crossedBox.includes('bno18') && crossedBox.includes('bno19')) {
                crossedElements(horizontalElements[3]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno8') && crossedBox.includes('bno12') && crossedBox.includes('bno4') && crossedBox.includes('bno20')) {
                crossedElements(diagonalElements[1]);
            }
            break;

        case "bno17":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno7') && crossedBox.includes('bno12') && crossedBox.includes('bno2') && crossedBox.includes('bno22')) {
                crossedElements(verticalElements[2]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno16') && crossedBox.includes('bno15') && crossedBox.includes('bno18') && crossedBox.includes('bno19')) {
                crossedElements(horizontalElements[3]);
            }
            break;

        case "bno18":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno8') && crossedBox.includes('bno13') && crossedBox.includes('bno3') && crossedBox.includes('bno23')) {
                crossedElements(verticalElements[3]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno16') && crossedBox.includes('bno17') && crossedBox.includes('bno15') && crossedBox.includes('bno19')) {
                crossedElements(horizontalElements[3]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno12') && crossedBox.includes('bno0') && crossedBox.includes('bno24')) {
                crossedElements(diagonalElements[0]);
            }
            break;

        case "bno19":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno9') && crossedBox.includes('bno14') && crossedBox.includes('bno4') && crossedBox.includes('bno24')) {
                crossedElements(verticalElements[4]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno16') && crossedBox.includes('bno17') && crossedBox.includes('bno18') && crossedBox.includes('bno15')) {
                crossedElements(horizontalElements[3]);
            }
            break;

        //  above is fourth row

        case "bno20":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno5') && crossedBox.includes('bno10') && crossedBox.includes('bno15') && crossedBox.includes('bno0')) {
                crossedElements(verticalElements[0]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno21') && crossedBox.includes('bno22') && crossedBox.includes('bno23') && crossedBox.includes('bno24')) {
                crossedElements(horizontalElements[4]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno8') && crossedBox.includes('bno12') && crossedBox.includes('bno16') && crossedBox.includes('bno4')) {
                crossedElements(diagonalElements[1]);
            }
            break;
        case "bno21":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno11') && crossedBox.includes('bno16') && crossedBox.includes('bno1')) {
                crossedElements(verticalElements[1]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno20') && crossedBox.includes('bno22') && crossedBox.includes('bno23') && crossedBox.includes('bno24')) {
                crossedElements(horizontalElements[4]);
            }
            break;
        case "bno22":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno7') && crossedBox.includes('bno12') && crossedBox.includes('bno17') && crossedBox.includes('bno2')) {
                crossedElements(verticalElements[2]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno21') && crossedBox.includes('bno20') && crossedBox.includes('bno23') && crossedBox.includes('bno24')) {
                crossedElements(horizontalElements[4]);
            }
            break;
        case "bno23":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno8') && crossedBox.includes('bno13') && crossedBox.includes('bno18') && crossedBox.includes('bno3')) {
                crossedElements(verticalElements[3]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno21') && crossedBox.includes('bno22') && crossedBox.includes('bno20') && crossedBox.includes('bno24')) {
                crossedElements(horizontalElements[4]);
            }
            break;
        case "bno24":
            // vertical elements
            if (crossedBox.includes(id) && crossedBox.includes('bno9') && crossedBox.includes('bno14') && crossedBox.includes('bno19') && crossedBox.includes('bno4')) {
                crossedElements(verticalElements[4]);
            }
            // horizontal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno21') && crossedBox.includes('bno22') && crossedBox.includes('bno23') && crossedBox.includes('bno20')) {
                crossedElements(horizontalElements[4]);
            }
            // diagonal elements
            if (crossedBox.includes(id) && crossedBox.includes('bno6') && crossedBox.includes('bno12') && crossedBox.includes('bno18') && crossedBox.includes('bno0')) {
                crossedElements(diagonalElements[0]);
            }
            break;

        //  above is fifth row

        default:
            break;
    }
}

