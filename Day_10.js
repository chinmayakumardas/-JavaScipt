//write a function ArrEqual which takes 2 array and check that both arrays are same or not

//return true or false

function ArrEqual(arr1,arr2){
    let str1=arr1.toString();
    let str2=arr2.toString();
    return str1==str2?true:false;
}



console.log(
    ArrEqual([1,2,3,4],[1,2,3,4]),
    ArrEqual([1,2,4],[1,2,3]),
    ArrEqual([],[])
)