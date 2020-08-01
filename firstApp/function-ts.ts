function add(n1: number, n2: number): number {
    return n1 + n2
}

function printNumber(n1: number){
    console.log(n1)
} // return type is void  

// function type
let combinedValues: Function

combinedValues = add
combinedValues = printNumber //runtime this function accepts only 1. But ts cannot udnerstand it. hence we need something more


//function types - declare the parameters

let combinedValuesFunction: (a: number, b: number) => number

combinedValuesFunction = add

//combinedValuesFunction = printNumber // error state

//callback function defintion

function addAndHandle(n1: number, n2: number, callBackFn: (num: number) => void){
    const result = n1+n2
    callBackFn(result)
}

addAndHandle(3,5, (inNumber) => {
    console.log(inNumber)
})

//unknown



//never

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code}
}

generateError('An error occured', 500)