//find median a data set

function median(arr){
    let ArrCpy=[...arr];
    arr.sort((a,b)=>{
        return a-b;
    })
    let mid=(arr[0]+arr[arr.length-1])/2;

    if(arr.length%2!=0){
        console.log(mid)
    }else{
        let median=mid+arr[arr.indexOf(mid)+1]
        console.log(Math.floor(median))
    }
}

median([1,2,3,4,5])
median([1,2,3,4])