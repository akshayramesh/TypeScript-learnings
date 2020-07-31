function combine(input1, input2) {
    return input1 + input2; //this error can be handled using check for typeof
}
var combinedAges = combine(20, 30);
console.log(combinedAges);
var combinedNames = combine("Chandler", " Bing");
console.log(combinedNames);
//literals
function combineWithType(input1, input2, conversionType) {
    if (typeof input1 === "number" && typeof input2 === "number" || conversionType === 'as-number') {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combinedStringAges = combineWithType('20', '30', 'as-number');
console.log(combinedStringAges);
var combinedStringNames = combineWithType("Chandler", " Bing", 'as-text');
console.log(combinedStringNames);
