import { ContentNavigator } from "@/components/content/content-navigator";
import { BoostCard } from "@/components/content/boost-card";
import { DefenseCard } from "@/components/content/defense-card";
import { OffenseCard } from "@/components/content/offense-card";
import { TrapCard } from "@/components/content/trap-card";

const ItemsPage = () => {
  return (
    <>
      <ContentNavigator currentPage={"items"} />
      <main className="px-8">
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left px-4 sm:px-8 md:px-12">
          Items Page
        </h2>

        <div className="flex flex-col xl:flex-row w-full m-auto items-center xl:items-start justify-center">
          <BoostCard />
          <DefenseCard />
          <OffenseCard />
          <TrapCard />
        </div>
      </main>
    </>
  );
};

export { ItemsPage };
