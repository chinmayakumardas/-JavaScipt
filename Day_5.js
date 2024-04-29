//sort an array

// //4 rules
// 1-the function sholud take array of number input onplay
// 2-it should return a array with number in sorted on sorted order
// 3-the original array shuld unchanged
// 4-you are not allowed to use build in sort method

let sortAsec=(arr)=>{
    let newArr=[...arr];
    for(let i=0;i<newArr.length-1;i++){
        
        let min_pos=i;
        for(let j=i+1;j<newArr.length;j++){
            if(newArr[min_pos]>newArr[j]){
                min_pos=j;
            }
       
        }
        let temp=newArr[min_pos];
        newArr[min_pos]=newArr[i];
        newArr[i]=temp;
       
        
    }
    return newArr;
}

console.log(
    sortAsec([1,22,4,11,75,17,2,9])
)

//way 2
const sort=(arr)=>{
    return arr.sort((a,b)=>{
      return   a-b
    });
}

console.log(
    sort([4,2,45,6,99,7,2])
)