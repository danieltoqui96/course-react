import { heroes, type Hero, type Owner } from "../data/heroes.data";

// Si no sabemos si existe el id, definimos Hero | undefined en el retorno
const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => hero.id === id);

  // Opción alternativa: lanzar error si no existe
  // if (!hero) {
  //   throw new Error(`No existe un héroe con el id: ${id}`);
  // }

  return hero;
};

console.log(getHeroById(2));

// Ejercicio: crear función que siempre retorna una arreglo
export const getHeroesByOwner = (owner: Owner): Hero[] => {
  return heroes.filter((hero) => hero.owner === owner);
};

console.log(getHeroesByOwner("DC"));
