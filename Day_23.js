// write a function to number of occurance of a number and store in a object and print it

let number=[1,2,3,1,4,5,2,6,7,8]


let counts={};
for(let element of number){
    counts[element]=(counts[element] || 0)+1;
}

console.log(counts)