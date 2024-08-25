//ways to create a object

//1. obj notaion
// let name={
//     name:"chinmaya",
//     age:22
// }

// 2. constructur function
const func=function (name,age,sal){
    this.name=name;
    this.age=age;
    this.sal=sal;

}
const f1=new func("ajay",22,12000);
f1.add="cuttack"
console.log(f1)
// 3. class
class c{
    constructor(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
    }

}
const c1=new c("a",10,true)
// 4. new object menthod

// 5. Object.create
// Define a prototype object
let personPrototype = {
    greet: function() {
      return "Hello, my name is " + this.name + ".";
    }
  };
  
  // Create a new object using the personPrototype as its prototype
  let john = Object.create(personPrototype);
  
  // Add properties to the new object
  john.name = "John";
  
  // Accessing properties and method of the john object
  console.log(john.name); // Output: John
  console.log(john.greet()); // Output: Hello, my name is John.



//   cloning

let name={
    fname:"chinmaya",
    age:22
}
let name2={
    lname:"kumar",
    sal:22000
}

let x={name,name2}
console.log(x)

let y=Object.assign({},name,name2)
console.log(y)