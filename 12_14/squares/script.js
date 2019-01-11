let width = 20;
width += 1;
let array = [];

function makeArray(size){
    let matrix = [];
    for (let i=0;i<size;i++){
        let row=[1];
        array.push(row);
        for (let j=0;j<size;j++){
            array[i].push(1);
        }
    }
    return array;
}

function createBoard(size){
    for (let i=0;i<size;i++){
        let row = [];
        for (let j=1;j<size;j++){
            let col=[1];
            if(array[i-1]){
                if(array[i][j-1]){
                    array[i][j] = array[i-1][j] + array[i][j-1]
                } else {
                    array[i-1]=1;
                }
            }
        }
    }
}

makeArray(width);
createBoard(width);
console.log(array[width-1][width-1]);