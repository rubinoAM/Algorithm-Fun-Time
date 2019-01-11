function binSearch(lst,val){
    //Set range or bound to check
        //Gets smaller as we guess
    let btm = 0;
    let top = lst.length-1;
    let mid = Math.floor((top+btm)/2);

    //Loop 'til you find the right num
        //While the middle is the wrong num and there's more than 1 left, keep looping
    let found = false
    let counter = 0;
    while(!found){
        counter++;
        if(val < lst[mid]){
            top = mid - 1;
        }
        else if(val > lst[mid]){
            btm = mid + 1;
        }
        else{
            console.log(`We found ${val} in ${counter} guesses!`);
            found = true;
        }
        mid = Math.floor((top+btm)/2);
    }
    return mid;
}

let nums = [];
for(let i=0;i<100000000;i++){
    nums.push(i);
}
let rnd = Math.floor(Math.random() * nums.length);
const ind = binSearch(nums,rnd);
console.log(ind); //run node --max-old-space-size=8192 to run up to 100,000,000