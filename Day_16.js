//write a function findMin that takes a array of numbers as input and return the minimum value. found in the array


function findMin(arr){
    let min=Number.MIN_VALUE;
    //way1
    // min=Math.min(...arr)

    //way 2
    // arr.sort((a,b)=>a-b)
    // min=arr[0]

    //way 3
    for(let val of arr){
        if(val<min){
            min= val
        }
    }




    return min;

   
}

console.log(
    findMin([1,2,3,6-9,0,6,-8,11]),
    findMin([1,2,3,4,5,6,7,8,90,0])
)