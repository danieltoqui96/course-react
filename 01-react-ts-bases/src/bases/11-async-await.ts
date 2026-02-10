import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

// Función auxiliar para insertar imagen en el DOM
const createImageInsideDom = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

// Función asíncrona para obtener URL de GIF aleatorio
const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
  );

  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

// 1. Forma explícita pasando la URL como argumento
// getRandomGifUrl().then((url) => createImageInsideDom(url));

// 2. Forma simplificada pasando la referencia directa de la función
getRandomGifUrl().then(createImageInsideDom);
