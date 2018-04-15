'use strict';
function biggestNumber(params) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    for (let counter = 1; counter < params.length; counter++) {
        let currentNum = Number(params[counter]);
        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }
    }
    console.log(biggestNum);
}
biggestNumber([4, 45, -20, 7, 99]);