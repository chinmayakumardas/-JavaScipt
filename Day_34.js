//remove duplicate from array
let arr=[1,2,3,4,1,4,9,6,7]
//way 1
//it used to convert a set into a array
let res1=[...new Set(arr)];
console.log(res1);