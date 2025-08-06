function toNumber2(value) {
    if (typeof value === "number")
        return value;
    var num = parseFloat(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    var numA = toNumber2(a);
    var numB = toNumber2(b);
    if (numA === null || numB === null)
        return "du lieu khong hop le";
    return numA + numB;
}
function subtract(a, b) {
    var numA = toNumber2(a);
    var numB = toNumber2(b);
    if (numA === null || numB === null)
        return "du lieu khong hop le";
    return numA - numB;
}
function multiply(a, b) {
    var numA = toNumber2(a);
    var numB = toNumber2(b);
    if (numA === null || numB === null)
        return "Du lieu khong hop le";
    return numA * numB;
}
function divide(a, b) {
    var numA = toNumber2(a);
    var numB = toNumber2(b);
    if (numA === null || numB === null)
        return "Du lieu khong hop le";
    if (numB === 0)
        return "Khong the chia cho 0";
    return numA / numB;
}
function power(base, exponent) {
    return Math.pow(base, exponent);
}
function sqrt(base, root) {
    if (!Number.isFinite(root) || root === 0) {
        throw new Error("Bac can phai la so khac 0");
    }
    if (base < 0 && root % 2 === 0) {
        throw new Error("Khong the lay can bac chan cua so am");
    }
    return Math.sign(base) * Math.pow(Math.abs(base), 1 / root);
}
function factorial(n) {
    if (!Number.isInteger(n))
        throw new Error("Giai thua chi nhan so nguyen");
    if (n < 0)
        throw new Error("Giai thua khong dinh nghia cho so am");
    var r = 1;
    for (var i = 2; i <= n; i++)
        r *= i;
    return r;
}
var $ = function (sel) {
    return document.querySelector(sel);
};
function parseNumber(el) {
    var v = el.value.trim();
    if (v === "")
        return null;
    var n = Number(v);
    return Number.isFinite(n) ? n : null;
}
function setResult(msg, isError) {
    if (isError === void 0) { isError = false; }
    var box = $("#result");
    if (!box)
        return;
    box.textContent = msg;
    box.classList.toggle("error", isError);
}
/* ===== Gắn sự kiện các nút ===== */
function handle(op) {
    var i1 = $("#input1");
    var i2 = $("#input2");
    if (!i1 || !i2)
        return;
    var n1 = parseNumber(i1);
    var n2 = parseNumber(i2);
    try {
        var result = void 0;
        switch (op) {
            case "add":
                if (n1 === null || n2 === null)
                    throw new Error("Vui long nhap du 2 so");
                result = add(n1, n2);
                break;
            case "subtract":
                if (n1 === null || n2 === null)
                    throw new Error("Vui long nhap du 2 so");
                result = subtract(n1, n2);
                break;
            case "multiply":
                if (n1 === null || n2 === null)
                    throw new Error("Vui long nhap du 2 so");
                result = multiply(n1, n2);
                break;
            case "divide":
                if (n1 === null || n2 === null)
                    throw new Error("Vui long nhap du 2 so");
                result = divide(n1, n2);
                break;
            case "power":
                if (n1 === null || n2 === null)
                    throw new Error("Nhap base (o 1) va exponent (o 2)");
                result = power(n1, n2);
                break;
            case "sprt":
                if (n1 === null || n2 === null)
                    throw new Error("Nhap so (o 1) va bac can (o 2)");
                result = sqrt(n1, n2);
                break;
            case "factorial":
                if (n1 === null)
                    throw new Error("Nhap so nguyen o o 1 de tinh giai thua");
                result = factorial(n1);
                break;
            default:
                throw new Error("Phep toan khong ho tro");
        }
        setResult("Ket qua: ".concat(result));
    }
    catch (err) {
        setResult("Loi: ".concat(err.message || err), true);
    }
}
function init() {
    document
        .querySelectorAll("button[data-op]")
        .forEach(function (btn) { return btn.addEventListener("click", function () { return handle(btn.dataset.op); }); });
}
document.addEventListener("DOMContentLoaded", init);
