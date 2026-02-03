import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "Mez8tR4bch8GkylVzRSApHjaFlnTmK1I";

// LLamada a Giphy con fetch
const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
);

// 1. Método tradicional con promesas anidadas (no recomendado)
// myRequest
//   .then((response) => {
//     response.json().then((data) => console.log(data));
//   })
//   .catch((err) => console.error(err));

// 2. Método tradicional con encadenamiento de promesas (más legible)
// myRequest
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// 3. Forma con manipulación del DOM
// myRequest
//   .then((response) => response.json())
//   .then((data) => {
//     const imageUrl = data.data.images.original.url;
//
//     const imgElement = document.createElement("img");
//     imgElement.src = imageUrl;
//
//     document.body.append(imgElement);
//   })
//   .catch((err) => console.error(err));

// 4. Forma correcta usando tipado estricto y separación de responsabilidades
const createImageInsideDom = (url: string): void => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDom(imageUrl);
  })
  .catch((err) => console.error(err));
