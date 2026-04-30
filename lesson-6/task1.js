//function declaration
function calculateArea (windth, height) {
    return windth * height;
}

console.log(calculateArea(5, 10));

//function expression
const calculateArea2 = function (windth, height) {
    return windth * height;
}

console.log(calculateArea2(3, 6));

//arrow function
const calculateArea3 = (windth, height) => windth * height;

console.log(calculateArea3(2, 4));