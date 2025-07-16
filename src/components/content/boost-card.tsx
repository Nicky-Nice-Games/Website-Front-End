import { useMemo } from "react";
import { ItemCard } from "./item-card";
import { items } from "@/data/items";

export const BoostCard = () => {
  const boostItems = useMemo(
    () => items.filter((i) => i.category === "boost"),
    []
  );

  return (
    <ItemCard
      items={boostItems}
      bgGradient="from-[#39DC2B] to-[#35FF7A]"
      category="boost"
    />
  );
};
