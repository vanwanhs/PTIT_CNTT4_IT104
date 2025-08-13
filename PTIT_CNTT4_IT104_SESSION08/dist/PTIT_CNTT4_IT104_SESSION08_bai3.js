function reverseArray(arr) {
    return arr.slice().reverse();
}
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
const strings = ["apple", "banana", "cherry"];
console.log(reverseArray(strings));
