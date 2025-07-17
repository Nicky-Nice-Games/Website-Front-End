import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";
import InfiniteMovingCards from "@/components/ui/carousel-banner";
import ArrowButton from "@/components/ui/arrow-button";
import { HomeCarousel } from "@/components/home-carousel";
import { fetchData, formatPlacing, formatTime } from "@/utils";
import { pfpList } from "@/data/pfps";

interface HomePageParams {
  setCurrentPage: Function;
}

const HomePage = ({ setCurrentPage }: HomePageParams) => {
  const [previewLeaderboardData, setPreviewData] = React.useState([]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  
  const navigate = useNavigate();

  type ScoreProps = {
    place: string;
    imgPath: string;
    name: string;
    time: string;
    score: string;
    color: string;
  };

  // Takes the placement number and turns it into the appropriate color.
  const getPlacementColor = (index: number): string => {
    switch (index) {
      case 0:
        return "text-[#facc15]";
      case 1:
        return "text-[#cbd5e1]";
      case 2:
        return "text-[#fdba74]";
      case 3:
        return "text-[#f59e0b]";
      default:
        return "text-white";
    }
  };

  React.useEffect(() => {
    fetchData(
      "GET",
      "data/leaderboard-data.json",
      //"https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/leaderboard/%7Bmapid%7D?mapid=4",
      "json",
      (data: any) => {
        data = data.sort((a: any, b: any) => a.raceTime - b.raceTime);
        setPreviewData(data.slice(0, 4));
      }
    );
  }, []);

  function Score({ place, imgPath, name, time, score, color }: ScoreProps) {
    return (
      <div className="h-1/7 w-[100%] m-[1rem] flex gap-[2vw] md:gap-[4vw] items-center justify-start text-white">
        <h3 className={`graffiti text-[40px] md:text-[60px] ${color} w-13`}>
          {place}
        </h3>
        <img
          src={imgPath}
          alt={`Photo of ${name}`}
          className="hidden lg:block w-[60px] outline-[5px] outline-[#38bdf8] h-[60px] rounded-full"
        />
        <p className="ml-auto md:m-2 bebas text-[30px] md:text-3xl xl:text-4xl">
          {name}
        </p>
        <div className="ml-0 xl:ml-auto flex-wrap md:gap-4 gap-1">
          <p className="m-0 bebas text-[20px]">time: {time}</p>
          <p className="m-0 bebas text-[20px]">score: {score}</p>
        </div>
      </div>
    );
  }

  const bannerImages1 = [
    {
      imgSrc: "images/in-game/one.png",
    },
    {
      imgSrc: "images/in-game/ten.png",
    },
    {
      imgSrc: "images/in-game/three.png",
    },
    {
      imgSrc: "images/in-game/nine.png",
    },
    {
      imgSrc: "images/in-game/five.png",
    },
    {
      imgSrc: "images/in-game/eight.png",
    },
    {
      imgSrc: "images/in-game/seven.png",
    },
    {
      imgSrc: "images/in-game/six.png",
    },
    {
      imgSrc: "images/in-game/nine.png",
    },
    {
      imgSrc: "images/in-game/two.png",
    },
  ];

  const bannerImages2 = [
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
    {
      imgSrc: "images/placeholder/placeholder.PNG",
    },
  ];

  return (
    <>
      <div className="relative h-[90vh] w-[100%] text-white pb-[2rem] pt-[0rem] pr-[0rem] pb-[4rem] bg-black">
        <div
          id="header-text"
          className="md:h-[90vh] relative md:absolute w-[100%] 
                    md:w-[50%] flex flex-col text-center items-center p-4 z-3 bg-gradient-to-r from-black to-[#0000]"
        >
          <img
            className="w-[200px] md:w-[80%]"
            src="/ggk/images/Game-Logo.png"
          ></img>
          <h3 className="text-xl md:text-4xl text-[#f3f4f6] mt-[1rem] w-[100%]">
            Your favorite no-credit courses
          </h3>
        </div>
        <ArrowButton
          caption="See all news and updates!"
          clickAction={() => {
            window.scrollTo({ top: 0, behavior: "instant" });
            navigate("/news");
            setCurrentPage("news");
          }}
          className="absolute bottom-[0rem] md:bottom-[3rem] md:right-[3rem] right-[1rem] z-10 px-10 py-3"
        />
        <HomeCarousel></HomeCarousel>

      </div>

      <main className="overflow-hidden bg-[url('images/white-checker.png')] bg-fixed">
        <div className="bg-black">
          <div className="overflow-hidden rotate-6 w-[120%] h-[300px] m-[0rem] origin-top-left flex">
            <InfiniteMovingCards
              items={bannerImages1}
              direction="right"
              speed="verySlow"
            ></InfiniteMovingCards>
          </div>
        </div>

        <div
          id="introdcution"
          className="pt-[8rem] w-full pb-[4rem] pl-[2rem] pr-[2rem] w-[100%] 
                    bg-repeat bg-fixed bg-[url('images/items-background.png')]
                    text-white"
        >
          <h2 className="text-[26px] m-4">Game Overview</h2>
          <p className="m-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
            nisl eu libero sodales facilisis eu vitae risus. Morbi id accumsan
            sapien. Donec eget feugiat libero, at volutpat nunc. Praesent a
            velit felis. Nulla ultricies rhoncus risus, vitae interdum lacus
            viverra eget. Fusce eget mauris nibh. Maecenas eu ex iaculis, ornare
            metus vitae, congue ante. Etiam hendrerit velit at nunc lobortis
            congue. Sed et felis posuere mauris vulputate euismod eu a turpis.
            Duis convallis tempus risus sed convallis. Proin efficitur
            vestibulum nibh ac mollis. Nam scelerisque tellus a dolor facilisis.
          </p>
          <img
            className="ml-4"
            src="images/placeholder/placeholder.PNG"
            alt="Photo of arcade machines"
          />
        </div>
        <div className="mb-[2rem] bg-fixed bg-repeat bg-[url('images/items-background.png')]">
          <div className="overflow-hidden rotate-6 w-[120%] h-[300px] m-[0rem] origin-top-left flex">
            <InfiniteMovingCards
              items={bannerImages1}
              direction="right"
              speed="verySlow"
            ></InfiniteMovingCards>
          </div>
        </div>
        <div
          id="lore"
          className="pl-[2rem] pr-[2rem] text-center p-[10%] bg-fixed bg-repeat pb-[6rem] md:pb-[8rem] bg-[url('images/white-checker.png')]"
        >
          <h2 className="text-[26px] m-4 font-semibold">The Lore</h2>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur. Congue sem auctor
            pellentesque adipiscing in vel elit dapibus id. Lacus mi euismod
            tristique in facilisis. Vehicula porttitor iaculis risus tincidunt
            platea. Sed id platea phasellus vitae lacinia in lectus fames
            molestie. Eget nibh tellus scelerisque nunc ultrices. Pellentesque
            blandit amet elementum quam id. Mi consectetur sed adipiscing
            accumsan sit ut consectetur. Pharetra faucibus gravida commodo
            quisque at. Dui ac arcu nulla augue sed odio sit. Odio ultrices
            cursus et arcu neque neque viverra faucibus faucibus. Pellentesque
            aliquam tellus molestie sed quis sem a. Quam eleifend facilisi et
            consectetur risus eros nisl lacus. Ut ac ac. Lorem ipsum dolor sit
            amet consectetur. Congue sem auctor pellentesque adipiscing in vel
            elit dapibus id. Lacus mi euismod tristique in facilisis. Vehicula
            porttitor iaculis risus tincidunt platea. Sed id platea phasellus
            vitae lacinia in lectus fames molestie. Eget nibh tellus scelerisque
            nunc ultrices. Pellentesque blandit amet elementum quam id. Mi
            consectetur sed adipiscing accumsan sit ut consectetur. Pharetra
            faucibus gravida commodo quisque at. Dui ac arcu nulla augue sed
            odio sit. Odio ultriceset arcu neque neque viverra faucibus
            faucibus. Pellentesque aliquam tellus molestie sed quis sem a. Quam
            eleifend facilisi et consectetur risus eros nisl lacus. Ut ac ac.
          </p>
        </div>
        <div className=" relative bg-center bg-fixed bg-no-repeat 2xl:bg-cover bg-[url('images/black-checker.png')]">
          <div
            className="overflow-hidden -rotate-6 w-[120%] h-[300px] m-0 origin-bottom-left flex
          bg-center bg-fixed bg-no-repeat 2xl:bg-cover bg-[url('images/black-checker.png')]"
          >
            <InfiniteMovingCards
              items={bannerImages2}
              direction="left"
              speed="verySlow"
            />
          </div>
        </div>
        <div className="pt-[2rem] w-[100%] relative bg-center bg-fixed bg-no-repeat 2xl:bg-cover bg-[url('images/black-checker.png')]">
          <div
            id="topscores"
            className="relative flex flex-col justify-center items-center"
          >
            <img
              src="images/arcade-machine.png"
              className="top-0 z-0 w-[60%] h-[900px] max-[700px]:w-[100%]"
            ></img>
            <div
              id="scoreboard"
              className="absolute top-[27%] 
                    w-[37%] max-[700px]:w-[60%] h-[500px] 
                    flex flex-col items-center m-[2rem] z-10"
            >
              {previewLeaderboardData.map((player: any, index: number) => {
                return (
                  <Score
                    place={formatPlacing(index + 1)}
                    imgPath={pfpList[player.pfp]}
                    name={player.username}
                    time={formatTime(player.raceTime)}
                    score={player.score}
                    color={getPlacementColor(index)}
                  />
                );
              })}
            </div>
            <div
              id="link-container"
              className="bg-black/80 absolute z-3 bottom-0 w-full p-4 text-white text-center"
            >
              <ArrowButton
                caption="See all scores!"
                clickAction={() => {
                  window.scrollTo({ top: 0, behavior: "instant" });
                  navigate("/leaderboard");
                  setCurrentPage("leaderboard");
                }}
                className="px-8 py-3"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default HomePage;
