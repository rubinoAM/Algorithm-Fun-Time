const fs = require('fs');
let fileName = process.argv[2];
fs.readFile(fileName,'utf-8',function(err,contents){
    if(err){console.log(err);}
    let numString = contents;
    numString = numString.split('\n').join('');
    const numArray = numString.split('');
    let count = 0;
    for(let i=0;i<numArray.length;i++){
        count+=Number(numArray[i]);
    }
    console.log(count);
});