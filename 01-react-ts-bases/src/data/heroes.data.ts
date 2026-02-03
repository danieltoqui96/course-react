// Interface para arreglo heroes
export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

// Tipos de datos para valores especificos
export type Owner = "DC" | "Marvel";

// export enum OwnerEnum {
//   DC = "DC",
//   Marvel = "Marvel",
// }
// Ejemplo - owner: Owner.DC,

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

// export default heroes;
