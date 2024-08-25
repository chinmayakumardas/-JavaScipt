// var vs let vs const
var a=10;
var a=23;
a=24
console.log(a)

let c=3;
let c=12;   //show error
c=4
console.log(c)

const n=23;
const n=24;// error
n=25;//  error

// ----------------------------------------------------
// datatypes

//1. Primittive datatypes

let a=10;//number
const name="chinmaya";//string
var b;//undefined
let n="";//null
let checked=true;//boolean
let name2=Symbol("chinmaya");
let x=BigInt(1111111111111111111111555222)
let y=1111111111111111111111555222
console.log(x,y)

//2. non primitive

let nameArr=["aju","biju","sanjay","kunal"];//array
let student={
    name:"chinmaya",
    add:"cuttack",
    pincode:754025,

}

console.log(nameArr,student)

// ----------------------------------------------------
let mySet=new Set([1,2,3,1,2,3,1,1,4,5,3,6,57,75,60])

//set methods
//1. add
mySet.add(22,43,34,1.3)
mySet.delete(22)
console.log(mySet.values())
console.log(mySet.keys())
console.log(mySet.entries())
console.log(mySet.has(75))

console.log(mySet)

//2. Maps

let maps=new Map([
    ["a",100],
    ["b",101]
])

console.log(maps.get("a"))
maps.set("c",3000);
console.log(maps.has("c"))
console.log(typeof maps)
console.log( maps.size)
maps.delete("a")
console.log(maps)
console.log(maps.values())
console.log(maps.keys())
maps.clear();


