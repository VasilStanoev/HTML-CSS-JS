function fruitOrVegetables([arg1]) {
    let product = arg1;

    if (product == 'banana' || product == 'apple' || product == 'kiwi' || product == 'cherry') {
        console.log('fruit');
    }
    else if (product == 'tomato' || product == 'cucumber' || product == 'pepper') {
        console.log('vegetables');
    }
    else {
        console.log('unknown');
    }
}
fruitOrVegetables(['tomato']);
fruitOrVegetables(['banana']);
