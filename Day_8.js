//write a function that takes non-ve int num as input and returnits factorial.
//the fact of non-ve int "n" denoted as "n!",is the product of all +ve int less than or = to "n".  the factorila of 0 is defined as 1.
//your function should work for any non-ve integer input.


function fact(n){

    let fact=1;
    if(n==0 || n==1){
        return 1;
    }
    for(let i=n;i>0;i--){
        fact=fact*i;
    }
    return fact;
}

console.log(fact(1));
console.log(fact(0));
console.log(fact(2));
console.log(fact(3));
console.log(fact(5));
console.log(fact(10));