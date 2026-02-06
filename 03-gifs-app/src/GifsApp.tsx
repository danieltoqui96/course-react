import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { previousTerms, gifs, handleSearch, handleTermClicked } = useGifs();

  return (
    <>
      {/* Headder */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar lo que quieras" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={(term: string) => handleTermClicked(term)}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
