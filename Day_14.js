// write a function called isPowOfTwo that takes a number as input and return true if the no is a power of 2 o/w return false
function isPowOfTwo(n){
    
    while(n>1){
        if(n%2!==0){
            return false;
        }
        n=n/2;
    }
    return true;
}

console.log(
    isPowOfTwo(16),
    isPowOfTwo(9),
    isPowOfTwo(123),
    isPowOfTwo(1024),
)
