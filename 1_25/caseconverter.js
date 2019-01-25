function caseConvert(str,type){
    const camelPatt = new RegExp('[a-z]+([A-Z][a-z]+)+');
    const snakePatt = new RegExp('(([a-z]+(_))|([a-z]+))');
    if(type == 'camelcase'){
        let convertStr = '';
        if(camelPatt.test(str)){
            const makeLowercase = /[A-Z]/g;
            convertStr = str.replace(makeLowercase, (letter)=>{
                let lowered = letter.toLowerCase();
                underscore = '_';
                letter = underscore + lowered;
                return letter;
            });
            console.log(convertStr);
        }
        else{
            console.log("Your string does not match camelcasing and cannot be converted.")
        }
    }
    else if(type == 'snakecase'){
        let convertStr = '';
        if(snakePatt.test(str)){
            const makeUppercase = /[_][a-z]/g;
            convertStr = str.replace(makeUppercase, (letters)=>{
                var letter = letters.substring(1);
                var uppercase = letter.toUpperCase();
                return uppercase;
            })
            console.log(convertStr);
        }
        else{
            console.log("Your string does not match snakecasing and cannot be converted.")
        }
    }
}

stringOne = 'getSomeBones';
stringTwo = 'get_some_bones';
caseConvert(stringOne,'camelcase');
caseConvert(stringTwo,'snakecase');