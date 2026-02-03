// Comillas simples o dobles
const greeting = "Hola Mundo";

// Template literals (backticks) - recomendado para interpolación
const name = "Fernando";
const fullGreeting = `Hola, ${name}!`;

// Concatenación tradicional (menos recomendada)
const oldWay = "Hola" + " " + name;

console.log({ greeting, fullGreeting, oldWay });
