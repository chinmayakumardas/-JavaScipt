//1. Arrow functions
let Arrow=()=>{
    //writing how much u want
    console.log("Arrow function called");
}
Arrow()

//2. callback function
function square(x, callback) {
    const result = x * x;
    callback(result);
  }
  
  function addOne(y) {
    console.log(y + 1);
  }
  
  square(5, addOne); // outputs 26

//3. Higher order function: A higher-order function is a function that takes one or more functions as arguments, or returns a function as a result.
function addX(x) {
  return function(y) {
    return y + x;
  };
}

const addFive = addX(5);
console.log(addFive(10)); // outputs 15

// 4. First Order function
function double(x) {
    return x * 2;
  }
  
  console.log(double(5)); // outputs 10
  
// 5.First class function
const functions = [
    function(x) { return x * 2; },
    function(x) { return x + 1; },
    function(x) { return x - 1; }
  ];
  
  console.log(functions[0](5)); // outputs 10
  console.log(functions[1](5)); // outputs 6
  console.log(functions[2](5)); // outputs 4