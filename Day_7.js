//write a function findmax that makes take an array of numbers as input and return the max number in the array.




function findMax(arr){
    return Math.max(...arr);
}

//example
console.log(
    findMax([1,2,3,4,5,6,7,8,9]),
    //output 9
    findMax([-10,-5,-3,-9,-2]),
    //output -2
    
    findMax([5])
    //output 5
)