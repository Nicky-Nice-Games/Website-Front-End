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
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <>
            <Carousel
                plugins={[plugin.current]}
                className="w-full md:w-[60%] overflow-hidden md:absolute md:top-0 md:right-0"
            >
                <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                    <div className="">
                        <Card className="md:h-[90vh] h-[100%]">
                        <CardContent className="flex items-center justify-center md:h-[100vh] h-[70vh]">
                            <span className="text-4xl font-semibold">
                            {index + 1}
                            </span>
                        </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
        </>
    );
};
