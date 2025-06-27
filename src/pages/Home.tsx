import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useNavigate } from "react-router-dom"
import InfiniteMovingCards from '@/components/ui/carousel-banner';

interface HomePageParams{
    setCurrentPage: Function;
}

const HomePage = ({setCurrentPage}:HomePageParams) => {
    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  const photo: string = '/web/images/placeholder.PNG';
  const arcadeMachine = '/web/images/arcade machine.png'

  const navigate = useNavigate();

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
        <p className="m-4">{name}</p>
        <div className="ml-auto flex gap-4">
            <p className="m-4">{time}</p>
            <p className="m-4">{score}</p>
        </div> 
        </div>
    );
    }

    const bannerImages1 = [
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    ];

    const bannerImages2 = [
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    {
        imgSrc:'/web/images/placeholder.PNG'
    },
    ];

    return(
        <>
            <div className="relative h-[90vh] w-[100%] text-white pb-[2rem] pt-[0rem] pr-[0rem]">
                <div id="header-text" className=" md:h-[90vh] bg-black absolute md:relative h-[20%] w-[100%] md:w-[50%] flex flex-col md:justify-center align-center p-4 z-3">
                    <h1 className="h1-style">Brick City ????</h1>

                    <h3 className="text-xl text-muted-foreground">Game coming soon!</h3>
                </div>
                <button className="cursor-pointer absolute z-2 bottom-[4rem] md:right-[4rem] right-[10rem] bg-black/75 hover:bg-[#AA3300] p-[1rem] text-white" onClick={() => {window.scrollTo({ top: 0, behavior: "instant" }); navigate('/news'); setCurrentPage('news')}}>
                    <h3>See all news and updates!</h3>                
                </button>
                
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
                    <div className="overflow-hidden rotate-6 w-[100%] h-[300px] m-[0rem] origin-top-left flex">
                        <InfiniteMovingCards items={bannerImages1} direction="right" speed="verySlow"></InfiniteMovingCards>
                    </div>
                </div>
                
                <div id="introdcution" className="w-full pl-[2rem] pr-[2rem] w-[100%]">
                    <h2 className="text-[26px] m-4">Game Overview</h2>
                    <p className="m-4">
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
                    <img className="ml-4"
                        src="/web/images/placeholder.PNG"
                        alt="Photo of arcade machines"
                    />
                </div>
                <div className="mb-[12rem] mt-[4rem]">
                    <div className="overflow-hidden rotate-6 w-[100%] h-[300px] m-[0rem] origin-top-left flex">
                        <InfiniteMovingCards items={bannerImages1} direction="right" speed="verySlow"></InfiniteMovingCards>

                    </div>
                </div>
                <div id="lore" className="ml-[2rem] mr-[2rem] text-center m-[10%]">
                    <h2 className="text-[26px] m-4 font-semibold">The Lore</h2>
                    <p className="m-4">
                        Lorem ipsum dolor sit amet consectetur. Congue sem auctor pellentesque adipiscing in vel elit dapibus id. Lacus mi euismod tristique in facilisis. Vehicula porttitor iaculis risus tincidunt platea. Sed id platea phasellus vitae lacinia in lectus fames molestie. Eget nibh tellus scelerisque nunc ultrices. Pellentesque blandit amet elementum quam id. Mi consectetur sed adipiscing accumsan sit ut consectetur. 
                        Pharetra faucibus gravida commodo quisque at. Dui ac arcu nulla augue sed odio sit.
                        Odio ultrices cursus et arcu neque neque viverra faucibus faucibus. Pellentesque aliquam tellus molestie sed quis sem a. Quam eleifend facilisi et consectetur risus eros nisl lacus. Ut ac ac.
                        Lorem ipsum dolor sit amet consectetur. Congue sem auctor pellentesque adipiscing in vel elit dapibus id. Lacus mi euismod tristique in facilisis. Vehicula porttitor iaculis risus tincidunt platea. Sed id platea phasellus vitae lacinia in lectus fames molestie. Eget nibh tellus scelerisque nunc ultrices. Pellentesque blandit amet elementum quam id. Mi consectetur sed adipiscing accumsan sit ut consectetur. 
                        Pharetra faucibus gravida commodo quisque at. Dui ac arcu nulla augue sed odio sit.
                        Odio ultriceset arcu neque neque viverra faucibus faucibus. Pellentesque aliquam tellus molestie sed quis sem a. Quam eleifend facilisi et consectetur risus eros nisl lacus. Ut ac ac.
                    </p>
                </div>
                <div className="mb-[2rem] mt-[12rem]">
                    <div className="overflow-hidden -rotate-6 w-[100%] h-[300px] m-[0rem] origin-bottom-left flex">
                        <InfiniteMovingCards items={bannerImages2} direction="left" speed="verySlow"></InfiniteMovingCards>

                    </div>
                </div>
                <div id="topscores" className="relative flex flex-col justify-center items-center">
                    <h2 className="text-[26px] m-4">Top Scores</h2>
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
                        
                        <button className="cursor-pointer hover:bg-[#DD3300]" onClick={() => {window.scrollTo({ top: 0, behavior: "instant" }); navigate('/leaderboard'); setCurrentPage('leaderboard')}}>
                            <p className="m-4">See all scores!</p>
                        </button>
                        
                    </div>
                </div>

            </main>            
        </>  
    );
}
export default HomePage