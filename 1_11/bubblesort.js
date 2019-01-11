let arr = [5,2,6,3,1,3];
let ordered = false;
let counter = 0;

while(ordered === false){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            counter++;
            let dummy = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = dummy;
        }

        if(counter == 0 && i == arr.length-2){
            ordered = true;
        }
    }
    counter = 0;
    console.log(arr);
}