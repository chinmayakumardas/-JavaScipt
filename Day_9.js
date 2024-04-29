//write a number to find averge of all elements in a array.

function avg(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return Math.round(sum/arr.length)
}
function avg2(arr){
    
  return Math.round(
    arr.reduce((accum,curr)=>{
        return accum+=curr;
},0)/arr.length
  );
  
}

console.log(avg([2,2,4,4]))
console.log(avg2([2,2,4,4,11]))