//write afunction to convert a string to camelCase and snake_case.


function cands(str){
    let arr=str.split(" ");

    let camelCase='';
    let snake_case='';
    for(let val of arr){
        if(arr.indexOf(val)==0){

            camelCase+=val;
            snake_case+=val;
        }
    else{
        camelCase+=val.charAt(0).toUpperCase()+val.slice(1,val.length)
        snake_case+="_"+val;
    }
    }

    return `camelcase= ${camelCase+"    " +"snake case is = "+snake_case}`
}

console.log(cands("chinmaya kumar das"))
console.log(cands("bande utkal janani"))