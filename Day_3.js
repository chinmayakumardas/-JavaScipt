//Task 1:
//Write a function called countchar that takes 2 parameter : a string and character to count.The function should return the number of times the specified character appears in the string.

//to do constraints:----------------------------------------
//? The function should be case-sentences.
//? the function should both lowercase and uppercase character
//*? the character parameter can be any printable ASCII character (the function should
// accept any chracter that  is apart of the ASCII character set and is printable )

// console.log(
//     countChar("MissIssippi","I")
// );
//output- 4


//way1
{
function countChar(str, char) {
  let Array = str.split("");
  let count = 0;

  for (let val of Array)
    if (val.toUpperCase() == char.toUpperCase()) {
      count++;
    }
    return count;
}

console.log(countChar("MissIssippi", "I"));
}


//way2

const countChar=(word,char)=>{
    word=word.toLowerCase();
    char=char.toLowerCase();

   let result= word.split("").reduce((accum,currentCharr)=>{
        if(currentCharr==char){
            accum++;
        }
        return accum;
    },0);
    return result;
}
console.log(countChar("MissIssippi", "I"));
