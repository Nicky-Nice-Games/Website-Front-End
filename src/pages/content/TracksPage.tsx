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
      className="min-h-[84vh] bg-size-[110%] bg-blend-multiply bg-size-[90%] md:bg-size-[80%]"
      style={{
        backgroundImage:
          "linear-gradient(rgb(101, 216, 255), rgb(77, 137, 215)), url('images/items-background-darkoutline.png')",
      }}
    >
      {/*This is the header and description of each item*/}
      <ContentNavigator currentPage="tracks" />
      <div className="flex flex-col-reverse md:flex-row md:w-[98%] m-auto md:py-3">
        <div className="text-center md:w-3/5 relative md:right-5">
          <div className="text-white h-full">
            <div
              className="flex flex-col justify-center
              md:rounded-r-xl md:min-h-1/5 py-5 lg:py-0
              bg-linear-to-b from-[#F66624] to-[#D84B3A]"
            >
              <h2 className="text-header2">{heading}</h2>
            </div>
            <div className="h-4/5 bg-linear-to-t from-[#F66624]/90 to-[#D84B3A]/90  rounded-b-2xl mx-3 md:mx-10 p-5 mb-6">
              <p className="text-lg md:text-2xl opacity-100">{description}</p>
            </div>
          </div>
        </div>
        <div className="md:w-2/5">
          <img
            src=" images/tracks-header.png"
            className="flex justify-self-center w-[80%] md:w-[60%] "
          ></img>
          <Carousel
            setApi={setApi}
            className="text-center rounded-3xl w-full m-auto"
          >
            <CarouselContent>
              {tracks.map((track) => {
                return (
                  <CarouselItem>
                    <div className="flex gap-4 flex-col w-[95%] h-[95%] mx-auto">
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
            <div className="flex flex-row justify-center mb-2">
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
