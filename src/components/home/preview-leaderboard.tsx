import PreviewTableRow from "./preview-table-row";
import { formatPlacing, formatTime } from "@/utils";
import { pfpList } from "@/data/pfps";

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

const PreviewLeaderboard = ({ data }: { data: any }) => {
  return (
    <>
      <img
        src="images/arcade-machine.png"
        className="top-0 z-0 w-full lg:w-3/5 md:h-225"
      ></img>
      <table
        id="scoreboard"
        className="absolute top-[27%] 
                    w-3/5 lg:w-[37%] h-125 
                    flex flex-col items-center m-8 z-10 "
      >
        <tr className="w-full flex flex-row justify-between text-gray-200">
          <th className="bebas text-[4vw] md:text-[3vw] lg:text-[2vw] w-1/4">
            Placing
          </th>
          <th className="bebas text-[4vw] md:text-[3vw] lg:text-[2vw]">
            Username
          </th>
          <th className="bebas text-[4vw] md:text-[3vw] lg:text-[2vw]">
            Race Time
          </th>
          <th className="bebas text-[4vw] md:text-[3vw] lg:text-[2vw]">
            Score
          </th>
        </tr>
        {data.map((player: any, index: number) => {
          return (
            <PreviewTableRow
              place={formatPlacing(index + 1)}
              imgPath={pfpList[player.pfp].src}
              name={player.username}
              time={formatTime(player.raceTime)}
              score={player.score}
              color={getPlacementColor(index)}
            />
          );
        })}
      </table>
    </>
  );
};

export default PreviewLeaderboard;
