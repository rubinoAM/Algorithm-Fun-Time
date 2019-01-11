let arr = [5,2,6,3,1,3];

divide = (array)=>{
    if(array.length < 2){
        return array;
    }
    
    let mid = Math.floor(array.length/2);
    let topHalf = array.slice(0,mid);
    let btmHalf = array.slice(mid);
    return sort(divide(topHalf),divide(btmHalf));
}

sort = (half1,half2)=>{
    let sorted = [];
    while(half1.length && half2.length){
        if(half1[0] <= half2[0]){
            sorted.push(half1.shift())
        }
        else{
            sorted.push(half2.shift())
        }
    }
    let output = [...sorted, ...half1, ...half2]
    return output;
}

console.log(divide(arr));