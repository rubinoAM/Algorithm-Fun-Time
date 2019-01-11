// console.log("moo")
// Guess a Number
// Loop thru all
    //If curr num = number
        //

let nmLst = [1,2,3,4,5];
let nm = Math.floor(Math.random() * nmLst.length);
console.log(nm);

/* for (let i=0;i<nmLst.length;i++){
    if(nmLst[i]===nm){
        console.log("Found!", nm)
        console.log(`It took ${i+1} guesses to get the answer`)
        break
    }
} */

// While not found
    // Generate random index between 0 + array.len
    // Check val
        // If found, return index
        // If not, change val in tracking to false
            // Counter ++
        // If counter = length, then return false

// Guess randomly (Not a good option)
let found = false;
let counter = 1;
/* while (!found){
    counter++;
    let rndI = Math.floor(Math.random()*nmLst.length);
    if(nmLst[rndI]===nm){
        found = true;
        console.log("DONE!",nm);
        console.log(`${counter} guesses`);
    }
} */

// Track guess num
found = false;
let ind = Math.floor(nmLst.length/2)
while(!found){
    if(nm === nmLst[ind]){
        console.log(nmLst[ind]);
    } else if (nm < nmLst[ind]){
        //Cut off top half by moving index to middle of lower half
        ind = Math.floor(ind/(2*counter));
        counter++;
    } else {
        //Cut off bottom half
        ind = Math.floor((ind + nmLst.length)/(2*counter));
        counter++;
    }
}