console.log(firstNumber.value)

const multiply = () => {
    const answer = Number(firstNumber.value) * Number(secondNumber.value)
    console.log(answer)
    showResult.innerHTML = answer
}

const add = () => {
    const answer = Number(firstNumber.value) + Number(secondNumber.value)
    console.log(answer)
    showResult.innerHTML = answer
}

const substract = () => {
    const answer = Number(firstNumber.value) - Number(secondNumber.value)
    console.log(answer)
    showResult.innerHTML = answer
}

const divide = () => {
    const answer = Number(firstNumber.value) / Number(secondNumber.value)
    console.log(answer)
    showResult.innerHTML = answer
}