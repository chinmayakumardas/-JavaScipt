//write a function that takes a string as input and return the count of vowels in that string.Consider 'a','e','i','o','u' as vowel(both lower and upper case).


function countVowel(str){
    let count=0;
           let strArr=str.replaceAll(" ","").split('');
           for(let val of strArr){
                if(val.match(/[aeiou/AEIOU]/i)){
                    count++
                }
           } 
           return count;
}




console.log(countVowel("Brrrp"));//o/p-  0
console.log(countVowel("Hello world"));//o/p-  3
console.log(countVowel("ThE quIck brOwn Fox"));//o/p- 5
console.log(countVowel("chinmaya kumar das"));//o/p- 6