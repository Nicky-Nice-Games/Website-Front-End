import { ContentNavigator } from "@/components/content/content-navigator";
import CharacterCarousel from "@/components/character-carousel";
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { CloseIcon } from "@/components/content/close-icon";

const CharactersPage = () => {
  return (
    <main
      className="min-h-[80vh] bg-fixed bg-size-[90%] md:bg-size-[80%]
     bg-[#BBB] bg-blend-difference"
      style={{
        backgroundImage:
          "url('images/items-background.png')",
      }}
    >
      <ContentNavigator currentPage={"characters"} />

      <img
        src=" images/characters-banner.png"
        className="flex justify-self-center w-[40%] md:w-[40%] mb-[5px] mt-[5px]"
      ></img>

      <h1 className="text-center poppins text-md text-[#fffbee]">
        Click a character to learn more about them!
      </h1>

      {/*Header of characters page*/}
      <div className="px-8">
        {/* Character carousel */}
        <CharacterCarousel
          contentClass="lg:max-w-240 bg-[#0000] border-none shadow-none"
          mappedContent={(character) => {
            return (
              <>
                <div
                  className="absolute -top-85 left-1/2 transform -translate-x-1/2 lg:-translate-x-0
                    lg:-top-60 lg:left-0 min-w-60 lg:w-100 z-10"
                >
                  <img
                    src={character.imgUrl}
                    alt={character.name}
                    className="max-h-90 lg:max-h-180"
                  />
                </div>
                <div className="absolute lg:-top-10 lg:right-5 w-full lg:w-4/5 flex bg-white justify-end rounded-lg drop-shadow-xl/50 overflow-hidden min-w-1/4 max-w-4xl sm:h-65git ">
                  {/* right side: character name and description */}
                  <DialogDescription className="p-4 w-full lg:min-h-70 text-left">
                    <div className="text-center lg:text-left lg:w-7/10 lg:ml-auto h-full">
                      <div className="flex flex-row justify-between mb-2">
                        <DialogTitle className="text-black font-bold text-3xl justify-self-center lg:justify-self-start">
                          {character.name}
                        </DialogTitle>
                        <DialogClose>
                          <CloseIcon />
                        </DialogClose>
                      </div>
                      <p className="text-gray-600 text-lg whitespace-pre-line h-[85%] flex flex-col justify-center">
                        {character.description}
                      </p>
                    </div>
                  </DialogDescription>
                </div>
              </>
            );
          }}
        />
      </div>
    </main>
  );
};

export { CharactersPage };
