import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { updates, type Update } from "@/data/updates";

export const HomeCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );

  type NewsUpdateProps = {
    header: string;
    image: string;
    description: string;
  };

  function NewsUpdateSlide({ header, image, description }: NewsUpdateProps) {
    return (
      <div className="text-right items-end text-white md:ml-[8rem] mb-[4rem] flex flex-col-reverse md:flex-col">
        <div className="h-[40vh] md:h-[50vh] object-contain">
          <img className="h-[100%]" src={image}></img>
        </div>
        <div>
          <h2 className="text-[40px] md:text-[60px] bebas">{header}</h2>
          <p className="text-[18px]">{description}</p>
        </div>
      </div>
    );
  }

  // Initialize slides list (slides 2-4 are most recent updates)
  const last3Updates = updates
    .slice(updates.length - 3, updates.length)
    .reverse();
  const slides: any[] = last3Updates.map((update: Update, index: number) => {
    return (
      <div key={(index + 2).toString()}>
        <NewsUpdateSlide
          image={update.image}
          header={update.title}
          description={update.subtitle}
        />
      </div>
    );
  });

  // Unshift first slide to the beginning
  slides.unshift(
    <div key="1" className="flex flex-row justify-end">
      <div className="md:w-1/2 md:h-[100%] h-[50vh]">
        <img
          src="images/tracks/tech-house.png"
          className="h-[100%] object-cover"
        ></img>
      </div>
    </div>
  );

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full overflow-hidden md:absolute md:top-0 md:right-0"
      >
        <CarouselContent className="">
          {slides.map((slide, index) => {
            return (
              <CarouselItem key={index}>
                <div className="">
                  <Card className="md:h-[90vh] h-[100%] bg-black border-0">
                    <CardContent className=" w-[100%] md:h-[100vh] h-[70vh]">
                      {slide}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </>
  );
};
