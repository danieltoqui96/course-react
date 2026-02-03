// En Ts se pueden tipificar los Arrays
const numbers: number[] = [1, 2, 3, 4, 5]; // Data type: Number
const booleans: boolean[] = [true, false]; // Data type: Boolean
const numbersOrStrings: (number | string)[] = [1, 2, "3", 4, 5];

console.log({ numbers, booleans, numbersOrStrings });

// Recorrer arrays
// for of - Itera directamente sobre los valores del array
for (let n of numbers) {
  console.log(n); // 1, 2, 3, 4, 5
}

// for in - Itera sobre los índices (claves) del array
for (let i in booleans) {
  console.log(booleans[i]);
}

// for tradicional - Control completo sobre la iteración
for (let i = 0; i < numbersOrStrings.length; i++) {
  console.log(numbersOrStrings[i]);
}

// Métodos funcionales
// forEach - Ejecuta una función por cada elemento, no retorna nada
numbers.forEach((valor) => console.log(valor));

// map - Crea un nuevo array transformando cada elemento
let double = numbers.map((num) => num * 2);
console.log({ double });

// filter - Crea un nuevo array con elementos que cumplen una condición
let pairs = numbers.filter((num) => num % 2 === 0);
console.log({ pairs });

// find - Retorna el primer elemento que cumple una condición
let foundItem = numbers.find((num) => num > 3);
console.log({ foundItem });

// reduce - Reduce el array a un único valor
let sum = numbers.reduce((acum, num) => acum + num, 0);
console.log({ sum });

// Para copiar, Si no necesito una copia profunda, puedo usar el operador spread para copiar.
const numbers2 = [...numbers];
numbers2.push(10);
console.log({ numbers, numbers2 });
