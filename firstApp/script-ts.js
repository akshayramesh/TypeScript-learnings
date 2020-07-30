var button = document.querySelector("button");
var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var showResult = true;
function addEvent(num1, num2, printResult, promtMessage) {
    var sum;
    sum = num1 + num2;
    if (printResult === true) {
        console.log(promtMessage + sum);
    }
    else {
        return sum;
    }
}
button.addEventListener("click", function () {
    var promtMessage;
    promtMessage = "Result is ";
    addEvent(+number1.value, +number2.value, showResult, promtMessage);
});
