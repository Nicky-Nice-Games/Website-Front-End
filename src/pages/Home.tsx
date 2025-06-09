import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import photo from '../../public/images/placeholder.png';
import arcadeMachine from '../../public/images/arcade machine.png';
import InfiniteMovingCards from '../components/ui/carousel-banner';
import styles from "../assets/Styles/MainStyles.module.css";

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"></link>

const HomePage = () => {
    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  type ScoreProps = {
        place: string;
        imgPath: string;
        name: string;
        time: string;
        score: string
    };

   function Score({ place, imgPath, name, time, score }:ScoreProps) {
    return (
        <div className="h-1/4 w-[100%] m-[2rem] flex gap-[4vw] items-center">
        <h3>{place}</h3>
        <img src={imgPath} alt={`Photo of ${name}`} className="w-[50px] h-[50px] rounded-full"/>
        <p>{name}</p>
        <div className="ml-auto flex gap-4">
            <p>{time}</p>
            <p>{score}</p>
        </div>
        </div>
    );
    }

    const bannerImages1 = [
    {
        imgSrc:'images/placeholder.PNG'
    },
    {
        imgSrc:'images/placeholder.PNG'
    },
    {
        imgSrc:'images/placeholder.PNG'
    },
    {
        imgSrc:'images/placeholder.PNG'
    },
    {
        imgSrc:'images/placeholder.PNG'
    },
    ];

    const bannerImages2 = [
    {
        imgSrc:'images/placeholder.PNG'
    },
    {
        imgSrc:'images/placeholder.PNG'
    },
    {
        imgSrc:'images/placeholder.PNG'
    },
    {
        imgSrc:'images/placeholder.PNG'
    },
    {
        imgSrc:'images/placeholder.PNG'
    },
    ];


    return(
        <>
            <div className="relative h-[90vh] w-[100%] text-white pb-[2rem] pt-[0rem] pr-[0rem]">
                <div id="header-text" className=" md:h-[90vh] bg-black absolute md:relative h-[20%] w-[100%] md:w-[50%] flex flex-col md:justify-center align-center p-4 z-3">
                    <h1 className="text-4xl font-bold">Brick City ????</h1>
                    <h3 className="text-xl text-muted-foreground">Game coming soon!</h3>
                </div>
                <a href="/NewsAndUpdates">
                    <div className="absolute z-2 bottom-[4rem] md:right-[4rem] right-[10rem] bg-black/75 p-[1rem] text-white">
                    <h3>See all news and updates!</h3>
                    </div>
                </a>
                
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full md:w-[60%] overflow-hidden absolute top-0 right-0"
                    >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="">
                            <Card className="h-[90vh]">
                                <CardContent className="flex items-center justify-center h-[90vh]">
                                <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>


            <main className="overflow-hidden">
                <div className="mb-[8rem] mt-[4rem]">
                    <div className="overflow-hidden rotate-6 w-[200%] h-[300px] m-[0rem] origin-top-left flex">
                        <InfiniteMovingCards items={bannerImages1} direction="right" speed="slow"></InfiniteMovingCards>
                    </div>
                </div>
                
                <div id="introdcution" className="w-full pl-[2rem] pr-[2rem] w-[100%]">
                    <h2>Game Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin eu nisl eu libero sodales facilisis eu vitae risus. Morbi
                        id accumsan sapien. Donec eget feugiat libero, at volutpat 
                        nunc. Praesent a velit felis. Nulla ultricies rhoncus risus, vitae
                        interdum lacus viverra eget. Fusce eget mauris nibh. 
                        Maecenas eu ex iaculis, ornare metus vitae, congue ante.
                        Etiam hendrerit velit at nunc lobortis congue. Sed et felis 
                        posuere mauris vulputate euismod eu a turpis. Duis convallis
                        tempus risus sed convallis. Proin efficitur vestibulum nibh ac
                        mollis. Nam scelerisque tellus a dolor facilisis.
                    </p>
                    <img
                        src={photo}
                        alt="Photo of arcade machines"
                    />
                </div>
                <div className="mb-[8rem] mt-[4rem]">
                    <div className="overflow-hidden rotate-6 w-[200%] h-[300px] m-[0rem] origin-top-left flex">
                        <InfiniteMovingCards items={bannerImages1} direction="right" speed="slow"></InfiniteMovingCards>

                    </div>
                </div>
                <div id="lore" className="ml-[2rem] mr-[2rem]">
                    <h2>The Lore</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Congue sem auctor pellentesque adipiscing in vel elit dapibus id. Lacus mi euismod tristique in facilisis. Vehicula porttitor iaculis risus tincidunt platea. Sed id platea phasellus vitae lacinia in lectus fames molestie. Eget nibh tellus scelerisque nunc ultrices. Pellentesque blandit amet elementum quam id. Mi consectetur sed adipiscing accumsan sit ut consectetur. 
                        Pharetra faucibus gravida commodo quisque at. Dui ac arcu nulla augue sed odio sit.
                        Odio ultrices cursus et arcu neque neque viverra faucibus faucibus. Pellentesque aliquam tellus molestie sed quis sem a. Quam eleifend facilisi et consectetur risus eros nisl lacus. Ut ac ac.
                        Lorem ipsum dolor sit amet consectetur. Congue sem auctor pellentesque adipiscing in vel elit dapibus id. Lacus mi euismod tristique in facilisis. Vehicula porttitor iaculis risus tincidunt platea. Sed id platea phasellus vitae lacinia in lectus fames molestie. Eget nibh tellus scelerisque nunc ultrices. Pellentesque blandit amet elementum quam id. Mi consectetur sed adipiscing accumsan sit ut consectetur. 
                        Pharetra faucibus gravida commodo quisque at. Dui ac arcu nulla augue sed odio sit.
                        Odio ultriceset arcu neque neque viverra faucibus faucibus. Pellentesque aliquam tellus molestie sed quis sem a. Quam eleifend facilisi et consectetur risus eros nisl lacus. Ut ac ac.
                    </p>
                </div>
                <div className="mb-[2rem] mt-[8rem]">
                    <div className="overflow-hidden -rotate-6 w-[200%] h-[300px] m-[0rem] origin-bottom-left flex">
                        <InfiniteMovingCards items={bannerImages2} direction="left" speed="slow"></InfiniteMovingCards>

                    </div>
                </div>
                <div id="topscores" className="relative flex flex-col justify-center items-center">
                    <h2>Top Scores</h2>
                    <img src={arcadeMachine} className="top-0 z-0 h-[800px] w-[70%] max-[700px]:w-[100%]"></img>
                    <div id="scoreboard" 
                    className="absolute top-[14%] 
                    w-[37%] max-[700px]:w-[60%] h-[500px] 
                    flex flex-col justify-center items-center m-[2rem] z-10">
                        <Score 
                        place="1st"      
                        imgPath={photo}
                        name="name"
                        time="0"
                        score="0">
                        </Score>
                        <Score 
                        place="2nd"      
                        imgPath={photo}
                        name="name"
                        time="0"
                        score="0">
                        </Score>
                        <Score 
                        place="3rd"      
                        imgPath={photo}
                        name="name"
                        time="0"
                        score="0">
                        </Score>
                        <Score 
                        place="4th"      
                        imgPath={photo}
                        name="name"
                        time="0"
                        score="0">
                        </Score>
                    </div>
                    <div id="link-container" className="bg-black/80 absolute z-3 bottom-0 w-[100%] p-[1rem] text-white text-center">
                        <a href="/Leaderboard">
                            <p>See all scores!</p>
                        </a>
                        
                    </div>
                </div>

            </main>            
        </>  
    );
}
export default HomePage