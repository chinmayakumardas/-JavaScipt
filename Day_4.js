//create a function called cheackTriangle that takes 3 param repesting to length of 3 side of triangle .The function should return a string indicatimng thre typr of triangle: "equlateral ","isosclale","scalene".

//isoscale= 2 side are equal
//scalene=3 side are diff
//equilateral=3 side are same
var cheackTriangle = (a,b,c)=>{
   
    if(a===b && b===c ){
        return "equilateral";
    }
    if(a===b || b===c || c===a){
        return "isoscale";
    }
  
    return "scalene";
}
    


console.log(
    cheackTriangle(12,34,32)+"\n"+
    cheackTriangle(12,34,34)+"\n"+
    cheackTriangle(12,12,12)
)
