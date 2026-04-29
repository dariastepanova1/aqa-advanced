const checkOrder = function (available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    } else if (ordered > available) {
        return "our order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted";
    }
};

console.log(checkOrder(5, 0));
console.log(checkOrder(5, 3));
console.log(checkOrder(7, 10));