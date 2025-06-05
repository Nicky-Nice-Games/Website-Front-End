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
        <ContentNavigator />
        <div className="grid grid-cols-2">
            <div>
                <h3 className="text-center text-4xl m-2 font-black">About the Location</h3>
                <p className="m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit porro quaerat deserunt! Fuga veritatis porro quo ipsum aperiam, laboriosam, exercitationem quas eveniet magnam quae ex dicta iure. Quo, deleniti sint? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sint quia temporibus odit et architecto? Excepturi corrupti architecto eos repellat, eligendi eum, iste inventore, reprehenderit ratione harum porro ut dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Labore nobis tempora, minus accusamus assumenda doloremque fuga, neque vero consectetur at temporibus praesentium minima mollitia perferendis officia sit deleniti!</p>
            </div>
            <img className="" src="images/landscape-placeholder.svg"></img>
        </div>

    </>)
}

const ContentNavigator = () => {
    const navigate = useNavigate();

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <button className="p-1 m-1 font-bold hover:bg-[#F76902] rounded-sm text-lg" onClick={() => navigate("/characters")}>Characters</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className="p-1 m-1 font-bold hover:bg-[#F76902] rounded-sm text-lg" onClick={() => navigate("/items")}>Items</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className="p-1 m-1 font-bold hover:bg-[#F76902] rounded-sm text-lg" onClick={() => navigate("/tracks")}>Tracks</button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}

const ItemsPage = () => {
    return (
        <>
            <ContentNavigator />
           <div className="px-8">
  <h2 className="text-black text-3xl ml-8">Items Page</h2>
   
  <div className="grid grid-cols-6 gap-4 p-8 mx-auto max-w-6xl">
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>

    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
  </div>
</div>
 
        </>
    );
}

const CharactersPage = () => {
    return (
        <>
            <ContentNavigator />
            <h2 className="font-black">Character Page</h2>
        </>
    );
}

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
            <ContentNavigator />
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
                    <div className="fixed inset-0  grid place-items-center z-[100]">
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
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.name}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.imgUrl}
                                    alt={active.name}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.name}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
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
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                    </motion.div>
                                </div>
                            </div>
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