// array methods
// myArray.pop()
// myArray.filter()
// myArray.map()
// myArray.reduce()

let firstNum
let secondNum
let operation
let result
let step = 0
let firstArray = []
let secondArray = []
let display = document.getElementById("display")

// 1. need an global array - []
// 2. we need to keep putting numbers the global array - [1,4,6] - how? push, unshift, splice
// 3. then we condense all the numbers in the array - 146 - how? 
// 4. then we could save that big number into firstNum = 146 - ok

// 5. finalize the calculator with > 1 digits using array push/join & Number convertor

function getNumber(num) {
    if (step === 0 || step === 1) {
        firstArray.push(num) // adding number to array 
        step = 1 
        firstNum = Number(firstArray.join(''))
        display.value = firstNum
    } else if (step === 2) {
        secondArray.push(num)
        secondNum = Number(secondArray.join(''))
        display.value = secondNum
    }

    // myArray.push(num)  //adding new numbers to myArray using the push method, then creating y variable for it
    // myArray.join('')  //join method to combine numbers in myArray into a string, then creating jointNum varibale for it 
    // Number(myArray)

    // console.log(num)
    // display.value = num
    // display.value = myArray
}

function getOperator(opps) {
    operation = opps
    step = 2
    display.value = opps
}


function equals() {

    if (operation === '+') {
        result = firstNum + secondNum
    } else if (operation === '-') {
        result = firstNum - secondNum
    } else if (operation === '*') {
        result = firstNum * secondNum
    } else if (operation === '/') {
        result = firstNum / secondNum
    }

    display.value = result // re-asising 
}

function getClear() {
    step = 0
    firstNum = 0
    secondNum = 0
    result = 0
    firstArray = []
    secondArray = []
    operation = null
    display.value = result
}
