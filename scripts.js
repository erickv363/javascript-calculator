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

// 1. need an global array - []


function getNumber(num) {
    // 2. we need to keep putting numbers the global array - [1,4,6] - how? 
    // 3. then we condense all the numbers in the array - 146 - how? 
    // 4. then we could save that big number into firstNum = 146 - ok
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
}

/* function getAdd(){
    firstNum + secondNum
    // let result = firstNum+secondNum

} */

function equals() {
    // console.log(firstNum+5)
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
