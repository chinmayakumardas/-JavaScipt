//write a function called truncateString that takes two parameter:
function truncateString(str,length){
    //way 1
    // if(length<=0){
    //     return str;
    // }else if(str.length>length){
    // return str.slice(0,length).concat("...");
    // }

    //way2
    return length<=0?str:str.slice(0,length).concat("...");
}

console.log(
    truncateString("A-tisket a-tasket A green and yellow basket",8)
)