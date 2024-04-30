// write a function to takes a number as input and return sum of its digits

function digSum(n){
    let sum=0;
    while(n>0){
        let r=n%10;
        sum+=r;
        n=Math.floor(n/10);
    }
    return sum;
}
console.log(digSum(10154));

