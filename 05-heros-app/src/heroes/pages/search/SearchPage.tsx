import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControl } from "./ui/SearchControl";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos "
      />
      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControl />
    </>
  );
};

export default SearchPage;
