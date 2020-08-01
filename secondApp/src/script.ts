function combine(input1: number | string, input2: number | string) {
    return input1 + input2; //this error can be handled using check for typeof
  }
  
  const combinedAges = combine(20, 30);
  console.log(combinedAges);
  
  const combinedNames = combine("Chandler", " Bing");
  console.log(combinedNames);
   