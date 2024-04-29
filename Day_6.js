//" write a function to determine wheather a given string is palindrome or not"


//contraint
//*********************** */

//the input may contain letters,digits,spaces,punctuation,and special characters.

//function is casesensitive "Racecar" ="racecar"
//it return true or false

function palindrome(str){
   str= str.toLowerCase();
    let rev=str.split("").reverse().join("");
    return rev===str?true:false;
}

console.log(
    palindrome("racecar")
)