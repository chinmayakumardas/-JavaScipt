//write a function to find mode of a datasetArray

//mode =3*median-2*mode
//mode means the number appears most frequently  in the data set.


function mode(arr){
    let count={};
    for(let elem of arr){
        count[elem]=(count[elem]||0)+1;
    }
   let mode=0;
   let max=0;
   for(let key in count){
    if(count[key]>max){
        max=count[key];
        mode=key;
    }
   }
   return parseInt(mode)
}

console.log(mode([1,2,3,2,2,4,5,1,6]))