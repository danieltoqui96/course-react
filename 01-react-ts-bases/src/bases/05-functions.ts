// En TypeScript podemos indicar el tipo de los parámetros y el tipo de retorno
function greet(name: string): string {
  return `Hola ${name}`;
}
console.log(greet("Goku"));

// Con arrow function
const greetArrow = (name: string): string => `Hola ${name}`;
console.log(greetArrow("Vegeta"));

// También podemos definir una interfaz para el tipo de retorno
interface User {
  uuid: string;
  username: string;
}

// Función tradicional
function getUser(): User {
  return {
    uuid: "ABC-123",
    username: "El_Papi23",
  };
}
console.log(getUser());

// Con arrow function
const getUserArrow = (): User => ({
  uuid: "ABC-123",
  username: "El_Papi23",
});
console.log(getUserArrow());
