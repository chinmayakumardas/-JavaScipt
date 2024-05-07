//fibonacci
//using recurssion

function fibo(term){
   if(term<=1){
    return term;
   }else{

    return fibo(term-1)+fibo(term-2);
   }
    
}



console.log(fibo(0))
console.log(fibo(1))
console.log(fibo(2))
console.log(fibo(3))
console.log(fibo(4))