function greaterNum([arg1, arg2]) {
    let num = Number(arg1);
    let num1 = Number(arg2);
    if (num > num1) {
        console.log("num is greater: " + num);
    } 
    else if (num == num1) {
        console.log('Equal!');
        
    }
    else {
        console.log("num1 is greater: " + num1);
    }
}
greaterNum([1, 2]);
greaterNum([5 ,5]);
greaterNum([50, 5]);