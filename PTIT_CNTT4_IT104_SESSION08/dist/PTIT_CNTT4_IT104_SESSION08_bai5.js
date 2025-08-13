function findFirstEven(arr, predicate) {
    for (const item of arr) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}
const number = [1, 3, 7, 8, 10];
const firstEvenNumber = findFirstEven(number, (num) => typeof num === "number" && num % 2 === 0);
console.log(firstEvenNumber);
