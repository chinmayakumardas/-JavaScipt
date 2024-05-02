//write a function to calculate the sum of asquare of all elements in an array.For example,
//array [1,2,3] , the function should return 14 because 14 1*1 * 2*2 * 3*3 =1+4+9  is 14.



function sqrSum(arr){
   

let result=0;
//way 1
// for(let val of arr){
//     result+=(val*val)
// }



//way 2
// result=arr.reduce((accum,val)=>{
//     return accum+=val*val
// },0)


//way 3
arr.forEach((val) => {
    result+=val*val
});

return result;
}

console.log(sqrSum([1,2,3]))
console.log(sqrSum([1,2,3,4]))