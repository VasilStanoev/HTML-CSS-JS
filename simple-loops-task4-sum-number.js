function sumNum(inputParameters) {
    sum = 0;
    for (let counter = 1; counter < inputParameters.length; counter++) {
        sum += Number(inputParameters[counter]);
    }
    console.log(sum);
}
sumNum([2, 10, 20]);