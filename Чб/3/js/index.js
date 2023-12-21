const age = 24;
console.log(Number(age), Boolean(age), String(age));

let names = "Марат";
console.log(Number(names), Boolean(names), String(names));

let isGreater = 6 > 6;
console.log(Number(isGreater), Boolean(isGreater), String(isGreater));

let nulls = null;
console.log(Number(nulls), Boolean(nulls), String(nulls));

let under = undefined;
console.log(Number(under), Boolean(under), String(under));

let obj = new Object();
console.log(Number(obj), Boolean(obj), String(obj));

let pipez = 1n;
console.log(Number(pipez), Boolean(pipez), String(pipez));

let sym = Symbol("id");
console.log("Нельзя преобразовать в Number", Boolean(sym), String(sym));