import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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

  const slides = [
    <div key="1" className="flex flex-row justify-end">
      <div className="md:w-1/2 md:h-[100%] h-[50vh]">
        <img
          src="images/tracks/tech-house.png"
          className="h-[100%] object-cover"
        ></img>
      </div>
    </div>,
    <div key="2">
      <NewsUpdateSlide
        image="images/characters/kai.png"
        header="#1 News"
        description="This is the most recent News/Update"
      ></NewsUpdateSlide>
    </div>,
    <div key="3">
      <NewsUpdateSlide
        image="images/tracks/dorm-derby.png"
        header="#2 News"
        description="This is the second most recent News/Update"
      ></NewsUpdateSlide>
    </div>,
    <div key="4">
      <NewsUpdateSlide
        image="images/placeholder/pfp-placeholder.png"
        header="#3 News"
        description="This is the third most recent News/Update"
      ></NewsUpdateSlide>
    </div>,
  ];

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
