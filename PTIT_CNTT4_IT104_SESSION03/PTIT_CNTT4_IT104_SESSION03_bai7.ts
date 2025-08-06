let input: string = "hello world";
let output: string = "";
for (let char of input){
    if(!output.includes(char)){
        output += char;
    }
}
console.log("input: ",input);
console.log("output: ",output);

