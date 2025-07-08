import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ContentNavigator } from "@/components/content/content-navigator";
import { CloseIcon } from "@/components/content/close-icon";
import { items } from "@/data/items";

//Items Page - displays in-game items and their abilities in a grid list
const ItemsPage = () => {
  // state for tracking which item is active (expanded) or not
  const [active, setActive] = useState<
    { name: string; description: string; imgUrl: string } | boolean | null
  >(null);

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
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.div
                layoutId={`item-${active.name}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                {/*Shows Information used to create layout of item*/}
                <motion.div
                  layoutId={`image-${active.name}-${id}`}
                  className="flex justify-center bg-[url(images/card-background.png)] p-8"
                >
                  <div className="m-3"></div>

                  {/*Image of character*/}
                  <img
                    width={200}
                    height={200}
                    src={active.imgUrl}
                    alt={active.name}
                    className="w-60 h-64 object-contain"
                  />

                  <motion.button
                    key={`button-${active.name}-${id}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    className="flex relative bottom-5 left-22 md:left-24 items-center justify-center rounded-full h-6"
                    onClick={() => setActive(null)}
                  >
                    <CloseIcon /> {/* close icon pop up*/}
                  </motion.button>
                </motion.div>

                {/*Bottom half of the item card - has info and name of item*/}
                <div className="p-4 bg-[url(images/bottom-card.png)]">
                  <div className="flex justify-between items-start">
                    <div className="w-full">
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        className="font-medium text-white dark:text-neutral-200 text-2xl mb-4 text-center"
                      >
                        {active.name}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-base text-center"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* grid of items */}
        <div className="grid place-items-center gap-4 p-4 mx-auto max-w-6xl lg:grid-cols-4 md:grid-cols-4 ">
          {items.map((item) => (
            <motion.div
              layoutId={`item-${item.name}-${id}`}
              key={item.name}
              onClick={() => setActive(item)} // open item pop up
              className="cursor-pointer"
            >
              {/*Sizes of items that are in the grid */}
              <motion.div layoutId={`image-${item.name}-${id}`}>
                <div className="rounded-xl h-50 w-50 flex items-center justify-center hover:scale-105">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="h-50 w-50 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};
export { ItemsPage };
