function leftAndRightSum(params) {
    let n = Number(params[0]);
    let leftSum = 0;
    let rightSum = 0;
    //calc leftSum
    for (let counter = 1; counter <= n; counter++) {
        leftSum += Number(params[counter]);
    }
    //calc rightum
    for (let i = n + 1; i <= 2 * n; i++) {
        rightSum += Number(params[i]);
    }
    console.log(leftSum);
    console.log(rightSum);
}
leftAndRightSum([2, 10, 90, 60, 41]);