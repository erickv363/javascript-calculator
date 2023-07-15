let firstNum
let secondNum
let operation
let result
let step = 0
let firstArray = []
let secondArray = []
let display = document.getElementById("display")

function getNumber(num) {
  if (step === 0 || step === 1) {
    firstArray.push(num)
    step = 1
    firstNum = Number(firstArray.join(""))
    display.value = firstNum
  } else if (step === 2) {
    secondArray.push(num)
    secondNum = Number(secondArray.join(""))
    display.value = secondNum
  }
}

function getOperator(op) {
  operation = op
  step = 2
  display.value = op
}

function equals() {
  if (operation === "+") {
    result = firstNum + secondNum
  } else if (operation === "-") {
    result = firstNum - secondNum
  } else if (operation === "*") {
    result = firstNum * secondNum
  } else if (operation === "/") {
    result = firstNum / secondNum
  }

  display.value = result
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
