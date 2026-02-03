// Creamos una Promise que simula pedirle dinero prestado a un amigo
// Promise<number> indica que, si se resuelve, retornará un número
const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(100); // ✓ Si todo sale bien, devuelve el dinero
    reject("Mi amigo se perdió"); // ✗ Algo salió mal
  }, 2000);
});

// Consumimos la promesa
myPromise
  .then((myMoney) => {
    // Se ejecuta solo si la promesa se resuelve (resolve)
    console.log(`Tengo mi dinero: $${myMoney}`);
  })
  .catch((reason) => {
    // Se ejecuta si la promesa es rechazada (reject)
    console.warn(`Error: ${reason}`);
  })
  .finally(() => {
    // Se ejecuta SIEMPRE, sin importar el resultado
    console.log("A seguir con mi vida");
  });
