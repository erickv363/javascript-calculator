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

// 1. need an global array - []
// 2. we need to keep putting numbers the global array - [1,4,6] - how? push, unshift, splice
// 3. then we condense all the numbers in the array - 146 - how? 
// 4. then we could save that big number into firstNum = 146 - ok

// 5. finalize the calculator with > 1 digits using array push/join & Number convertor

function getNumber(num) {
    if (step === 0) {
        firstArray.push(num)
        step = 1 
        firstNum = Number(firstArray.join(''))
        document.getElementById("display").value = firstNum
    } else if (step === 2) {
        secondArray.push(num)
        secondNum = Number(secondArray.join(''))
        document.getElementById("display").value = secondNum
    }

    // myArray.push(num)  //adding new numbers to myArray using the push method, then creating y variable for it
    // myArray.join('')  //join method to combine numbers in myArray into a string, then creating jointNum varibale for it 
    // Number(myArray)

    // console.log(num)
    // document.getElementById("display").value = num
    // document.getElementById("display").value = myArray
}

function getOperator(opps) {
    operation = opps
    step = 2

    // console.log(opps)
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
    // console.log(result)
}

function getClear() {
    step = 0
    firstNum = 0
    secondNum = 0
    result = 0
    firstArray = []
    secondArray = []
    operation = null

    document.getElementById("display").value = result
}
