import { ItemCard } from "./item-card";
import { items } from "@/data/items";

export const TrapCard = () => {
  const trapItems = items.filter((i) => i.category === "trap");

  return (
    <ItemCard
      items={trapItems}
      bgGradient="from-amber-400 to-yellow-300"
      category="trap"
    />
  );
};
