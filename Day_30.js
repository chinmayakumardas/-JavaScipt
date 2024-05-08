//Recursive number range generator


function numberRangeRecursive(a,b,arr=[]){
    if(a<=b){
        arr.push(a);
        return numberRangeRecursive(a+1,b,arr)
        
    }
    return arr;

}


console.log(numberRangeRecursive(0,5));//o/p- [0,1,2,3,4,5]
console.log(numberRangeRecursive(3,7));//o/p- [3,4,5,6,7]