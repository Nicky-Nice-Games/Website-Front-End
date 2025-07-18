import * as React from "react";
import { useNavigate } from "react-router-dom";
import InfiniteMovingCards from "@/components/ui/carousel-banner";
import ArrowButton from "@/components/ui/arrow-button";
import { HomeCarousel } from "@/components/home/home-carousel";
import { fetchData, formatPlacing, formatTime } from "@/utils";
import { pfpList } from "@/data/pfps";
import PreviewLeaderboard from "@/components/home/preview-leaderboard";

interface HomePageParams {
  setCurrentPage: Function;
}

const HomePage = ({ setCurrentPage }: HomePageParams) => {
  const [previewLeaderboardData, setPreviewData] = React.useState([]);

  const navigate = useNavigate();

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
        for (let p of data) {
          p.score = Math.floor(p.score);
        }
        setPreviewData(data.slice(0, 4));
      }
    );
  }, []);

  const bannerImages1 = [
    "images/in-game/one.png",
    "images/in-game/ten.png",
    "images/in-game/three.png",
    "images/in-game/nine.png",
    "images/in-game/five.png",
    "images/in-game/eight.png",
    "images/in-game/seven.png",
    "images/in-game/six.png",
    "images/in-game/nine.png",
    "images/in-game/two.png",
  ];

  const bannerImages2 = [
    "images/placeholder/placeholder.PNG",
    "images/placeholder/placeholder.PNG",
    "images/placeholder/placeholder.PNG",
    "images/placeholder/placeholder.PNG",
    "images/placeholder/placeholder.PNG",
    "images/placeholder/placeholder.PNG",
    "images/placeholder/placeholder.PNG",
    "images/placeholder/placeholder.PNG",
    "images/placeholder/placeholder.PNG",
    "images/placeholder/placeholder.PNG",
  ];

  return (
    <>
      <div className="relative h-[103vh] md:h-[90vh] w-full text-white pb-8 pb-16 bg-black">
        <div
          id="header-text"
          className="md:h-9/10 relative md:absolute w-full 
                    md:w-1/2 flex flex-col text-center items-center p-4 z-3 bg-gradient-to-r from-black to-[#0000]"
        >
          <img className="w-120 md:w-4/5" src="images/Game-Logo.png"></img>
          <h3 className="text-xl md:text-4xl poppins text-[#f3f4f6] mt-4 w-full">
            Your Favorite No-Credit Courses!
          </h3>
        </div>
        <ArrowButton
          caption="See all news and updates!"
          clickAction={() => {
            window.scrollTo({ top: 0, behavior: "instant" });
            navigate("/news");
            setCurrentPage("news");
          }}
          className="absolute bottom-0 md:bottom-12 md:right-12 right-4 z-10 px-10 py-3"
        />
        <HomeCarousel></HomeCarousel>
      </div>

      <main className="overflow-hidden bg-[url('images/white-checker.png')] bg-fixed">
        <div className="bg-black">
          <div className="overflow-hidden rotate-6 w-[120%] h-75 origin-top-left flex">
            <InfiniteMovingCards
              items={bannerImages1}
              direction="right"
              speed="verySlow"
            ></InfiniteMovingCards>
          </div>
        </div>

        <div
          id="introdcution"
          className="pt-8 md:pt-32 w-full pb-16 pl-8 pr-8 w-full 
                    bg-repeat bg-fixed bg-[url('images/black-checker.png')]
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
        <div className="mb-8 bg-fixed bg-repeat bg-[url('images/black-checker.png')]">
          <div className="overflow-hidden rotate-6 w-[120%] h-75 origin-top-left flex">
            <InfiniteMovingCards
              items={bannerImages1}
              direction="right"
              speed="verySlow"
            ></InfiniteMovingCards>
          </div>
        </div>
        <div
          id="lore"
          className="px-8 text-center pt-[8%] bg-fixed bg-repeat pb-[10%] bg-[url('images/white-checker.png')]"
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
        <div className=" relative bg-center bg-fixed bg-no-repeat 2xl:bg-cover bg-[url('images/items-background.png')] bg-[#BBB] bg-blend-difference">
          <div
            className="overflow-hidden -rotate-6 w-[120%] h-75 origin-bottom-left flex
          bg-center bg-fixed bg-no-repeat 2xl:bg-cover bg-[url('images/black-checker.png')]"
          >
            <InfiniteMovingCards
              items={bannerImages2}
              direction="left"
              speed="verySlow"
            />
          </div>
        </div>
        <div className="pt-8 w-full relative bg-center bg-fixed bg-no-repeat 2xl:bg-cover bg-[url('images/items-background.png')] bg-[#BBB] bg-blend-difference">
          <div
            id="topscores"
            className="relative flex flex-col justify-center items-center"
          >
            <PreviewLeaderboard data={previewLeaderboardData} />
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
