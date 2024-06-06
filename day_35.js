//check a obj is empty or not


function emptyChecker(obj){
// for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//         return `not Empty`
//     }
//     return `Empty`
// }

return Object.keys(obj).length===0;
}

console.log(emptyChecker(
    {name:"vinod"}
))
console.log(emptyChecker(
 {name:null}
))
// console.log(emptyChecker(

// ))
// console.log(emptyChecker(
//  {name:undefined}
// ))