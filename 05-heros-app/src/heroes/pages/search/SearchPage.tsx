import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControl } from "./ui/SearchControl";
import { CustomBreadcrum } from "@/components/custom/CustomBreadcrum";
import { useSearchParams } from "react-router";
import { searchHeroesAction } from "@/heroes/actions/search-hero.action";
import { useQuery } from "@tanstack/react-query";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
  });

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

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
