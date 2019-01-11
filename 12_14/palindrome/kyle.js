let highestPalindrome = 0;
let reverseStr = str => {
    let arr = str.split('');
    let revArr = arr.reverse();
    return revArr.join('');
}

for (let i=999; i>100; i--){
    for (let j=i; j>100; j--){
        let product = i * j;
        let productStr = product.toString();
        if(productStr === reverseStr(productStr)){
            if(product > highestPalindrome){
                highestPalindrome = product;
            }
        }
    }
}

console.log(highestPalindrome);