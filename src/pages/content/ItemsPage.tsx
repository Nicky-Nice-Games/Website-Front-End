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
        className="min-h-[73vh] bg-size-[110%] bg-blend-multiply w-[100%]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255, 233, 0), rgb(255, 193, 0)), url('images/items-background-darkoutline.png')",
        }}
      >      
      <img
        src=" images/items-header.png"
        className="flex justify-self-left w-[30%] md:w-[30%]"
      ></img>
       

        <div className="flex flex-col lg:flex-row w-full m-auto items-center xl:items-start justify-center">
          <BoostCard/>
          <DefenseCard />
          <OffenseCard />
          <TrapCard />
        </div>
      </main>
    </>
  );
};

export { ItemsPage };
