function combine(input1: number | string, input2: number | string) {
  return input1 + input2; //this error can be handled using check for typeof
}

const combinedAges = combine(20, 30);
console.log(combinedAges);

const combinedNames = combine("Chandler", " Bing");
console.log(combinedNames);


//literals
function combineWithType(
  input1: number | string,
  input2: number | string,
  conversionType: "as-number" | "as-text"
) {
    if(typeof input1 === "number" && typeof input2 === "number" || conversionType === 'as-number'){
        return +input1 + +input2
    }else {
        return input1.toString() + input2.toString()
    }
  
}

const combinedStringAges = combineWithType('20', '30', 'as-number');
console.log(combinedStringAges);

const combinedStringNames = combineWithType("Chandler", " Bing", 'as-text');
console.log(combinedStringNames);


//type aliases
type combinableType = number | string
type conversionDescriptorType = "as-number" | "as-text"

function combineWithTypeAlias(
  input1: combinableType,
  input2: combinableType,
  conversionType: conversionDescriptorType
) {
    if(typeof input1 === "number" && typeof input2 === "number" || conversionType === 'as-number'){
        return +input1 + +input2
    }else {
        return input1.toString() + input2.toString()
    }
  
}


