import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControl } from "./ui/SearchControl";
import { CustomBreadcrum } from "@/components/custom/CustomBreadcrum";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos "
      />

      <CustomBreadcrum
        currentPage="Buscador de héroes"
        // breadcrumbs={[
        //   { label: "home1", to: "/" },
        //   { label: "home2", to: "/" },
        //   { label: "home3", to: "/" },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControl />
    </>
  );
};

export default SearchPage;
