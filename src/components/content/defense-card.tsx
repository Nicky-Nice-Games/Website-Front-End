import { ItemCard } from "./item-card";
import { items } from "@/data/items";

export const DefenseCard = () => {
  const defenseItems = items.filter((i) => i.category === "defense");

  return (
    <ItemCard
      items={defenseItems}
      bgGradient="from-[#342BDC] to-[#35C8FF]"
      category="defense"
    />
  );
};
