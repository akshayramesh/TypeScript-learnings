function add(n1, n2) {
    return n1 + n2;
}
function printNumber(n1) {
    console.log(n1);
} // return type is void  
// function type
var combinedValues;
combinedValues = add;
combinedValues = printNumber; //runtime this function accepts only 1. But ts cannot udnerstand it. hence we need something more
//function types - declare the parameters
var combinedValuesFunction;
combinedValuesFunction = add;
//combinedValuesFunction = printNumber // error state
//callback function defintion
function addAndHandle(n1, n2, callBackFn) {
    var result = n1 + n2;
    callBackFn(result);
}
addAndHandle(3, 5, function (inNumber) {
    console.log(inNumber);
});
//unknown
//never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
