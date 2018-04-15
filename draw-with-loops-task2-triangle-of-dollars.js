function triangleOfDollars([params]) {
    let n = Number(params);
     for(let counter = 1; counter <= n; counter ++) {
        console.log("$ ".repeat(counter));
    }
}
triangleOfDollars([5]);