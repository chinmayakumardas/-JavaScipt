
    //q-1
  "  write a function findlonestword that takes a string and return the lonest word in the string .if there multiple lonest word,return first encountered."

  
  //way1
  const findlongestword=(str)=>{
        if(str.trim().length===0){
            return false;
        }
        words=str.split(" ");
        //comparision function
        words=words.sort((a,b)=>{b.length-a.length});
        console.log(words);
         return words[0];
        };

        console.log(
            findlongestword("Watch Technical Chinmaya javascript awesome ckumar course on youtube")
        );


        //way2

  {  
    const findlongestword=(str)=>{
        if(str.trim().length===0){
            return false;
        }
        words=str.split(" ");
        //comparision function
        words=words.reduce(
            (accum,currentWord)=>
               ( currentWord.length > accum.length ? currentWord:accum)
            
        );
       
         return words;
        };

        console.log(
            findlongestword("Watch Technical Chinmaya javascript awesomeckumar course on youtube")
        );
    }