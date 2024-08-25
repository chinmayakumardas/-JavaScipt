let arr=[1,2,3,4,5,6,7,8,9,10];
let A=arr[0];
let B=arr[0];//etc
//Alternate is destructuring
let [a,b,c,d,e,f,g,h,i,j]=arr;

console.log(a,b,c,d,e,f,g,h,i,j)


// simillarly object dstructuring

let name={
    r1:"chinmaya",
    r2:"suman",
    r3:"adyasa",
    r4:"kunal",
    r5:"rabi"
}

let {r1,r2,r3,r4,r5}=name;
console.log(r1,r2,r3,r4,r5)


//JSON
