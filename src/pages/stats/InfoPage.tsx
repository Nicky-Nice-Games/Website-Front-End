import type { AccountSchema } from "@/App";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { characters } from "@/data/characters";
import { tracks } from "@/data/tracks";
import { formatTime, sumNumberListObject } from "@/utils";
import Pfp from "@/components/stats/pfp";

const InfoPage = ({
  playerData,
  recentRaces,
  setActiveTab,
  setAccount,
  account,
}: {
  playerData: any;
  recentRaces: any;
  setActiveTab: (tab: "info" | "achievements") => void;
  setAccount: Function;
  account: AccountSchema;
}) => {
  interface Stat {
    name: string;
    value: string | number;
  }

  const statsList1: Stat[] = [
    { name: "Wins", value: playerData.firstPlace },
    { name: "Fastest Time", value: formatTime(playerData.fastestTime) },
    { name: "Podium Finishes", value: playerData.podium },
    { name: "Races", value: playerData.totalRaces },
    { name: "Wall Crashes", value: playerData.collisionWithWall },
  ];

  const offenseUsed = sumNumberListObject(playerData.offenseUsage);
  const defenseUsed = sumNumberListObject(playerData.defenseUsage);
  const trapsUsed = sumNumberListObject(playerData.trapUsage);
  const boostsUsed = sumNumberListObject(playerData.boostUsage);

  const statsList2: Stat[] = [
    { name: "Item-Based Hits", value: offenseUsed + trapsUsed },
    { name: "Offensive Items Used", value: offenseUsed },
    { name: "Defensive Items Used", value: defenseUsed },
    { name: "Traps Used", value: trapsUsed },
    { name: "Boosts Used", value: boostsUsed },
  ];

  const statsList3: Stat[] = [
    {
      name: "Favorite Character",
      value: characters[playerData.favoriteChara - 1].name,
    },
    { name: "Favorite Track", value: tracks[playerData.favoriteTrack - 1].name },
  ];

  return (
    <div className="bg-black min-h-screen text-white p-4 md:p-8 ">
      {/* Info Sub Page*/}
      <Card className="bg-gray-600 w-full md:w-[90%] lg:w-[70%] xl:w-[45%] mx-auto rounded-none">
        {/* Header/class nav bar */}
        <Card className="h-auto w-full mx-auto rounded-none">
          <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 h-full px-2 md:px-4 py-2">
            {/* Left side/Buttons */}
            <div className="flex border border-2 border-gray-200 bg-gray-100 p-1 md:p-2 justify-center md:justify-start items-center space-x-2">
              <button
                className="font-bold underline hover:bg-gray-200 hover:cursor-pointer border border-2 border-gray-300 rounded-md py-1 px-2 text-sm md:text-base"
                onClick={() => setActiveTab("info")}
              >
                Info
              </button>

              <span className="hidden md:inline">|</span>
              <button
                className="hover:cursor-pointer hover:bg-gray-200 border border-2 border-gray-300 rounded-md py-1 px-2 text-sm md:text-base"
                onClick={() => setActiveTab("achievements")}
              >
                Achievements
              </button>
            </div>

            {/* Right side/Profile */}
            <div className="w-full">
              <div className="flex justify-center md:justify-end items-center space-x-4">
                <h2 className="text-black text-sm md:text-base font-medium">
                  {account.username}
                </h2>
                <Pfp
                  account={account}
                  setAccount={setAccount} // React’s useState setter fits this
                  showEdit={true}
                  className="relative z-50"
                />
              </div>
              {/* <div className="flex justify-center md:justify-end mt-2">
                <button className="px-2 py-1 text-xs md:text-sm border rounded"
                onClick={}>
                  Edit
                </button>
              </div> */}
            </div>
          </CardContent>
        </Card>

        {/* Random cool background banner */}
        <Card className=" h-48 w-full mx-auto rounded-none"></Card>

        {/* Overall stats grid */}
        <Card className="w-full mx-auto p-0 rounded-none min-h-[18rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-[14px] border-2 border-black w-full h-full">
            {/* Section 1 */}
            <div className="flex items-center justify-center bg-gray-200 border-b md:border-b-0 md:border-r border-black">
              <div className="bg-white grid grid-cols-[65%_35%] gap-y-1 w-full h-full">
                {statsList1.map((stat, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-4 py-1 text-left text-sm whitespace-nowrap">
                      {stat.name}
                    </div>
                    <div className="px-4 py-1 text-left text-sm whitespace-nowrap">
                      {stat.value}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex items-center justify-center bg-gray-200 border-b md:border-b-0 lg:border-r border-black">
              <div className="bg-white grid grid-cols-[65%_35%] gap-y-1 w-full h-full">
                {statsList2.map((stat, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-4 py-1 text-left text-sm whitespace-nowrap">
                      {stat.name}
                    </div>
                    <div className="px-4 py-1 text-left text-sm whitespace-nowrap">
                      {stat.value}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex items-center justify-center bg-gray-200">
              <div className="bg-white grid grid-cols-[65%_35%] gap-y-1 w-full h-full md:border-r border-black">
                {statsList3.map((stat, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-4 py-1 text-left text-sm whitespace-nowrap">
                      {stat.name}
                    </div>
                    <div className="px-4 py-1 text-left text-sm whitespace-nowrap">
                      {stat.value}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Races Activity */}
        <Card className="mr-4 ml-4">
          <h2 className="ml-4 mb-2 text-lg font-semibold">Recent Races</h2>
          <div className="space-y-2 px-4">
            {recentRaces.map((race: any) => {
              return (
                <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
                  <span>{tracks[race.mapRaced - 1].name}</span>
                  <span>{formatTime(race.raceTime)}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default InfoPage;