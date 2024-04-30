//write a function to takes an array of integers as input and removesany duplicate elements,returning a new array with only unique element;



function  uniqueArr(arr){
    return Array.from(new Set(arr));
}


console.log(
    uniqueArr([1,2,3,4,5,6,7,8,9])
)

console.log(
    uniqueArr([1,2,12,8,4,567,8,9])
)

console.log(
    uniqueArr([1,2,1,2,1,2,1,2,1])
)