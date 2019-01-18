/* Pseudo-code
    get names.txt
    for each line
        for i=line.length-1; i > 0; i--;
            line = new array
            line.push(line[i]);
*/

const fs = require('fs');
let fileName = process.argv[2];

fs.readFile(fileName,'utf-8',function(err,contents){
    if(err){console.log(err);}
    names = contents;
    namesArray = names.split('\n');
    namesArray.forEach((name)=>{
        //checkIfPalindrome(name);
        let revName = name.split('').reverse().join('');
        if(revName == name){
            console.log(name);
        }
    })
});

/*function checkIfPalindrome(name){
    let origName = name;
    for(let i=0; i > name.length - i;i++){
        let curLastIndex = name.length - i;
        let hiddenVal = name[i];
        name[i] = name[curLastIndex];
        name[curLastIndex] = hiddenVal;
        console.log(name);
    }

    if(origName == name){
        console.log(origName);
    }
}*/