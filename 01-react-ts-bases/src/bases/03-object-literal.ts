// Con interfaces puedes definir la estructura (shape) de un objeto:
// qué propiedades tiene y de qué tipo son.
interface Address {
  city: string;
  postalCode: string;
}

// Podemos anidar interfaces reutilizando tipos en otras interfaces.
// El signo ? convierte una propiedad en opcional (puede estar o no).
interface Hero {
  name: string;
  age: number;
  gender?: string; // propiedad opcional
  address?: Address; // interface anidada y opcional
}

// Objeto usando Hero como interface.
// TypeScript valida que el objeto cumpla con el contrato de Hero.
const hero: Hero = {
  name: "Iron Man",
  age: 45,
  address: {
    postalCode: "ABC123",
    city: "New York",
  },
};

console.log(hero);

// Formas para copiar objetos

// const villain = hero; // ❌ no copia, solo referencia al mismo objeto
// const villain = { ...hero }; // ✅ copia superficial (shallow copy)
const villain = structuredClone(hero); // ✅ copia profunda (deep copy)

villain.name = "Dr Octopus";
villain.age = 63;
// villain.address.city = "Santiago"; // ❌ error: address es opcional y podría ser undefined
villain.address!.city = "Santiago"; // ✅ el ! indica que estamos seguros de que existe

console.log(hero, villain);
