function toNumber(value: number | string) : number | null {
    if (typeof value === "number") return value;
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
}
function add(a: number | string, b: number | string):number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if(numA === null || numB === null) return "du lieu khong hop le";
    return numA + numB;
}
function subtract(a: number | string, b: number | string):number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if(numA === null || numB === null) return "du lieu khong hop le";
    return numA - numB;
}
function multiply(a: number | string, b: number | string): number | string{
    const numA = toNumber(a);
    const numB = toNumber(b);
    if(numA === null || numB === null) return "Du lieu khong hop le";
    return numA * numB;
}
function divide(a: number | string, b: number | string): number | string{
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Du lieu khong hop le";
    if(numB === 0) return "Khong the chia cho 0";
    return numA / numB;
}

console.log(add(10,"20"));
console.log(subtract(10,"30"));
console.log(multiply("3","5"));
console.log(divide("20", "4"));
console.log(add("abc",9));
console.log(divide(0,9));





