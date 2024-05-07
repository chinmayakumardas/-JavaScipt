//recursion
//find a factorial of number using recurssion

function fact(n){
    if(n==0 || n==1){
        return n;
    }else{
        return n*fact(n-1)
    }
}


console.log(fact(4))