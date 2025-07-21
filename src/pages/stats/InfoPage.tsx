import type { AccountSchema } from "@/App";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { characters } from "@/data/characters";
import { tracks } from "@/data/tracks";
import { formatTime, sumNumberListObject } from "@/utils";
import Pfp from "@/components/stats/pfp";
import { motion } from "framer-motion";
const AnimatedCard = motion(Card);

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
        <AnimatedCard
          className="w-full mx-auto rounded-lg border-2 border-orange-500 shadow-lg shadow-orange-500/50"
          initial={{
            background:
              "linear-gradient(45deg, #121212 0%, #2b2b2b 50%, #c45102 100%)", // Changed #F76902 to #c45102 (darker orange)
            backgroundSize: "200% 200%",
          }}
          animate={{
            background: [
              "linear-gradient(45deg, #121212 0%, #2b2b2b 50%, #c45102 100%)", // Darker orange
              "linear-gradient(135deg, #121212 0%, #2b2b2b 50%, #c45102 100%)", // Darker orange
              "linear-gradient(225deg, #121212 0%, #2b2b2b 50%, #c45102 100%)", // Darker orange
              "linear-gradient(315deg, #121212 0%, #2b2b2b 50%, #c45102 100%)", // Darker orange
              "linear-gradient(45deg, #121212 0%, #2b2b2b 50%, #c45102 100%)", // Darker orange
            ],
            backgroundPosition: [
              "0% 0%",
              "100% 0%",
              "100% 100%",
              "0% 100%",
              "0% 0%",
            ],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <Card className=" bg-opacity-90 border-none w-full mx-auto rounded-lg shadow-lg shadow-orange-500/50 m-0 p-0 gap-0">
            {/* Header/class nav bar */}
            <div className="inline-flex m-0 pl-10 rounded-t-lg text-white place-items-center text-3xl gap-4 mb-6">
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="font-semibold"> Items</span>
            </div>
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
                    className="font-bold text-orange-400 hover:bg-gray-800 hover:text-orange-300 hover:cursor-pointer border-2 border-orange-500 rounded-md py-1.5 px-3.5 text-sm md:text-base transition-colors"
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
            {/* Racing Stats Banner  */}
            <div className="h-48 w-full relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
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
        </AnimatedCard>
      </div>
    </div>
  );
};

export default InfoPage;
