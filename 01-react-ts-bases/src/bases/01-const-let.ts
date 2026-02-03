// TypeScript infiere automáticamente los tipos
const name = "Mr"; // TypeScript infiere: string
let lastName = "Robot"; // TypeScript infiere: string
let count = 200; // TypeScript infiere: number
let status = true; // TypeScript infiere: boolean

// ✅ Recomendado: inferencia de tipos
const pi = 3.1416;
let city = "Santiago";

// ✅ Necesario: cuando no se inicializa
let age: number;
age = 30;

// ✅ Útil: para mayor claridad en tipos complejos
let users: string[] = [];

console.log({ name, lastName, count, status, pi, city, age, users });

const containsLetterT = lastName.includes("T");
console.log({ containsLetterT, count });
