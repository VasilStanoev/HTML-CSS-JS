function simpleNum(params) {
    let num = 6;
    switch (num) {
        case 1: break;
        case 2:
        case 3:
        case 4:
        case 6: console.log('Number = 6'); //if remove comment function will stop here. break;
        case 10: console.log('Number is simple!'); break;
        default: console.log('This is not a, number!'); 
    }
}
simpleNum();