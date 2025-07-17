import { useId, useRef, useState, useEffect, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CloseIcon } from "@/components/content/close-icon";
import { type Item } from "@/data/items";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ItemCardProps {
  items: Item[];
  bgGradient: string;
  category: string;
}

export const ItemCard = memo(function ItemCard({
  items,
  bgGradient,
  category,
}: ItemCardProps) {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState<Item | null>(items[0]);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setIsActive(false));

  // Close on Escape key
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsActive(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when active
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);

  // Reset active item when items prop changes
  useEffect(() => {
    setActiveItem(items[0]);
  }, [items]);

  if (!items.length) return null;

  return (
    <>
      {/* Grid Card - Only show when not active */}
      {!isActive && (
        <motion.div layoutId={`item-${category}-${id}`}>
          <motion.div layoutId={`image-${category}-${id}`}>
            <div className="h-60 w-60 xl:h-80 xl:w-80 ">
              <img
                src={items[0].imgUrl}
                alt={items[0].name}
                className="h-60 w-60 xl:h-80 xl:w-80 object-contain hover:scale-105 transition-transform flex duration-200 rounded-full cursor-pointer"
                onClick={() => {
                  setIsActive(true);
                  setActiveItem(items[0]);
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Popup Overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-40"
          />
        )}
      </AnimatePresence>

      {/* Popup Content */}
      <AnimatePresence>
        {isActive && activeItem && (
          <div className="fixed inset-0 grid place-items-center z-50">
            <motion.div
              layoutId={`item-${category}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Header with gradient background */}
              <motion.div
                layoutId={`image-${category}-${id}`}
                className={`flex flex-col items-center bg-size-[100%_100%] p-2 bg-gradient-to-b ${bgGradient}`}
              >
                <motion.button
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="self-end rounded-full h-6 mt-1 mr-1"
                  onClick={() => setIsActive(false)}
                >
                  <CloseIcon />
                </motion.button>

                {/* Item Image */}
                <img
                  width={200}
                  height={200}
                  src={activeItem.imgUrl}
                  alt={activeItem.name}
                  className="w-72 h-72 object-contain"
                />

                {/* Level Tabs */}
                <Tabs defaultValue={activeItem.level.toString()}>
                  <TabsList className="bg-inherit">
                    {items.map((item) => (
                      <TabsTrigger
                        key={item.level}
                        value={item.level.toString()}
                        onClick={() => setActiveItem(item)}
                        className="outline-black pt-3"
                      >
                        Level {item.level}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </motion.div>

              {/* Item Info */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div className="w-full">
                    <motion.h3
                      layoutId={`title-${category}-${id}`}
                      className="bg-[url(images/arrow.png)] bg-size-[70%_100%] bg-center bg-no-repeat py-2 font-medium text-white dark:text-neutral-200 text-2xl mb-4 text-center"
                    >
                      {activeItem.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${category}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base text-center"
                    >
                      {activeItem.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
});
