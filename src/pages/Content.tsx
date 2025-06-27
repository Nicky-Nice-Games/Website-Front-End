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
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ContentPage = () => {
  return (
    <>
      <ContentNavigator currentPage="content" />
      <div className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div>
          <h3 className="text-center text-4xl m-2 font-black">
            About the Location
          </h3>
          <p className="m-3">
            RIT was born of an unlikely institutional marriage of an influential
            cultural association, the Rochester Athenaeum, founded in 1829, and
            a technical training school, the Mechanics Institute, founded in
            1885. The institute adopted the name Rochester Institute of
            Technology in 1944 and awarded its first bachelor of science degree
            in 1955. A 1961 decision to leave downtown Rochester for farmland in
            the suburban town of Henrietta put RIT on its path to pre-eminence
            as a global university. Today, the university’s reputation and reach
            go well beyond Rochester. We have partnerships on nearly every
            continent and overseas campuses located in China, Croatia, Dubai,
            and Kosovo.
          </p>
        </div>
        <img
          className="rounded-lg w-[97%] m-auto"
          src="images/content-assets/RIT.jpg"
        ></img>
      </div>
    </>
  );
};

interface ContentNavigatorProps {
  currentPage: string;
}

const ContentNavigator = (props: ContentNavigatorProps) => {
  const navigate = useNavigate();

  const characterButtonColor =
    props.currentPage === "characters"
      ? "bg-[#F76902] hover:bg-white"
      : "hover:bg-[#F76902]";
  const itemButtonColor =
    props.currentPage === "items"
      ? "bg-[#F76902] hover:bg-white"
      : "hover:bg-[#F76902]";
  const trackButtonColor =
    props.currentPage === "tracks"
      ? "bg-[#F76902] hover:bg-white"
      : "hover:bg-[#F76902]";

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <button
              className={`p-1 m-1 font-bold ${characterButtonColor} rounded-sm text-lg`}
              onClick={() => {
                const navigateRoute: string =
                  props.currentPage === "characters"
                    ? "/content"
                    : "/characters";
                navigate(navigateRoute);
              }}
            >
              Characters
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              className={`p-1 m-1 font-bold ${itemButtonColor} rounded-sm text-lg`}
              onClick={() => {
                const navigateRoute: string =
                  props.currentPage === "items" ? "/content" : "/items";
                navigate(navigateRoute);
              }}
            >
              Items
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              className={`p-1 m-1 font-bold ${trackButtonColor} rounded-sm text-lg`}
              onClick={() => {
                const navigateRoute: string =
                  props.currentPage === "tracks" ? "/content" : "/tracks";
                navigate(navigateRoute);
              }}
            >
              Tracks
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

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
    {
      imgUrl: "images/content-assets/rocket_boost.png",
      name: "Rocket Boost",
      description:
        "increase your speed by 100% for 3 seconds",
    },
    {
      imgUrl: "images/content-assets/double_rocket_boost.png",
      name: "Double Rocket Boost",
      description:
        "increase your speed by 200% for 3 seconds",
    },
    {
      imgUrl: "images/content-assets/flying_rocket_boost.png",
      name: "",
      description:
        "increase your speed by 300% for 3 seconds, lifts character up in the air",
    },
    {
      imgUrl: "images/content-assets/warp_boost.png",
      name: "Upgraded Boost",
      description:
        "jump through a warp portal and move your kart up 3 map checkpoints",
    },
        {
      imgUrl: "images/content-assets/4_sec_shield.png",
      name: "4 Second Shield",
      description:
        "Become invulnerable for 4 seconds",
    },
            {
      imgUrl: "images/content-assets/6_sec_shield.png",
      name: "6 Second Shield",
      description:
        "Become invulnerable for 6 seconds",
    },
            {
      imgUrl: "images/content-assets/8_sec_shield.png",
      name: "8 Second Shield",
      description:
        "Become invulnerable for 8 seconds",
    },
            {
      imgUrl: "images/content-assets/10_sec_shield.png",
      name: "10 Second Shield",
      description:
        "Become invulnerable for 10 seconds",
    },
            {
      imgUrl: "images/content-assets/puck.png",
      name: "Puck",
      description:
        "A tier one (base) level offensive projective, If player is hit with a puck, they are slowed down",
    },
            {
      imgUrl: "images/content-assets/puck_upgraded.png",
      name: "Homing Spikey Puck",
      description:
        "A tier two level offensive projective, Will auto go to next player ahead and hit them",
    },
            {
      imgUrl: "images/content-assets/triple_homing_puck.png",
      name: "Triple Homing Pucks",
      description:
        "A tier three level offensive projective, will use three pucks with the same features of Homing Spikey Puck",
    },
            {
      imgUrl: "images/content-assets/flying_puck.png",
      name: "Flying Puck",
      description:
        "A level four (Final/Max) offensive projective, will go attack the player in first",
    },
         {
      imgUrl: "images/content-assets/spill.png",
      name: "Spill",
      description:
        "When Placed down if a player goes over it, slips on the oil and is slowed down",
    },     {
      imgUrl: "images/content-assets/cracked_brick-wall.png",
      name: "Cracked Brick Wall",
      description:
        "TBD",
    },     {
      imgUrl: "images/content-assets/spill_upgraded.png",
      name: "Confused Ritchie",
      description:
        "Reverses control if drove into",
    },     {
      imgUrl: "images/content-assets/fake_item_box.png",
      name: "Fake Power Up Block",
      description:
        "Mimics a normal power up block but causes stun/slow down",
    },
  ];

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
                <motion.div
                  layoutId={`image-${active.name}-${id}`}
                  className="flex justify-center bg-[url(images/card-background.png)] p-8"
                >
                  <img
                    width={200}
                    height={200}
                    src={active.imgUrl}
                    alt={active.name}
                    className="w-60 h-64 object-contain"
                  />
                </motion.div>

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

