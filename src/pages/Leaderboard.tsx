import { useState, useEffect } from "react";
import { columns } from "@/components/leaderboard/columns";
import { DataTable } from "@/components/leaderboard/data-table";
import { tracks } from "@/data/tracks";
import ArrowButton from "@/components/ui/arrow-button";

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
      <div className="text-center">
        <h1 className="bebas text-black italic mx-10 mt-8 text-5xl">
          Leaderboard
        </h1>
        <h2 className="text-xl mb-8 font-semibold">
          Click a map to view its leaderboard
        </h2>
        <MapSelect
          setMapId={setMapId}
          setMapName={setMapName}
          setMapImage={setMapImage}
        />
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
          className="absolute left-[11%] top-34 md:top-25"
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
          <div className="md:w-[45%] md:mx-4 mb-10">
            <h1 className="text-lg text-white font-semibold bg-gradient-to-r from-[#F66624] to-[#D84B3A] w-[40%] m-auto mb-2 px-3 py-1 rounded-lg">
              {t.name}
            </h1>
            <button
              onClick={() => {
                setMapId(tracks.indexOf(t) + 1); // Add to the index, as the map id starts with 1 in backend
                setMapName(t.name);
                setMapImage(`bg-[url(${t.imgUrl})]`); // Tailwind property for the leaderboard background
              }}
              className="hover:brightness-125 cursor-pointer"
            >
              <img src={t.imgUrl} className="rounded-xl h-[30vh]" />
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
    const getLeaderboardData = async (): Promise<any> => {
      //const response: Response = await fetch("./data/leaderboard-data.json");
      const response: Response = await fetch(
        `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/leaderboard/%7Bmapid%7D?mapid=${mapId}`
      );
      let data = await response.json();
      data = data.sort((a: any, b: any) => a.raceTime - b.raceTime);
      data.map((item: any) => {
        item.index = data.indexOf(item) + 1; //Set index for display purposes
        item.score = Math.floor(Math.random() * 100000); //Randomly determined until score is obtainable from backend
      });
      setLeaderboardData(data);
    };

    getLeaderboardData();
  }, []);

  if (leaderboardData.length == 0) return <p>No data found!</p>;

  return <DataTable columns={columns} data={leaderboardData} />;
};
export default LeaderboardPage;
