import { useState, useEffect } from "react";
import { columns } from "@/components/leaderboard/columns";
import { DataTable } from "@/components/leaderboard/data-table";
import { tracks } from "@/data/tracks";
import ArrowButton from "@/components/ui/arrow-button";
import { fetchData } from "@/utils";

const LeaderboardPage = () => {
  const [mapId, setMapId] = useState(0);
  const [mapName, setMapName] = useState("");
  const [mapImage, setMapImage] = useState("");

  // Re-render the page when the map id is changed
  useEffect(() => {}, [mapId, mapImage]);

  // Map selection screen
  // Renders if there hasn't been a chosen map
  if (mapId < 1)
    return (
      <div className="text-center bg-[url(images/white-checker.png)] bg-size-[80%] md:bg-size-[60%] bg-cover bg-repeat min-h-[80vh]">
        <div className="bg-gradient-to-b from-[#FFF7] via-white to-[#FFF7] from-1% via-50% to-99% min-h-[80vh]">
          <div className=" pb-4">
            <img
              src="images/leaderboard-header.png"
              className="flex justify-self-center w-[100%] md:w-[45%] lg:w-[35%] pt-8 mb-[1rem]"
            ></img>
            <h2 className="text-black text-[18px] pb-[2rem] font-semibold">
              Click a map to view its leaderboard!
            </h2>
          </div>

          <MapSelect
            setMapId={setMapId}
            setMapName={setMapName}
            setMapImage={setMapImage}
          />
        </div>
      </div>
    );

  // Main leaderboard page
  // Renders when a map has been chosen
  return (
    <div
      className={`${mapImage} pt-10 bg-gray-400 bg-cover bg-center bg-blend-soft-light`}
    >
      <div className="text-center max-w-8/10 m-auto bg-[#FFF4] rounded-lg">
        <ArrowButton
          caption="Back"
          clickAction={() => setMapId(0)}
          className="absolute left-[11%] top-34 md:top-25 px-4 sm:px-7"
          direction="left"
        />
        <h1 className="bebas text-black italic mx-10 text-5xl">Leaderboard</h1>
        <h2 className="text-xl mb-2 font-semibold">{mapName}</h2>
        <LeaderboardTable mapId={mapId} />
      </div>
    </div>
  );
};

const MapSelect = ({
  setMapId,
  setMapName,
  setMapImage,
}: {
  setMapId: Function;
  setMapName: Function;
  setMapImage: Function;
}) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-center">
      {tracks.map((t) => {
        return (
          <div className="md:mx-[8rem] lg:mx-[2rem] mb-10">
            <h1 className="w-fit text-lg text-white font-semibold bg-gradient-to-r from-[#F66624] to-[#D84B3A] m-auto p-[5px] mb-2 px-3 py-1 rounded-lg g">
              {t.name}
            </h1>
            <button
              onClick={() => {
                setMapId(tracks.indexOf(t) + 1); // Add to the index, as the map id starts with 1 in backend
                setMapName(t.name);
                setMapImage(`bg-[url(${t.imgUrl})]`); // Tailwind property for the leaderboard background
              }}
              className="cursor-pointer drop-shadow-xl/50 w-[80%] md:w-[350px]"
            >
              <div className="rounded-xl overflow-hidden w-full">
                <img
                  src={t.imgUrl}
                  className="w-full transition-transform duration-300 hover:scale-120 object-fill"
                />
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

const LeaderboardTable = ({ mapId }: { mapId: number }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    //const link = "./data/leaderboard-data.json";
    const link = `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/leaderboard/%7Bmapid%7D?mapid=${mapId}`;

    fetchData("GET", link, "json", (data: any) => {
      data = data.sort((a: any, b: any) => a.raceTime - b.raceTime);
      data.map((item: any) => {
        item.index = data.indexOf(item) + 1; //Set index for display purposes
        item.score = Math.floor(item.score);
      });
      setLeaderboardData(data);
    });
  }, []);

  if (leaderboardData.length == 0) return <p>No data found!</p>;

  return <DataTable columns={columns} data={leaderboardData} />;
};
export default LeaderboardPage;
