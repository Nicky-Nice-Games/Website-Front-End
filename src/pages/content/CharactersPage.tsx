import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ContentNavigator } from "@/components/content/content-navigator";
import { CloseIcon } from "@/components/content/close-icon";
import { characters } from "@/data/characters";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [api, setApi] = useState<CarouselApi>();
  const [center, setCenter] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCenter(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCenter(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main
      className="min-h-[80vh] bg-fixed bg-size-[90%] md:bg-size-[80%]
     bg-blend-multiply"
      style={{
        backgroundImage:
          "linear-gradient(rgb(60, 193, 87), rgb(57, 172, 153)), url('images/items-background-darkoutline.png')",
      }}
    >
      <ContentNavigator currentPage={"characters"} />

      <img
        src=" images/characters-banner.png"
        className="flex justify-self-left w-[60%] md:w-[60%] mb-[2rem] mt-[1rem]"
      ></img>

      {/*Header of characters page*/}
      <div className="px-8">
        {/* Character carousel */}
        <Carousel setApi={setApi} className="flex flex-row w-full items-center">
          <CarouselPrevious className="w-8" />
          <CarouselContent className="m-auto py-15 xl:py-22 flex flex-row content-center items-center justify-between">
            {characters.map((character, index) => (
              <CarouselItem className="md:basis-1/3 p-auto">
                <Dialog>
                  {/* Clickable carousel picture*/}
                  <DialogTrigger className="cursor-pointer hover:scale-105 w-full">
                    <div
                      className={`h-35 w-35 lg:h-55 lg:w-55 xl:h-75 xl:w-75 ${
                        index === center - 1 ? "scale-150" : ""
                      } m-auto`}
                    >
                      <img
                        src={character.imgUrl}
                        alt={character.name}
                        className={`
                            rounded-md
                            object-cover
                            m-auto
                            h-full
                            `}
                      />
                    </div>
                  </DialogTrigger>
                  {/* Fullscreen content popup*/}
                  <DialogContent
                    showCloseButton={false}
                    className="lg:max-w-240 bg-[#0000] border-none shadow-none"
                  >
                    <div
                      className="absolute -top-100 left-0 sm:left-25 
                    lg:-top-60 lg:left-0 w-70 lg:w-100 z-10"
                    >
                      <img
                        src={character.imgUrl}
                        alt={character.name}
                        className="lg:max-h-180"
                      />
                    </div>
                    <div className="absolute lg:-top-10 lg:right-5 w-full lg:w-4/5 flex bg-white justify-end rounded-lg drop-shadow-xl/50 overflow-hidden min-w-1/4 max-w-4xl sm:h-65git ">
                      {/* right side: character name and description */}
                      <DialogDescription className="p-4 w-full lg:min-h-70 flex flex-col justify-top text-left">
                        <div className="text-center lg:text-left lg:w-7/10 lg:ml-auto">
                          <div className="flex flex-row justify-between mb-2">
                            <DialogTitle className="text-black font-bold text-3xl justify-self-center lg:justify-self-start">
                              {character.name}
                            </DialogTitle>
                            <DialogClose>
                              <CloseIcon />
                            </DialogClose>
                          </div>
                          <p className="text-gray-600 text-lg whitespace-pre-line">
                            {character.description} <br />
                            Favorite Song:{" "}
                            <a
                              className="text-[#d97706]"
                              href={character.songLink}
                            >
                              {character.songName}
                            </a>
                          </p>
                        </div>
                      </DialogDescription>
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className="w-8" />
        </Carousel>
      </div>
    </main>
  );
};

export { CharactersPage };
