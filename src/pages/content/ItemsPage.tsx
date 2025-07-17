import { ContentNavigator } from "@/components/content/content-navigator";
import { BoostCard } from "@/components/content/boost-card";
import { DefenseCard } from "@/components/content/defense-card";
import { OffenseCard } from "@/components/content/offense-card";
import { TrapCard } from "@/components/content/trap-card";

const ItemsPage = () => {
  return (
    <>
      <ContentNavigator currentPage={"items"} />
      <main
        className="min-h-[73vh] bg-size-[110%] bg-blend-multiply"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255, 233, 0), rgb(255, 193, 0)), url('images/items-background-darkoutline.png')",
        }}
      >
        <h1
          className="w-full md:w-120 text-white text-5xl text-center poppins relative top-3 md:rounded-r-lg py-5 md:pl-40 md:pr-3
        bg-gradient-to-b from-[#F66624] to-[#D84B3A]"
        >
          Items Page
        </h1>

        <div className="flex flex-col lg:flex-row w-full m-auto items-center xl:items-start justify-center">
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
