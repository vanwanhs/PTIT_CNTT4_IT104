let input = "hello word";
let output = "";
for (let char of input) {
    if (!output.includes(char)) {
        output += char;
    }
}
console.log("input: ", input);
console.log("output: ", output);
