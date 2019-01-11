function findRoutes(size){
    let routes = [];
    for (let i = 1; i <= size; i++){
        routes.push(1);
    }
    for (let i = 1; i <= size; i++){
        for (let j = 1; j <= size; j++){
            routes[j] = routes[j]+routes[j-1];
        }
        routes[i] = 2 * routes[i-1];
    }
}

console.time('grid');
grid = 2000;
n = findRoutes(grid);
console.log(n);