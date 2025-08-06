 function toNumber(value) {
    if (typeof value === "number")
        return value;
    var num = parseFloat(value);
    return isNaN(num) ? null : num;
};
function add(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "du lieu khong hop le";
    return numA + numB;
}
function subtract(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "du lieu khong hop le";
    return numA - numB;
}
function multiply(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "Du lieu khong hop le";
    return numA * numB;
}
function divide(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "Du lieu khong hop le";
    if (numB === 0)
        return "Khong the chia cho 0";
    return numA / numB;
}
console.log(add(10, "20"));
console.log(subtract(10, "30"));
console.log(multiply("3", "5"));
console.log(divide("20", "4"));
console.log(add("abc", 9));
console.log(divide(10, 0));
