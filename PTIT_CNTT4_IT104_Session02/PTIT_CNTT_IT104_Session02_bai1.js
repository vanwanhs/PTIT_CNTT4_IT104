let arr = [];
let n = parseInt(prompt("Enter element:"));

for (let i = 0; i < n; i++) {
    let value = parseInt(prompt(`Element ${i + 1}:`));
    arr.push(value);
}

console.log("Array:", arr);
const sum = (arr) => {
    let total = 0;
    for (const num of arr){
        if (num % 2 == 0){
            total += num;
        }
    }
    return total;
}
console.log(sum(arr));

