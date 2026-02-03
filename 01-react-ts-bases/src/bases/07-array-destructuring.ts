// De un arreglo podemos obtener sus elementos con destructuring
const names = ["Goku", "Vegeta", "Trunks"];
const [p1, p2, p3] = names;
const [, , trunks] = names; // accediendo solo al tercer elemento

console.log({ p1, p2, p3, trunks });

const returnArrayFn = () => {
  return ["ABC", 123] as const;
};

// Destruccturing al retorno de returnArrayFn()
const [letters, numbers] = returnArrayFn();
console.log({ msg: letters + 100, numbers });

// 'as const' hace que la tupla sea de solo lectura y preserve los tipos literales exactos
// TypeScript infiere que la primera posición es string y la segunda number
// por eso letters es tipo string y no genera error al concatenar con un número

// Ejercicio
const useState = (name: string) => {
  return [name, (value: string) => console.log(value)] as const;
};

const [name, setName] = useState("Goku");
// name = "Goku"
// setName = función que recibe un string
console.log(name);
setName("Vegeta");