const CharactersPage = () => {
  // track which character is currently expanded or false/null if none
  const [active, setActive] = useState<
    { name: string; description: string; imgUrl: string; songName: String; songLink: string } | boolean | null
  >(null);
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
      description: `Name: Kai (They/Them)
      Major: Business
      Likes: Hockey, Bandanas, Going On Adventures, Being Team Captain
      Dislikes: Sitting around, Losing a game`,
      songName:
        `Eye of the Tiger - Survivor`,
      songLink: "https://www.youtube.com/watch?v=btPJPFnesV4&list=RDbtPJPFnesV4&start_radio=1"
    },
    {
      imgUrl: "images/content-assets/OLjr.png",
      name: "Orientation Leader Junior",
      description: `Name: Emma (She/Her)
      Major: Game Design and Development
      Likes: Pins, Walking, Early Morning Walks, Bucket Hats
      Dislikes: Loud Music, Sleeping In`,
      songName: "Turbo Hustle - DJ Maestro",
      songLink: "https://www.youtube.com/watch?v=LGpaGI99Xl0&list=RDLGpaGI99Xl0&start_radio=1"
    },
    {
      imgUrl: "images/content-assets/SophDining.png",
      name: "Dining Worker Sophmore",
      description: `Name: Reese (He/Him)
      Major: Packaging Science
      Likes: Free Stuff, Creating Playlists For Events, Anime, Energy Drinks
      Dislikes: Working 3 Jobs, Sleep`,
      songName: "Feel Good Inc. - Gorillaz",
      songLink: "https://www.youtube.com/watch?v=HyHNuVaZJ-k",
    },
    {
      imgUrl: "images/content-assets/FrshSkater.PNG",
      name: "Freshman Skater",
      description: `Name: Morgan (She/They)
      Major: Photography
      Likes: Skating, Thrifting Clothes, Going Fast, Finding Spots
      Dislikes: Waking Up For Class`,
      songName: "Skater Boi - Avril Lavigne",
      songLink: "https://www.youtube.com/watch?v=TIy3n2b7V9k",
    },
    {
      imgUrl: "images/content-assets/Jamster.png",
      name: "Jamster",
      description: `Name: Jamster (They/Them)
      Major: All
      Likes: Gaming, Jamming, Running Around
      Dislikes: Not Getting Snacks`,
      songName: "Hamster Dance -  Hampton and the Hamsters",
      songLink: "https://www.youtube.com/watch?v=p3G5IXn0K7A",
    },
  ];

  return (
    <>
      <ContentNavigator currentPage={"characters"} />
      <div className="px-8">
        <h2
          className=" 
                 text-black text-2xl sm:text-3xl  /* default on mobile */
                 md:text-4xl /* default on small screens */
                lg:text-5xl xl:text-6xl text-center sm:text-left px-4 sm:px-8 md:px-12 /* default on desktop */
                "
        >
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
                <motion.div
                  layoutId={`image-${active.name}-${id}`}
                  className="w-1/3"
                >
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
                    className="text-gray-600 text-lg whitespace-pre-line"
                  >
                    {active.description} <motion.br />
                    Favorite Song: <motion.a href={active.songLink}>{active.songName}</motion.a>
                  </motion.p>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* grid of character pop ups */}
        <div
          className="
                    grid grid-cols-2 gap-4 items-center justify-center p-8 /* default on mobile */
                    lg:grid-cols-5 /* default on computer screens */
                    "
        >
          {characters.map((character) => (
            <motion.div
              layoutId={`character-${character.name}-${id}`}
              key={character.name}
              onClick={() => setActive(character)}
              className="cursor-pointer hover:scale-105"
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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgUrl: "images/content-assets/QrterMile.png",
    name: "Quarter Mile",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat.",
  },
  {
    imgUrl: "images/content-assets/OuterLoop.png",
    name: "RIT Outer Loop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat.",
  },
];

const TracksPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [heading, setHeading] = useState("Tracks");
  const [description, setDescription] = useState("...");

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const currentTrack = current > 0 ? current - 1 : current;
    setHeading(tracks[currentTrack].name);
    setDescription(tracks[currentTrack].description);
  }, [current]);

  return (
    <>
      <ContentNavigator currentPage="tracks" />
      <div className="h-full flex flex-col-reverse md:flex-row">
        <div className="text-center md:w-3/5 bg-linear-to-b from-[#F66624] to-[#D84B3A] md:bg-[url(images/rectangle-bg.png)] bg-size-[110%_140%]">
          <div className="text-white">
            <h1 className="md:m-20 md:mb-10 md:max-w-[50%] lg:max-w-[60%] font-black text-5xl">
              {heading}
            </h1>
            <p className="text-center text-lg md:skew-x-[8deg] xl:skew-x-[24deg] slanted-text m-5 md:ml-[19%] md:mr-[22%] md:mb-20">
              {description}
            </p>
          </div>
        </div>
        <div className="mb-10 md:w-2/5">
          <h2 className="text-white text-center text-xl rounded-lg bg-gradient-to-r from-[#F66624] to-[#D84B3A] relative top-4 z-10 w-50 m-auto">
            Tracks
          </h2>
          <Carousel
            setApi={setApi}
            className="text-center rounded-3xl w-full m-auto"
          >
            <CarouselContent>
              {tracks.map((track) => {
                return (
                  <CarouselItem>
                    <div className="flex gap-4 flex-col w-[95%] h-[95%] my-4 mx-auto">
                      <img
                        width={100}
                        height={200}
                        src={track.imgUrl}
                        alt={track.name}
                        className="h-full w-full rounded-lg object-cover object-top"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex flex-row justify-center">
              <CarouselPrevious />
              <div className="text-center text-xl px-4">
                Track {current} of {count}
              </div>
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

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

export { ContentPage, CharactersPage, ItemsPage, TracksPage };
