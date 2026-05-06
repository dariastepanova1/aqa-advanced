const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

let positiveCount=0;
let negativeCount=0;
let zeroCount=0;

for (const num of numbers) {
    if (num > 0) positiveCount++;
    else if (num < 0) negativeCount++;
    else zeroCount++;
}

console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нулів: ${zeroCount}`);