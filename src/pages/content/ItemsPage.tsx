import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ContentNavigator } from "@/components/content/content-navigator";
import { CloseIcon } from "@/components/content/close-icon";
import { items, type Item } from "@/data/items";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

//Items Page - displays in-game items and their abilities in a grid list
const ItemsPage = () => {
  interface CategorizedItems {
    category: string;
    itemList: Item[];
    bgGradient: string;
  }
  // state for tracking which item is active (expanded) or not
  const [active, setActive] = useState<CategorizedItems | boolean | null>(null);
  const [activeItem, setActiveItem] = useState<Item | null>(null);

  const id = useId(); // unique ID for layout animations
  const ref = useRef<HTMLDivElement>(null); // ref for detecting outside clicks

  useEffect(() => {
    // close pop up on Escape key
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    // lock body scroll when pop up is open
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // close pop up when clicking outside
  useOutsideClick(ref, () => setActive(null));

  const categorizedItemList: CategorizedItems[] = [
    {
      category: "boost",
      itemList: items.filter((i) => i.category === "boost"),
      bgGradient: "from-[#39DC2B] to-[#35FF7A]",
    },
    {
      category: "defense",
      itemList: items.filter((i) => i.category === "defense"),
      bgGradient: "from-[#342BDC] to-[#35C8FF]",
    },
    {
      category: "offense",
      itemList: items.filter((i) => i.category === "offense"),
      bgGradient: "from-[#DC2B2B] to-[#FF5F35]",
    },
    {
      category: "trap",
      itemList: items.filter((i) => i.category === "trap"),
      bgGradient: "from-[#FFB000] to-[#F4D55D]",
    },
  ];

  for (let ci of categorizedItemList) {
  }

  return (
    <>
      <ContentNavigator currentPage={"items"} />
      <main className="px-8">
        <h2
          className=" /* Default CSS */ text-black text-2xl sm:text-3xl md:text-4xl 
                lg:text-5xl xl:text-6xl text-center sm:text-left px-4 sm:px-8 md:px-12"
        >
          Items Page
        </h2>
        {/* overlay behind pop up when active */}
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-41"
            />
          )}
        </AnimatePresence>

        {/* expanded item pop up */}
        <AnimatePresence>
          {active && typeof active === "object" && activeItem ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.div
                layoutId={`item-${active.category}-${id}`}
                ref={ref}
                className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                {/*Shows Information used to create layout of item*/}
                <motion.div
                  layoutId={`image-${active.category}-${id}`}
                  className={`flex flex-col items-center bg-size-[100%_100%] p-2 bg-gradient-to-b ${active.bgGradient}`}
                >
                  <motion.button
                    key={`button-${active.category}-${id}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    className="self-end rounded-full h-6"
                    onClick={() => setActive(null)}
                  >
                    <CloseIcon /> {/* close icon pop up*/}
                  </motion.button>
                  {/*Image of item*/}
                  <img
                    width={200}
                    height={200}
                    src={activeItem.imgUrl}
                    alt={activeItem.name}
                    className="w-72 h-72 object-contain"
                  />

                  {/*Level select tabs*/}
                  <Tabs defaultValue="0">
                    <TabsList className="bg-inherit">
                      {active.itemList.map((item) => {
                        return (
                          <TabsTrigger
                            onClick={() => setActiveItem(item)}
                            value={item.level.toString()}
                            className="outline-black pt-3"
                          >
                            Level {item.level}
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                  </Tabs>
                </motion.div>

                {/*Bottom half of the item card - has info and name of item*/}
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="w-full">
                      <motion.h3
                        layoutId={`title-${active.category}-${id}`}
                        className="bg-[url(images/arrow.png)] bg-size-[70%_100%] bg-center bg-no-repeat py-2
                        font-medium text-white dark:text-neutral-200 text-2xl mb-4 text-center"
                      >
                        {activeItem.name}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.category}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-base text-center"
                      >
                        {activeItem.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <div className="flex flex-col xl:flex-row w-full m-auto items-center xl:items-start justify-center">
          {categorizedItemList.map((ti) => {
            return (
              <motion.div
                layoutId={`item-${ti.category}-${id}`}
                key={ti.category}
                onClick={() => {
                  setActive(ti);
                  setActiveItem(ti.itemList[0]);
                }} // open item pop up
                className="cursor-pointer"
              >
                <motion.div layoutId={`image-${ti.category}-${id}`}>
                  <div className="rounded-xl h-80 w-80 flex  hover:scale-105">
                    <img
                      src={ti.itemList[0].imgUrl}
                      alt={ti.itemList[0].name}
                      className="h-80 w-80 object-contain"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </>
  );
};
export { ItemsPage };
