//write afunction called "calculation" that takes an array of number as input and return the mean (average ) of thoose number.

function mean(arr){
    let sum=0;
        for(val of arr){
            sum+=val;
        }
         console.log(sum/arr.length)
}
    


mean([1,2,3,4,5])
mean([1,2,3,4])

