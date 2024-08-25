//declaration ways

// -------------------------------------
// Types of function
// 1-Named function
function sum (n=4){
    console.log("hii"+n);
}

sum(5);///function call

// 2-Anonymous function
let x=function(){
    console.log("function as variable")
}

x()
// 3-Immediately invoked function expression
let iife=(function iife(){
    console.log("iffe run")
})();

// call vs bind vs apply-----------------------------------------

{function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  const person = { name: 'John' };
  
  greet.call(person, 'Jane'); // outputs "Hello, Jane! My name is John."

}

{
    function greet(name) {
        console.log(`Hello, ${name}! My name is ${this.name}.`);
      }
      
      const person = { name: 'John' };
      
      const boundGreet = greet.bind(person, 'Jane');
      boundGreet(); // outputs "Hello, Jane! My name is John."
}

  function greet(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old. My name is ${this.name}.`);
  }
  
  const person = { name: 'John' };
  
  greet.apply(person, ['Jane', 30]); // outputs "Hello, Jane! You are 30 years old. My name is John."