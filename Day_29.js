//write a function called numberRange that generates an array containing consecutive numbers from a to b.(inclusive)

function numberRange(a,b){
    let arr=[];
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr;
}

console.log(numberRange(3,8))
console.log(numberRange(0,5))
console.log(numberRange(-3,2))