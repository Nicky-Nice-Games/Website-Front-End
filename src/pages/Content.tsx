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
} from "@/components/ui/navigation-menu"

import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



const ContentPage = () => {

    return (<>
        <ContentNavigator currentPage="content" />
        <div className="flex flex-col-reverse md:grid md:grid-cols-2">
            <div>
                <h3 className="text-center text-4xl m-2 font-black">About the Location</h3>
                <p className="m-3">RIT was born of an unlikely institutional marriage of an influential cultural association, the Rochester Athenaeum, founded in 1829, and a technical training school, the Mechanics Institute, founded in 1885. The institute adopted the name Rochester Institute of Technology in 1944 and awarded its first bachelor of science degree in 1955. A 1961 decision to leave downtown Rochester for farmland in the suburban town of Henrietta put RIT on its path to pre-eminence as a global university. Today, the university’s reputation and reach go well beyond Rochester. We have partnerships on nearly every continent and overseas campuses located in China, Croatia, Dubai, and Kosovo.</p>
            </div>
            <img className="rounded-lg" src="images/content-assets/RIT.jpg"></img>
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
                        <button className={`p-1 m-1 font-bold ${characterButtonColor} rounded-sm text-lg`} onClick={() => {
                            const navigateRoute: string = props.currentPage === "characters" ? "/web/content" : "/web/characters";
                            navigate(navigateRoute);
                        }}>Characters</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className={`p-1 m-1 font-bold ${itemButtonColor} rounded-sm text-lg`} onClick={() => {
                            const navigateRoute: string = props.currentPage === "items" ? "/web/content" : "/web/items";
                            navigate(navigateRoute);
                        }}>Items</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className={`p-1 m-1 font-bold ${trackButtonColor} rounded-sm text-lg`} onClick={() => {
                            const navigateRoute: string = props.currentPage === "tracks" ? "/web/content" : "/web/tracks";
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

    // sample list of items to display
    const items = [
        { imgUrl: "images/content-assets/booster.png", name: "Boost", description: "Slightly adds to player’s velocity to simulate increase in speed for short duration" },
        { imgUrl: "images/content-assets/item_box.png", name: "Fake Item Box", description: "Same size as item box, looks significantly different. Stuns kart when they drive into it" },
        { imgUrl: "images/content-assets/puck.png", name: "Puck", description: "Projectile that shoots forward from player’s current facing direction and bounces off walls up to three times. Slows opposing players down when hit by it." },
        { imgUrl: "images/content-assets/spill.png", name: "Spill", description: "Sent behind the user and remains on the ground" },
        { imgUrl: "images/content-assets/booster-upg.png", name: "Upgraded Boost", description: "Higher speed increase that adds to player’s velocity to simulate increase in speed for short duration" },
        { imgUrl: "images/content-assets/item_box-upg.png", name: "Upgraded Fake Item Box", description: "Similar color/design to real item box, Still stuns kart when they drive into it" },
        { imgUrl: "images/content-assets/puck-upg.png", name: "Upgraded Puck", description: "Projectiles that shoots forward from player’s current facing direction and bounces off walls up to three times. Slows opposing players down when hit by it. Player releases 3 pucks instead of one when upgraded" },
        { imgUrl: "images/content-assets/spill-upg.png", name: "Upgraded Spill", description: "Sent behind the user and remains on the ground, larger surface area when upgraded" },
    ];

    return (
        <>
            <ContentNavigator currentPage={"items"} />
            <div className="px-8 min-h-screen">
                <main className="px-8">
                    <h2 className=" /* Default CSS */ text-black text-2xl sm:text-3xl md:text-4xl 
                lg:text-5xl xl:text-6xl text-center sm:text-left px-4 sm:px-8 md:px-12">
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
                                            className="w-60 h-64 object-contain"
                                        />
                                    </motion.div>

                                    <div className="p-4">
                                        <div className="flex justify-between items-start">
                                            <div className="w-full">
                                                <motion.h3
                                                    layoutId={`title-${active.name}-${id}`}
                                                    className="font-medium text-neutral-700 dark:text-neutral-200 text-2xl mb-4 text-center"
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
                    <div className="grid grid-cols-3 grid place-items-center gap-4 p-4 mx-auto max-w-6xl lg:grid-cols-4 md:grid-cols-4 ">
                        {items.map((item) => (
                            <motion.div
                                layoutId={`item-${item.name}-${id}`}
                                key={item.name}
                                onClick={() => setActive(item)} // open item pop up
                                className="cursor-pointer"
                            >
                                <motion.div layoutId={`image-${item.name}-${id}`}>
                                    <div className=" rounded-xl h-50 w-50 flex items-center justify-center hover:scale-105 transition-transform">
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
            imgUrl: "images/content-assets/HkySr.png",
            name: "Hockey Senior",
            description:
                "This is a senior",
        },
        {
            imgUrl: "images/content-assets/OLjr.png",
            name: "Orienation Leader Junior",
            description:
                "This is OL Junior",
        },
        {
            imgUrl: "images/content-assets/SophDining.png",
            name: "Dining Worker Sophmore",
            description:
                "This is a working sophmore",
        },
        {
            imgUrl: "images/content-assets/FrshSkater.PNG",
            name: "Freshman Skater",
            description:
                "Freshman Skater is so cool",
        },
        {
            imgUrl: "images/content-assets/Jamster.png",
            name: "Jamster",
            description:
                "Jamster the vibe",
        },
    ];

    return (
        <>
            <ContentNavigator currentPage={"characters"} />
            <div className="px-8">
                <h2 className=" 
                 text-black text-2xl sm:text-3xl  /* default on mobile */
                 md:text-4xl /* default on small screens */
                lg:text-5xl xl:text-6xl text-center sm:text-left px-4 sm:px-8 md:px-12 /* default on desktop */
                ">
                    Characters Page
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
                                className="flex bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl"
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
                <div className="
                    grid grid-cols-2 gap-4 items-center justify-center p-8 /* default on mobile */
                    lg:grid-cols-5 /* default on computer screens */
                    ">
                    {characters.map((character) => (
                        <motion.div
                            layoutId={`character-${character.name}-${id}`}
                            key={character.name}
                            onClick={() => setActive(character)}
                            className="cursor-pointer hover:scale-105 transition-transform"
                        >
                            <motion.div layoutId={`image-${character.name}-${id}`}>

                                <img
                                    src={character.imgUrl}
                                    alt={character.name}
                                    className="
                            h-40 w-40         /* default on mobile */
                            sm:h-56 sm:w-56   /* a bit bigger on small screens */
                            lg:h-90 lg:w-90   /* default on computer screens */
                            rounded-md
                            object-cover
                            "
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
        imgUrl: "images/content-assets/shed.png",
        name: "The Shed",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat."
    },
    {
        imgUrl: "images/content-assets/QrterMile.png",
        name: "Quarter Mile",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat."
    },
    {
        imgUrl: "images/content-assets/OuterLoop.png",
        name: "RIT Outer Loop",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat."
    }
]

const TracksPage = () => {
    const [active, setActive] = useState<(typeof tracks)[number] | boolean | null>(
        null
    );
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [heading, setHeading] = useState("Tracks");
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

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api]);

    useEffect(() => {
        const currentTrack = current > 0 ? current - 1 : current;
        setHeading(tracks[currentTrack].name);
    }, [current])

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <ContentNavigator currentPage="tracks" />
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
                            className="w-19/20 h-fit md:max-h-[90%] flex flex-col-reverse md:flex-row bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
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
                                    className=" w-full rounded-tr-lg rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>


                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className="mb-10">
                <h2 className="text-white text-center text-xl rounded-lg bg-[#7C878E] relative top-4 z-10 w-50 m-auto">{heading}</h2>
                <Carousel setApi={setApi} className="text-center border-solid border-slate-400 border-8 rounded-3xl w-60 sm:w-120 md:w-180 m-auto">
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
                <div className="text-center text-xl">
                    Track {current} of {count}
                </div>
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