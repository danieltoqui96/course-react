// De un objeto podemos obtener sus propiedades con destructuring
const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

// Forma tradicional de obtener las propiedades
const nombre = person.name;
const edad = person.age;
const llave = person.key;
console.log({ nombre, edad, llave });

// Usando destructuring
const { key, name, age } = person;
console.log({ name, age, key });

// También podemos usar destructuring en los parámetros de una función
interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const transformHero = ({ key, name, age, rank }: Hero) => {
  return {
    keyName: key,
    user: {
      name, // equivale a name: name
      age, // equivale a age: age
    },
    rank: rank,
  };
};
console.log(transformHero(person));

// Destructuring del retorno de transformHero()
const {
  keyName,
  user,
  rank = "sin rango", // valor por defecto si rank es undefined
  // user: { name }, // destructuring anidado de name
} = transformHero(person);
console.log({ rank, user, keyName });

// Para acceder al destructuring anidado de name solo la debo llamar como name
