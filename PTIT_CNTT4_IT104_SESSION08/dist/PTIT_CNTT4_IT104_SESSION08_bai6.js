function findElement(arr, value) {
    for (const item of arr) {
        if (item === value) {
            return item;
        }
    }
    return undefined;
}
const number1 = [1, 3, 5, 7, 9];
console.log(findElement(number1, 5));
console.log(findElement(number1, 2));
const names = ["An", "Bình", "Chi"];
console.log(findElement(names, "Bình"));
console.log(findElement(names, "Dung"));
