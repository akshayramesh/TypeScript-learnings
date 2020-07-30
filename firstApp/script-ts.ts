const button = document.querySelector("button")
const number1 = document.getElementById("num1")! as HTMLInputElement
const number2 = document.getElementById("num2")! as HTMLInputElement
const showResult = true

function addEvent(num1: number, num2: number, printResult: boolean, promtMessage: string) {
    let sum: number
    sum = num1 + num2
    if(printResult === true){
        console.log(promtMessage + sum)
    }
    else {
        return sum
    }
}

button.addEventListener("click", function () {
    let promtMessage:string
    promtMessage = "Result is "
    addEvent(+number1.value, +number2.value, showResult, promtMessage)
})