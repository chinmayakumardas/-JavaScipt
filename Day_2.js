//write a fucnt to generate hashtagfrom a given input string
//first char will be capital and all strings are concatinated 
//ex-   "    #MyNameIsChinmayaKumar    "
//and string length not >280 and after trim the string ==0 then retutn false o/w return the hashtag

const generateHash=(str)=>{
    // console.log(str.length)
    if(str.length>28 || str.trim()===0){
        return false;
    }
    let hashtag="#";
    let words=str.split(" ");
  words.map((word)=>{
    hashtag= hashtag.concat(word[0]+word.slice(1,word.length))
  })
    return hashtag;
}
console.log(generateHash("i am chinmaya kumar das                    "))                                                                                                                                                          