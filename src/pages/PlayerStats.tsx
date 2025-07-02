import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { AccountSchema } from "@/App";
import { millisecondsToSeconds } from "framer-motion"

//#region Helper Functions

const formatTime = (milliseconds: number): string => {
    let seconds = millisecondsToSeconds(milliseconds);
    let minutes = Math.floor(seconds / 60);
    milliseconds %= 1000;
    seconds %= 60

    const formattedMilliseconds = String(milliseconds).padStart(3, '0');
    const formattedSeconds = String(Math.floor(seconds)).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`
}

const getData = (url: string, callback: Function) => {
  const fetchData = async (): Promise<any> => {
    const response: Response = await fetch(url);
    const playerData = await response.json();
    return playerData;
  }

  const playerData = fetchData();
  playerData.then(data => {
    callback(data)
  });
  playerData.catch(err => {
    console.log(err);
    return false;
  })
}

interface ItemsUsedObject {
  [propName: string]: number;
}

const sumItemsUsed = (itemsUsedObject: ItemsUsedObject): number => {
  let totalItemsUsed = 0;
  Object.values(itemsUsedObject).forEach(i => { totalItemsUsed += i;})
  return totalItemsUsed;
}

const getTotalItemsUsed = (playerData: any): number => {
  return (
    sumItemsUsed(playerData.offenseUsage) +
    sumItemsUsed(playerData.trapUsage) +
    sumItemsUsed(playerData.boostUsage) +
    sumItemsUsed(playerData.defenseUsage)
  );
}

const checkAchievementProgress = (stat: number, milestones: number[]): boolean[] => {
  let achievementStatus:boolean[] = [];
  for (let i = 0; i < milestones.length; i++){
    achievementStatus.push(stat >= milestones[i]);
  }
  return achievementStatus;
}
//#endregion

const PlayerStatsPage = ({ account }:{ account: AccountSchema | null}) => {
  const [activeTab, setActiveTab] = useState<"info" | "achievements">("info");
  const [playerData, setPlayerData] = useState(null);
  const [recentRaces, setRecentRaces] = useState(null);

  useEffect(() => {
    if (account) {
      //Fetch player profile data
      getData(`https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/getdetailinfo/${account.pid}`, setPlayerData);
      //Fetch data for recent races
      getData(`https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/getrecentstats/${account.pid}`, setRecentRaces);
    }
  }, []);

  if (!playerData || !account) return <h1 className="bebas text-center font-black text-5xl mt-8">No Data Found!</h1>

  if (activeTab === "achievements") {
    return <AchievementsPage playerData={playerData} setActiveTab={setActiveTab} />;
  }

  return <InfoPage playerData={playerData} recentRaces={recentRaces} setActiveTab={setActiveTab}  />;
};

const InfoPage = ({
  playerData,
  recentRaces,
  setActiveTab,
}: {
  playerData: any,
  recentRaces: any,
  setActiveTab: (tab: "info" | "achievements") => void;
}) => {
  interface Stat {
    name: string
    value: string | number
  }

  const statsList1: Stat[] = [ 
    {name: "Wins", value: playerData.firstPlace},
    {name: "Fastest Time", value: formatTime(playerData.fastestTime)},
    {name: "Podium Finishes", value: playerData.podium},
    {name: "Races", value: playerData.totalRaces},
    {name: "Wall Crashes", value: playerData.collisionWithWall}
  ];

  const offenseUsed = sumItemsUsed(playerData.offenseUsage);
  const defenseUsed = sumItemsUsed(playerData.defenseUsage);
  const trapsUsed = sumItemsUsed(playerData.trapUsage);
  const boostsUsed = sumItemsUsed(playerData.boostUsage);

  const statsList2: Stat[] = [
    {name: "Item-Based Hits", value: offenseUsed + trapsUsed},
    {name: "Offensive Items Used", value: offenseUsed},
    {name: "Defensive Items Used", value: defenseUsed},
    {name: "Traps Used", value: trapsUsed},
    {name: "Boosts Used", value: boostsUsed}
  ];

  const characters = ["Morgan", "Reese", "Emma", "Kai", "Jamster", "Gim"];
  const tracks = ["Outer Loop", "Quarter Mile", "Golisano", "Brick Road", "Dorm Room"];

  const statsList3: Stat[] = [
    {name: "Favorite Character", value: characters[playerData.favoriteChara - 1]},
    {name: "Favorite Track", value: tracks[playerData.favoriteTrack - 1]},
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
            <div className="flex justify-center md:justify-end items-center space-x-2">
              <h2 className="text-black text-sm md:text-base">Username</h2>
              <div className="relative -top-1">
                <img
                  src="images/placeholder.PNG"
                  alt="Profile picture"
                  className="rounded-full h-8 w-8 md:h-10 md:w-10 object-cover"
                />
              </div>
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
              return <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>{tracks[race.mapRaced - 1]}</span>
              <span>{formatTime(race.raceTime)}</span>
            </div>
            })}
          </div>
        </Card>

        {/* Best Races Activity */}
        {/* <Card className="mr-4 ml-4">
          <h2 className="ml-4 mb-2 text-lg font-semibold">Best Races</h2>
          <div className="space-y-2 px-4">
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>Rainbow Road</span>
              <span>2:15.342</span>
            </div>
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>Bowser's Castle</span>
              <span>1:47.890</span>
            </div>
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>Luigi Circuit</span>
              <span>1:02.455</span>
            </div>
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>DK Jungle</span>
              <span>2:03.120</span>
            </div>
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>Toad's Turnpike</span>
              <span>1:28.777</span>
            </div>
          </div>
        </Card> */}

        {/* Best Races Activity */}
        {/* <Card className="mr-4 ml-4">
          <h2 className="ml-4 mb-2 text-lg font-semibold">
            Best Races Per Track{" "}
          </h2>
          <div className="space-y-2 px-4">
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>Rainbow Road</span>
              <span>2:15.342</span>
            </div>
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>Bowser's Castle</span>
              <span>1:47.890</span>
            </div>
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>Luigi Circuit</span>
              <span>1:02.455</span>
            </div>
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>DK Jungle</span>
              <span>2:03.120</span>
            </div>
            <div className="bg-gray-800 rounded-md p-2 flex justify-between text-white">
              <span>Toad's Turnpike</span>
              <span>1:28.777</span>
            </div>
          </div>
        </Card> */}
      </Card>
    </div>
  );
};

type AchievementsPageProps = {
  playerData: any
  setActiveTab: (tab: "info" | "achievements") => void;
};

export const AchievementsPage = ({
  playerData,
  setActiveTab,
}: AchievementsPageProps) => {
  // Medals shape (rotated 30 degrees)
  const hexagonClip =
    "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)";


  const firstPlaceFinishes = playerData.firstPlace;
  const top3Finishes = playerData.podium;
  const totalRaces = 250 //Currently not in the backend
  const itemsUsed = getTotalItemsUsed(playerData);

  const firstPlaceAchievements = checkAchievementProgress(firstPlaceFinishes, [1, 10, 25, 50, 100]);
  const top3Achievements = checkAchievementProgress(top3Finishes, [1, 25, 50, 100, 200]);
  const totalRaceAchievements = checkAchievementProgress(totalRaces, [1, 25, 50, 100, 250]);
  const itemsUsedAchievements = checkAchievementProgress(itemsUsed, [25, 75, 150, 200, 350]);
  
  const achievementSections = [
    { name: "1st Place Finishes", progress: firstPlaceAchievements },
    { name: "Podium Finishes", progress: top3Achievements },
    { name: "Races", progress: totalRaceAchievements },
    { name: "Items Collected", progress: itemsUsedAchievements }
  ];

  // Achievement names and colors
  const achievementData = [
    /* 1st Place Finishes*/
    { name: "First Win", requirement: "1 Win", color: "#f97316" }, // Orange
    { name: "Amateur", requirement: "10 Win", color: "#ef4444" }, // Red
    { name: "Pro", requirement: "25 Win", color: "#3b82f6" }, // Blue
    { name: "Elite Racer", requirement: "50 Win", color: "#10b981" }, // Green
    { name: "Champion", requirement: "100 Win", color: "#f59e0b" }, // Yellow

    /* Podium Finishes */
    {
      name: "Podium Debut",
      requirement: "Place in top 3 once",
      color: "#f97316",
    }, // Orange
    {
      name: "Bronze Contender",
      requirement: "Place in top 3 25 times",
      color: "#ef4444",
    }, // Red
    {
      name: "Silver Regular",
      requirement: "Place in top 3 50 times",
      color: "#3b82f6",
    }, // Blue
    {
      name: "Podium Veteran",
      requirement: "Place in top 3 100",
      color: "#10b981",
    }, // Green
    {
      name: "Podium Legend",
      requirement: "Place in top 3 200",
      color: "#f59e0b",
    }, // Yellow

    /* Races Completed */
    {
      name: "Getting Started",
      requirement: "Complete 1 race",
      color: "#f97316",
    }, // Orange
    {
      name: "Weekend Driver",
      requirement: "Complete 25 races",
      color: "#ef4444",
    }, // Red
    {
      name: "Track Regular",
      requirement: "Complete 50 races",
      color: "#3b82f6",
    }, // Blue
    {
      name: "Seasoned Racer",
      requirement: "Complete 100 races",
      color: "#10b981",
    }, // Green
    {
      name: "Road Warrior",
      requirement: "Complete 250 races",
      color: "#f59e0b",
    }, // Yellow

    /* Items Collected */
    { name: "First Grab", requirement: "Collect 25 items", color: "#f97316" },
    { name: "Collector", requirement: "Collect 75 items", color: "#ef4444" },
    {
      name: "Item Hoarder",
      requirement: "Collect 150 items",
      color: "#3b82f6",
    },
    {
      name: "Supply Master",
      requirement: "Collect 200 items",
      color: "#10b981",
    },
    {
      name: "Item Overlord",
      requirement: "Collect 350 items",
      color: "#f59e0b",
    },
  ];
  return (
    <div className="bg-black min-h-screen text-white p-4 md:p-8">
      <Card className="bg-gray-600 w-full md:w-[90%] lg:w-[70%] xl:w-[45%] mx-auto rounded-none">
        {/* Header/class nav bar */}
        <Card className="h-auto w-full mx-auto rounded-none">
          <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 h-full px-2 md:px-4 py-2">
            {/* Left side/Buttons */}
            <div className="flex border-2 border-gray-200 bg-gray-100 p-1 md:p-2 justify-center md:justify-start items-center space-x-2">
              <button
                className="hover:cursor-pointer hover:bg-gray-200 border-2 border-gray-300 rounded-md py-1 px-2 text-sm md:text-base"
                onClick={() => setActiveTab("info")}
              >
                Info
              </button>

              <span className="hidden md:inline">|</span>
              <button
                className="font-bold underline hover:cursor-pointer hover:bg-gray-200 border-2 border-gray-300 rounded-md py-1 px-2 text-sm md:text-base"
                onClick={() => setActiveTab("achievements")}
              >
                Achievements
              </button>
            </div>

            {/* Right side/Profile */}
            <div className="flex justify-center md:justify-end items-center space-x-2">
              <h2 className="text-black text-sm md:text-base">Username</h2>
              <div className="relative -top-1">
                <img
                  src="images/placeholder.PNG"
                  alt="Profile picture"
                  className="rounded-full h-8 w-8 md:h-10 md:w-10 object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        {achievementSections.map((section, sectionIndex) => {
          const startIdx = sectionIndex * 5;
          const medals = achievementData.slice(startIdx, startIdx + 5);

          return (
            <div
              key={section.name}
              className="p-4 md:p-6 mb-6 md:mb-8 mr-2 ml-2 md:mr-4 md:ml-4 border-2 border-white rounded-md"
            >
              <div className="mb-4 md:mb-8 font-semibold">
                <h2 className="text-lg md:text-xl">{section.name}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 justify-items-center">
                {section.progress.map((unlocked, idx) => (
                  <div
                    key={idx}
                    className="w-full flex flex-col items-center p-1 md:p-2"
                  >
                    {unlocked ? (
                      <div className="group relative">
                        {/* Ribbon */}
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-t-full" />
                          <div className="w-5 h-1.5 md:w-6 md:h-2 bg-black" />
                        </div>
                        {/* Hexagon medal */}
                        <div
                          className="w-22 h-22 md:w-24 md:h-24 lg:w-24 lg:h-24 border-4 border-yellow-400 flex items-center justify-center transition-transform hover:scale-110"
                          style={{
                            backgroundColor: medals[idx].color,
                            clipPath: hexagonClip,
                          }}
                        >
                          <span className="text-xl md:text-2xl">🏆</span>
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 md:mb-2 px-1 md:px-2 py-0.5 md:py-1 bg-black text-white text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {medals[idx].name} – {medals[idx].requirement}
                        </div>
                      </div>
                    ) : (
                      <div className="group relative">
                        <div
                          className="w-22 h-22 md:w-24 md:h-24 lg:w-24 lg:h-24 border-2 border-gray-700 bg-gray-800 flex items-center justify-center"
                          style={{ clipPath: hexagonClip }}
                        >
                          <span className="text-xl md:text-2xl text-gray-600">
                            🔒
                          </span>
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 md:mb-2 px-1 md:px-2 py-0.5 md:py-1 bg-black text-white text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {medals[idx].name}
                        </div>
                      </div>
                    )}
                    <p className="mt-1 md:mt-2 text-md md:text-md text-center break-words w-full px-1 font-semibold">
                      {medals[idx].name}
                    </p>
                    <p className="mt-0 text-sm text-center text-gray-300 w-full px-1 mb-2 sm:mb-0">
                      {medals[idx].requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
};
export default PlayerStatsPage;
