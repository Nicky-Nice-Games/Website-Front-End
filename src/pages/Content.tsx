import { useNavigate } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

//import ItemsPage from './Items';
// import CharactersPage from './Characters';
// import TracksPage from './Tracks';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "../components/ui/navigation-menu"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import PlaceholderImg from "../../public/images/pfp-placeholder.png"
const ContentPage = () => {
    return (<>
        <ContentNavigator currentPage="content"/>
        <div className="grid grid-cols-2">
            <div>
                <h3 className="text-center text-4xl m-2 font-black">About the Location</h3>
                <p className="m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit porro quaerat deserunt! Fuga veritatis porro quo ipsum aperiam, laboriosam, exercitationem quas eveniet magnam quae ex dicta iure. Quo, deleniti sint? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sint quia temporibus odit et architecto? Excepturi corrupti architecto eos repellat, eligendi eum, iste inventore, reprehenderit ratione harum porro ut dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Labore nobis tempora, minus accusamus assumenda doloremque fuga, neque vero consectetur at temporibus praesentium minima mollitia perferendis officia sit deleniti!</p>
            </div>
            <img className="" src="images/landscape-placeholder.svg"></img>
        </div>

    </>)
}

interface ContentNavigatorProps {
    currentPage: string
}

const ContentNavigator = (props: ContentNavigatorProps) => {
    const navigate = useNavigate();    
    
    const characterButtonColor = props.currentPage === "characters" ? "bg-[#F76902] hover:bg-white" : "hover:bg-[#F76902]"
    const itemButtonColor = props.currentPage === "items" ? "bg-[#F76902] hover:bg-white" : "hover:bg-[#F76902]"
    const trackButtonColor = props.currentPage === "tracks" ? "bg-[#F76902] hover:bg-white" : "hover:bg-[#F76902]"

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <button className={`p-1 m-1 font-bold ${characterButtonColor} rounded-sm text-lg cursor-pointer`} onClick={() => {
                            const navigateRoute: string = props.currentPage === "characters" ? "/content" : "/characters";
                            navigate(navigateRoute);
                            }}>Characters</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className={`p-1 m-1 font-bold ${itemButtonColor} rounded-sm text-lg cursor-pointer`} onClick={() => {
                            const navigateRoute: string = props.currentPage === "items" ? "/content" : "/items";
                            navigate(navigateRoute);
                            }}>Items</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className={`p-1 m-1 font-bold ${trackButtonColor} rounded-sm text-lg cursor-pointer`} onClick={() => {
                            const navigateRoute: string = props.currentPage === "tracks" ? "/content" : "/tracks";
                            navigate(navigateRoute);
                            }}>Tracks</button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}

