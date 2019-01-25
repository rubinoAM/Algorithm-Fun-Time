function caseConvert(str, conversionType){
   let convertedStr = ``;
   if (conversionType === 'camelCase'){
       convertedStr = str.replace(/ [a-z]/g, (whatwasfound)=>(whatwasfound.toUpperCase()));
       convertedStr = convertedStr.replace(/./, (firstLetter)=>(firstLetter.toLowerCase()))
       convertedStr = convertedStr.replace(/\s/g, ``);
       return convertedStr;

   }
   if (conversionType ==='snake_case'){
       convertedStr = str.replace(/ /g, `_`);
       return convertedStr;
   }
}

let camelCase = caseConvert("The Rain in SPAIN stays mainly in the plain", 'camelCase');
console.log(camelCase);
let snake_case = caseConvert("The Rain in SPAIN stays mainly in the plain", 'snake_case');
console.log(snake_case);