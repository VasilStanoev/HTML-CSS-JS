function smallestNumber(params) {
    smallestNum = Number.POSITIVE_INFINITY;

    for (let counter = 1; counter < params.length; counter++) {
        let currenNum = Number(params[counter]);

        if (currenNum < smallestNum) {
            smallestNum = currenNum;
        }
    }
    console.log(smallestNum);
}
smallestNumber([3, -19, 20, -90]);