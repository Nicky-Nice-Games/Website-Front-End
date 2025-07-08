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

//Track Interface with needed information
interface Track {
  imgUrl: string;
  name: string;
  description: string;
}

//Tracks Page - Sub Page of Content
const TracksPage = () => {
  //different information used to create page
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [heading, setHeading] = useState("Tracks");
  const [description, setDescription] = useState("...");
  const tracks: Array<Track> = [
    {
      imgUrl: "images/tracks/OuterLoop.png",
      name: "Outer Loop",
      description:
        "This Outer Loop is around RIT campus, you may have driven around here as if you drive on campus this loops is used very often, if you are ready to finally be able to ignore the stop signs and be ready to rev your engine and speed.",
    },
    {
      imgUrl: "images/tracks/kingramses.jpg",
      name: "Golisano Hall",
      description:
        "Have you ever wanted to go around golisano, well you can now. going past classrooms, up and down the floors.",
    },
    {
      imgUrl: "images/tracks/dorm.png",
      name: "Dorm",
      description:
        "Remember the days you used to live in the dorm? well if you wanna relive it with a better memory you can, speed around the dorm in tiny karts. if you still live in the dormside or will be living there be ready to live this experience and dont forget to clean your room otherwise little characters might drive around it.",
    },
    {
      imgUrl: "images/tracks/kingramses.jpg",
      name: "Finals Brick Road",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat.",
    },
  ];
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
    <>
      {/*This is the header and description of each item*/}
      <ContentNavigator currentPage="tracks" />
      <div className="flex flex-col-reverse md:flex-row md:w-[98%] m-auto">
        <div className="text-center md:w-3/5 bg-linear-to-b from-[#F66624] to-[#D84B3A] md:bg-[url(images/rectangle-bg.png)] bg-size-[110%_140%]">
          <div className="text-white">
            <h1 className="mt-5 md:m-20 md:mb-10 md:max-w-[50%] lg:max-w-[60%] font-black text-5xl">
              {heading}
            </h1>
            <p className="text-lg md:skew-x-[8deg] xl:skew-x-[24deg] slanted-text m-5 md:ml-[22%] 2xl:ml-[19%] md:mr-[22%] md:mb-18">
              {description}
            </p>
          </div>
        </div>
        <div className="md:w-2/5">
          <h2 className="text-white text-center text-xl rounded-lg bg-gradient-to-r from-[#F66624] to-[#D84B3A] relative top-3 z-10 w-50 m-auto">
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

            {/*This shows how many tracks you are on and what track is the current one*/}
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

export { TracksPage };
