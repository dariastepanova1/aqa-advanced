const divide = function (numerator, denominator) {
    if (denominator === 0) {
        return 'Error: Denominator cannot be zero.';
    }
    if (isNaN(numerator) || isNaN(denominator)) {
        return 'Error: Both numerator and denominator must be numbers.';
    }
    return numerator / denominator;
};

console.log(divide(10, 2)); 
console.log(divide(2, 0));
console.log(divide('a',2));

try {
    divide(10, 2);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    divide(10, 0);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    divide('a', 2);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Робота завершена');
}