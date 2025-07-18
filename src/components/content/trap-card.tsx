import { ItemCard } from "./item-card";
import { items } from "@/data/items";

export const TrapCard = () => {
  const trapItems = items.filter((i) => i.category === "trap");

  return (
    <ItemCard
      items={trapItems}
      bgGradient="from-fuchsia-800 to-fuchsia-500"
      category="trap"
    />
  );
};
