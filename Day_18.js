//write a function to check if a char is uppercase or lowercase
 
//constraint :
//input is always single char
//
function isChar(s){
    let l=s.charCodeAt(0);
        if(l>=65 && l<=97){
            return "uppercase"
        }if(l>=98 && l<=123){
            return "lowercase"
        }
 }


 console.log(isChar("s"))
 console.log(isChar("A"))
 console.log(isChar("B"))
 console.log(isChar("a"))
 console.log(isChar("C"))

 console.log("s".charCodeAt(0))
