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
const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let myArray = []

// 1. need an global array - []
// 2. we need to keep putting numbers the global array - [1,4,6] - how? push, unshift, splice
// 3. then we condense all the numbers in the array - 146 - how? 
// 4. then we could save that big number into firstNum = 146 - ok

// 5. finalize the calculator with > 1 digits using array push/join & Number convertor

function getNumber(num) {
    myArray.push(num)  //adding new numbers to myArray
    let y = myArray.push(num)
    console.log(y)
    console.log(myArray.join(''))  //
    const x = myArray.join('')  //join method to combine numners in from myArray into a string, then creating x varibale for it
    firstNum = Number(x)  //number method to change x string into number, assigning firstNum to it
    console.log(typeof x)
    console.log(Number(firstNum))
    console.log('firstNum', typeof firstNum)
    
    if (step === 0) {
        firstNum = num
        step = 1
    } else if (step === 2) {
        secondNum = num
    }
    console.log(num)
    document.getElementById("display").value = num
}

function getOperator(opps) {
    console.log(opps)
    operation = opps
    step = 2

    document.getElementById("display").value = opps
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

    document.getElementById("display").value = result
}

function getClear() {
    console.log()
    step = 0
    firstNum = 0
    secondNum = 0
    result = 0

    document.getElementById("display").value = result
}
