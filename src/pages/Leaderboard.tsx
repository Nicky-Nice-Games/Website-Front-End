import { useState, useEffect } from "react";
import { columns } from "@/components/leaderboard/columns";
import { DataTable } from "@/components/leaderboard/data-table";
import { type Track } from "@/data/tracks";
import ArrowButton from "@/components/ui/arrow-button";
import { fetchData } from "@/utils";
import MapSelect from "@/components/map-select";

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
              src=" images/leaderboard-header.png"
              className="flex justify-self-center w-[100%] md:w-[45%] 2xl:w-[35%] pt-8 mb-[1rem]"
            ></img>
            <h2 className="text-body pb-[2rem]">
              Click a map to view its leaderboard!
            </h2>
          </div>

          <MapSelect
            isDialog={false}
            clickActionOrDialogContent={(track: Track, index: number) => {
              setMapId(index + 1);
              setMapName(track.name);
              setMapImage(track.background);
            }}
          />
        </div>
      </div>
    );

  // Main leaderboard page
  // Renders when a map has been chosen
  return (
    <div
      className={`${mapImage} pt-10 bg-gray-400 bg-cover bg-center bg-blend-soft-light min-h-[80vh]`}
    >
      <div className="text-center max-w-8/10 m-auto bg-[#FFF4] rounded-lg">
        <ArrowButton
          caption="Back"
          clickAction={() => setMapId(0)}
          className="absolute left-[11%] top-34 md:top-25 px-4 sm:px-7"
          direction="left"
        />
        <h2 className="mb-2 text-header2">{mapName}</h2>
        <LeaderboardTable mapId={mapId} />
      </div>
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

  if (leaderboardData.length == 0) return <p className="text-body">No data found!</p>;

  return <DataTable columns={columns} data={leaderboardData} />;
};
export default LeaderboardPage;
