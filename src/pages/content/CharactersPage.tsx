import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ContentNavigator } from "@/components/content/content-navigator";
import { CloseIcon } from "@/components/content/close-icon";
import { characters } from "@/data/characters";

const CharactersPage = () => {
  // track which character is currently expanded or false/null if none
  const [active, setActive] = useState<
    | {
        name: string;
        description: string;
        imgUrl: string;
        songName: String;
        songLink: string;
      }
    | boolean
    | null
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

  return (
    <main className="bg-no-repeat bg-cover 
    bg-fixed bg-center bg-[url('images/light-items-background.png')]">
      <ContentNavigator currentPage={"characters"} />

      <img src=" images/characters-banner.png"
          className='flex justify-self-left w-[100%] md:w-[40%] mb-[2rem] mt-[1rem]'>
      </img>

      {/*Header of characters page*/}
       <div className="px-8">
        {/*
        <h2
          className=" 
                 text-black text-2xl sm:text-3xl  
                 md:text-4xl 
                lg:text-5xl xl:text-6xl text-center sm:text-left px-4 sm:px-8 md:px-12 
        >
          Characters
        </h2> */}
        
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
              <motion.div
                layoutId={`character-${active.name}-${id}`}
                ref={ref} // ref used for outside click detection
                className="flex bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl"
              >
                {/* left side: character image */}
                <motion.div
                  layoutId={`image-${active.name}-${id}`}
                  className="w-1/2"
                >
                  <img
                    src={active.imgUrl}
                    alt={active.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* right side: character name and description */}
                <div className="p-8 w-9/10 lg:min-h-70 flex flex-col justify-top text-left">
                  <div className="flex flex-row justify-between">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`} // pop up animation name
                      className="text-4xl font-bold mb-4"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.button
                      key={`button-${active.name}-${id}`}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.05 } }}
                      className="flex relative bottom-4 left-4 items-center justify-center bg-white rounded-full h-8 w-8"
                      onClick={() => setActive(null)} // close pop up
                    >
                      <CloseIcon /> {/* close icon */}
                    </motion.button>
                  </div>

                  <motion.p
                    layoutId={`description-${active.description}-${id}`} // pop up animation description
                    className="text-gray-600 text-lg whitespace-pre-line"
                  >
                    {active.description} <motion.br />
                    Favorite Song:{" "}
                    <motion.a className = "text-[#d97706]" href={active.songLink}>
                      {active.songName}
                    </motion.a>
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
                    lg:grid-cols-6 /* default on computer screens */
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
    </main>
  );
};

export { CharactersPage };
