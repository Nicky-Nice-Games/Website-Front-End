import { useEffect, useState } from "react";
import { ContentNavigator } from "@/components/content/content-navigator";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { tracks } from "@/data/tracks";

//Tracks Page - Sub Page of Content
const TracksPage = () => {
  //different information used to create page
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

  //information of heading and track carasoul
  return (
    <div
      className="min-h-[80vh] bg-size-[110%] bg-blend-multiply"
      style={{
        backgroundImage:
          "linear-gradient(rgb(101, 216, 255), rgb(77, 137, 215)), url('images/items-background-darkoutline.png')",
      }}
    >
      {/*This is the header and description of each item*/}
      <ContentNavigator currentPage="tracks" />
      <div className="flex flex-col-reverse md:flex-row md:w-[98%] m-auto">
        <div className="text-center md:w-3/5 bg-linear-to-b from-[#F66624] to-[#D84B3A] mt-3 md:mt-0 md:bg-[url(images/rectangle-bg.png)] bg-size-[110%_140%]">
          <div className="text-white">
            <h1 className="mt-5 md:m-20 md:mb-10 md:max-w-[50%] lg:max-w-[60%] font-black text-3xl md:text-5xl">
              {heading}
            </h1>
            <p className="text-lg md:skew-x-[8deg] xl:skew-x-[24deg] slanted-text m-5 md:ml-[22%] 2xl:ml-[19%] md:mr-[22%] md:mb-18">
              {description}
            </p>
          </div>
        </div>
        <div className="md:w-2/5">
          <h2 className="poppins text-white text-center text-xl rounded-lg bg-gradient-to-r from-[#F66624] to-[#D84B3A] relative top-3 z-10 w-50 m-auto">
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
                        className="h-full w-full rounded-lg object-cover object-top border border-5 border-[#FF7938] shadow-lg"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/*This shows how many tracks you are on and what track is the current one*/}
            <div className="flex flex-row justify-center mt-2">
              <CarouselPrevious />
              <div className="text-center text-xl px-4">
                Track {current} of {count}
              </div>
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export { TracksPage };
