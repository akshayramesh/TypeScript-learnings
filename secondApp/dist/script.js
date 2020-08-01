"use strict";
function combine(input1, input2) {
    return input1 + input2; //this error can be handled using check for typeof
}
var combinedAges = combine(20, 30);
console.log(combinedAges);
var combinedNames = combine("Chandler", " Bing");
console.log(combinedNames);
