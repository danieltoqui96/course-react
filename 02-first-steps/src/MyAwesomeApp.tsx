import type { CSSProperties } from "react";

const firstName = "Daniel";
const lastName = "Hernandez";

const favoriteGames = ["Ciber Punk", "Pokémon", "Dispatch"];
const isActive = true;

const address = {
  zipCode: "ABC-123",
  country: "Canadá",
};

// Forma 2 de agregar estilos
const myStyles: CSSProperties = {
  backgroundColor: "#ccc",
  borderRadius: isActive ? 20 : 10,
  padding: 10,
};

export function MyAwesomeApp() {
  return (
    <>
      <h1 data-testid="firts-name-title"> {firstName} </h1>
      <h3> {lastName} </h3>

      <p> {favoriteGames.join(", ")} </p>

      <h1> {isActive ? "Activo" : "No activo"} </h1>

      <p
        // Forma 1 de agregar estilos
        // style={{
        //   backgroundColor: "#ccc",
        //   borderRadius: isActive ? 20 : 10,
        //   padding: 10,
        // }}

        // Forma 2 de agregar estilos
        style={myStyles}
      >
        {JSON.stringify(address)}
      </p>
    </>
  );
}
