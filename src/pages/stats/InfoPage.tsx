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
      value: characters[playerData.favoriteChara].name,
    },
    {
      name: "Favorite Track",
      value: tracks[playerData.favoriteTrack].name,
    },
  ];

  return (
    <div className="bg-[url(/ggk/images/items-background.png)] min-h-screen text-white p-4 md:p-8">
      {/* Main container - wider */}
      <div className="w-full max-w-[1800px] mx-auto pr-8 pl-8">
        {/* Increased max width */}
        {/* Info Sub Page*/}
        <Card className="bg-black bg-opacity-90 border-2 border-orange-500 w-full mx-auto rounded-lg shadow-lg shadow-orange-500/50">
          {/* Header/class nav bar */}
          <div className="bg-black m-0 p-0">Items</div>
          <Card className="h-auto w-full mx-auto rounded-t-lg bg-gradient-to-br from-[#121212] via-[#2b2b2b] to-[#F76902]/70 border-b-2 border-orange-500">
            <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 h-full px-2 md:px-4 py-2">
              {/* Left side/Buttons */}
              <div className="flex border-2 border-orange-500 bg-black p-1.5 md:p-2 justify-center md:justify-start items-center space-x-2.5 md:space-x-3 rounded-md">
                <button
                  className="font-bold text-orange-400 hover:bg-gray-800 hover:text-orange-300 hover:cursor-pointer border-2 border-orange-500 rounded-md py-1.5 px-3.5 text-sm md:text-base transition-colors underline"
                  onClick={() => setActiveTab("info")}
                >
                  Info
                </button>

                <span className="hidden md:inline text-orange-500 text-lg">
                  |
                </span>

                <button
                  className="text-orange-400 hover:cursor-pointer hover:bg-gray-800 hover:text-orange-300 border-2 border-orange-500 rounded-md py-1.5 px-3.5 text-sm md:text-base transition-colors"
                  onClick={() => setActiveTab("achievements")}
                >
                  Achievements
                </button>
              </div>

              {/* Right side/Profile */}
              <div className="w-full">
                <div className="flex justify-center md:justify-end items-center space-x-4">
                  <h2 className="text-orange-400 md:text-xl font-medium pt-6">
                    {account.username}
                  </h2>
                  <Pfp
                    account={account}
                    setAccount={setAccount}
                    showEdit={true}
                    className="relative z-50 "
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Banner with racing stripes effect */}
          <div className="h-48 w-full bg-gradient-to-r from-black via-gray-800 to-black relative overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-full ${
                    i % 2 === 0 ? "bg-orange-500" : "bg-green-500"
                  } w-16`}
                  style={{ transform: `skewX(-20deg) translateX(${i * 32}px)` }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-orange-400 drop-shadow-lg">
                RACER STATS
              </h1>
            </div>
          </div>

          {/* Overall stats grid - wider and colorful */}
          <Card className="w-full mx-auto p-0 rounded-b-lg bg-gray-900 min-h-[18rem] border-t-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-[14px] border-t-2 border-orange-500 w-full h-full">
              {/* Section 1 */}
              <div className="flex items-center justify-center bg-gradient-to-bl from-[#121212] via-[#2b2b2b] to-[#F76902]/70 border-b md:border-b-0 md:border-r-2 border-orange-500">
                <div className="grid grid-cols-[65%_35%] gap-y-1 w-full h-full">
                  {statsList1.map((stat, idx) => (
                    <React.Fragment key={idx}>
                      <div className="px-4 py-3 text-left text-orange-300 text-base whitespace-nowrap border-b border-gray-700">
                        {stat.name}
                      </div>
                      <div className="px-4 py-3 text-left text-green-300 font-medium text-base whitespace-nowrap border-b border-gray-700">
                        {stat.value}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Section 2 */}
              <div className="flex items-center justify-center bg-gradient-to-b from-[#121212] via-[#2b2b2b] to-[#F76902]/70 md:border-b-0 lg:border-r-2 border-orange-500">
                <div className="grid grid-cols-[65%_35%] gap-y-1 w-full h-full">
                  {statsList2.map((stat, idx) => (
                    <React.Fragment key={idx}>
                      <div className="px-4 py-3 text-left text-orange-300 text-base whitespace-nowrap border-b border-gray-700">
                        {stat.name}
                      </div>
                      <div className="px-4 py-3 text-left text-green-300 font-medium text-base whitespace-nowrap border-b border-gray-700">
                        {stat.value}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Section 3 */}
              <div className="flex items-center justify-center bg-gradient-to-br from-[#121212] via-[#2b2b2b] to-[#F76902]/70">
                <div className="grid grid-cols-[65%_35%] gap-y-1 w-full h-full">
                  {statsList3.map((stat, idx) => (
                    <React.Fragment key={idx}>
                      <div className="px-4 py-3 text-left text-orange-300 text-base whitespace-nowrap border-b border-gray-700">
                        {stat.name}
                      </div>
                      <div className="px-4 py-3 text-left text-green-300 font-medium text-base whitespace-nowrap border-b border-gray-700">
                        {stat.value}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Races Activity */}
          {recentRaces ? (
            <Card className="mx-4 mb-4 bg-gray-900 border-2 border-orange-500">
              <h2 className="ml-4 mb-4 text-lg font-semibold text-orange-400">
                Recent Races
              </h2>
              <div className="space-y-2 px-4 pb-4">
                {recentRaces.map((race: any) => {
                  return (
                    <div
                      key={race.id}
                      className="bg-gray-800 hover:bg-gray-700 rounded-md p-3 flex justify-between text-white border border-orange-500 transition-colors"
                    >
                      <span className="text-orange-300">
                        {tracks[race.mapRaced].name}
                      </span>
                      <span className="text-green-300 font-medium">
                        {formatTime(race.raceTime)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ) : null}
        </Card>
      </div>
    </div>
  );
};

export default InfoPage;
