import { ItemCard } from "./item-card";
import { items } from "@/data/items";

export const OffenseCard = () => {
  const offenseItems = items.filter((i) => i.category === "offense");

  return (
    <ItemCard
      items={offenseItems}
      bgGradient="from-[#DC2B2B] to-[#FF5F35]"
      category="offense"
    />
  );
};