const ItemsPage = () => {
  // state for tracking which item is active (expanded) or not
  const [active, setActive] = useState<
    { name: string; description: string; imgUrl: string } | boolean | null
  >(null);
  const id = useId(); // unique ID for layout animations
  const ref = useRef<HTMLDivElement>(null); // ref for detecting outside clicks

  useEffect(() => {
    // close modal on Escape key
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    // lock body scroll when modal is open
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

  // sample list of items to display
  const items = [
    { imgUrl: PlaceholderImg, name: "Item 1", description: "Description for Item 1" },
    { imgUrl: PlaceholderImg, name: "Item 2", description: "Description for Item 2" },
    { imgUrl: PlaceholderImg, name: "Item 3", description: "Description for Item 3" },
    { imgUrl: PlaceholderImg, name: "Item 4", description: "Description for Item 4" },
    { imgUrl: PlaceholderImg, name: "Item 5", description: "Description for Item 5" },
    { imgUrl: PlaceholderImg, name: "Item 6", description: "Description for Item 6" },
    { imgUrl: PlaceholderImg, name: "Item 7", description: "Description for Item 7" },
    { imgUrl: PlaceholderImg, name: "Item 8", description: "Description for Item 8" },
    { imgUrl: PlaceholderImg, name: "Item 9", description: "Description for Item 9" },
    { imgUrl: PlaceholderImg, name: "Item 10", description: "Description for Item 10" },
    { imgUrl: PlaceholderImg, name: "Item 11", description: "Description for Item 11" },
    { imgUrl: PlaceholderImg, name: "Item 12", description: "Description for Item 12" },
  ];

  return (
    <>
      <ContentNavigator currentPage={"items"} />
      <div className="px-8">
        <h2 className="text-black text-3xl ml-8">Items Page</h2>

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
              <motion.button
                key={`button-${active.name}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon /> {/* close icon pop up*/}
              </motion.button>
              <motion.div
                layoutId={`item-${active.name}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.name}-${id}`} className="flex justify-center bg-gray-100 p-8">
                  <img
                    width={200}
                    height={200}
                    src={active.imgUrl}
                    alt={active.name}
                    className="w-48 h-48 object-contain"
                  />
                </motion.div>

                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        className="font-medium text-neutral-700 dark:text-neutral-200 text-2xl mb-4"
                      >
                        {active.name}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-base"
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
        <div className="grid grid-cols-6 gap-4 p-8 mx-auto max-w-6xl">
          {items.map((item) => (
            <motion.div
              layoutId={`item-${item.name}-${id}`}
              key={item.name}
              onClick={() => setActive(item)} // open item pop up
              className="cursor-pointer"
            >
              <motion.div layoutId={`image-${item.name}-${id}`}>
                <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center hover:scale-105 transition-transform">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

const CharactersPage = () => {
    // track which character is currently expanded or false/null if none
    const [active, setActive] = useState<{ name: string; description: string; imgUrl: string } | boolean | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null); // ref to detect clicks outside pop up

    useEffect(() => {
        // close modal when Escape is pressed
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        // lock page scroll if a character pop up is open
        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    // close pop up when clicking outside of it
    useOutsideClick(ref, () => setActive(null));

    // sample list of characters to display
    const characters = [
        {
            imgUrl: PlaceholderImg,
            name: "Character 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat.",
        },
        {
            imgUrl: PlaceholderImg,
            name: "Character 2",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat.",
        },
        {
            imgUrl: PlaceholderImg,
            name: "Character 3",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat.",
        },
        {
            imgUrl: PlaceholderImg,
            name: "Character 4",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat.",
        },
    ];

    return (
        <>
            <ContentNavigator currentPage={"characters"} />
            <div className="px-8">
                <h2 className="text-black text-3xl ml-8 mb-8">Characters Page</h2>

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

                {/* expanded character pop up */}
                <AnimatePresence>
                    {active && typeof active === "object" ? (
                        <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                            <motion.button
                                key={`button-${active.name}-${id}`}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 shadow-md"
                                onClick={() => setActive(null)} // close pop up
                            >
                                <CloseIcon /> {/* close icon */}
                            </motion.button>

                            <motion.div
                                layoutId={`character-${active.name}-${id}`}
                                ref={ref} // ref used for outside click detection
                                className="flex bg-white rounded-lg shadow-xl overflow-hidden w-4/5"
                            >
                                {/* left side: character image */}
                                <motion.div layoutId={`image-${active.name}-${id}`} className="flex-shrink-0 w-1/3">
                                    <img
                                        src={active.imgUrl}
                                        alt={active.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                {/* right side: character name and description */}
                                <div className="p-8 flex flex-col justify-top text-left">
                                    <motion.h3
                                        layoutId={`title-${active.name}-${id}`} // pop up animation name
                                        className="text-4xl font-bold mb-4"
                                    >
                                        {active.name}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`} // pop up animation description
                                        className="text-gray-600 text-lg"
                                    >
                                        {active.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    ) : null}
                </AnimatePresence>

                {/* grid of character pop ups */}
                <div className="grid grid-cols-4 gap-4 border border-2 border-black items-center justify-center p-8">
                    {characters.map((character) => (
                        <motion.div
                            layoutId={`character-${character.name}-${id}`}
                            key={character.name}
                            onClick={() => setActive(character)} // open character pop up
                            className="cursor-pointer hover:scale-105 transition-transform"
                        >
                            <motion.div layoutId={`image-${character.name}-${id}`}>
                                <img
                                    src={character.imgUrl}
                                    alt={character.name}
                                    className="h-90 w-90 rounded-md object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

interface Track {
    imgUrl: string;
    name: string;
    description: string;
}

const tracks: Array<Track> = [
    {
        imgUrl: "images/placeholder.PNG",
        name: "Sample Track",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat."
    },
    {
        imgUrl: "images/placeholder.PNG",
        name: "Sample Track 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat."
    },
    {
        imgUrl: "images/placeholder.PNG",
        name: "Sample Track 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat."
    }
]

const TracksPage = () => {
    const [active, setActive] = useState<(typeof tracks)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <ContentNavigator currentPage="tracks"/>
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
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.name}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`track-${active.name}-${id}`}
                            ref={ref}
                            className="h-full md:h-fit md:max-h-[90%] flex flex-row bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.name}-${id}`}
                                            className="font-black text-center text-2xl text-neutral-700 dark:text-neutral-200 mb-5"
                                        >
                                            {active.name}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base max-h-60 overflow-y-scroll"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                            <motion.div layoutId={`image-${active.name}-${id}`} className="min-w-4/10">
                                <img
                                    src={active.imgUrl}
                                    alt={active.name}
                                    className="w-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className="mb-10">
                <h2 className="text-white text-center text-xl rounded-lg bg-[#7C878E] relative top-4 z-10 w-50 m-auto">Tracks</h2>
                <Carousel className="text-center border-solid border-slate-400 border-8 rounded-3xl w-180 m-auto">
                    <CarouselContent>
                        {tracks.map(track => {
                            return <CarouselItem>
                                    <motion.div
                                        layoutId={`track-${track.name}-${id}`}
                                        key={track.name}
                                        onClick={() => setActive(track)}
                                        className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                                    >
                                        <div className="flex gap-4 flex-col w-full h-full">
                                            <motion.div layoutId={`image-${track.name}-${id}`}>
                                                <img
                                                    width={100}
                                                    height={200}
                                                    src={track.imgUrl}
                                                    alt={track.name}
                                                    className="h-full w-full rounded-lg object-cover object-top"
                                                />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                            </CarouselItem>
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </>
    );
}

const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

export {
    ContentPage,
    CharactersPage,
    ItemsPage,
    TracksPage
}