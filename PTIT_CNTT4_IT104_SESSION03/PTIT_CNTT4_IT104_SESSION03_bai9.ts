function toNumber(value: number | string) : number | null {
  if (typeof value === "number") return value;
  const num = parseFloat(value as string);
  return isNaN(num) ? null : num;
}

function add(a: number | string, b: number | string): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  if (numA === null || numB === null) return "du lieu khong hop le";
  return numA + numB;
}

function subtract(a: number | string, b: number | string): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  if (numA === null || numB === null) return "du lieu khong hop le";
  return numA - numB;
}

function multiply(a: number | string, b: number | string): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  if (numA === null || numB === null) return "Du lieu khong hop le";
  return numA * numB;
}

function divide(a: number | string, b: number | string): number | string {
  const numA = toNumber(a);
  const numB = toNumber(b);
  if (numA === null || numB === null) return "Du lieu khong hop le";
  if (numB === 0) return "Khong the chia cho 0";
  return numA / numB;
}

function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

function sqrt(base: number, root: number): number {
  if (!Number.isFinite(root) || root === 0) {
    throw new Error("Bac can phai la so khac 0");
  }
  if (base < 0 && root % 2 === 0) {
    throw new Error("Khong the lay can bac chan cua so am");
  }
  return Math.sign(base) * Math.pow(Math.abs(base), 1 / root);
}

function factorial(n: number): number {
  if (!Number.isInteger(n)) throw new Error("Giai thua chi nhan so nguyen");
  if (n < 0) throw new Error("Giai thua khong dinh nghia cho so am");
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

/* ===== UI helpers ===== */
const $ = <T extends HTMLElement>(sel: string) =>
  document.querySelector(sel) as T | null;

function parseNumber(el: HTMLInputElement): number | null {
  const v = el.value.trim();
  if (v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function setResult(msg: string, isError = false) {
  const box = $("#result");
  if (!box) return;
  box.textContent = msg;
  box.classList.toggle("error", isError);
}


function handle(op: string) {
  const i1 = $("#input1") as HTMLInputElement | null;
  const i2 = $("#input2") as HTMLInputElement | null;
  if (!i1 || !i2) return;

  const n1 = parseNumber(i1);
  const n2 = parseNumber(i2);

  try {
    let result: number | string;

    switch (op) {
      case "add":
        if (n1 === null || n2 === null) throw new Error("Vui long nhap du 2 so");
        result = add(n1, n2);
        break;
      case "subtract":
        if (n1 === null || n2 === null) throw new Error("Vui long nhap du 2 so");
        result = subtract(n1, n2);
        break;
      case "multiply":
        if (n1 === null || n2 === null) throw new Error("Vui long nhap du 2 so");
        result = multiply(n1, n2);
        break;
      case "divide":
        if (n1 === null || n2 === null) throw new Error("Vui long nhap du 2 so");
        result = divide(n1, n2);
        break;
      case "power":
        if (n1 === null || n2 === null) throw new Error("Nhap base (o 1) va exponent (o 2)");
        result = power(n1, n2);
        break;
      case "sprt":
        if (n1 === null || n2 === null) throw new Error("Nhap so (o 1) va bac can (o 2)");
        result = sqrt(n1, n2);
        break;
      case "factorial":
        if (n1 === null) throw new Error("Nhap so nguyen o o 1 de tinh giai thua");
        result = factorial(n1);
        break;
      default:
        throw new Error("Phep toan khong ho tro");
    }

    setResult(`Ket qua: ${result}`);
  } catch (err: any) {
    setResult(`Loi: ${err.message || err}`, true);
  }
}

function init() {
  document
    .querySelectorAll<HTMLButtonElement>("button[data-op]")
    .forEach(btn => btn.addEventListener("click", () => handle(btn.dataset.op!)));
}

document.addEventListener("DOMContentLoaded", init);
