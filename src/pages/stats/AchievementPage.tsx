import type { AccountSchema } from "@/App";
import { sumNumberListObject } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import Pfp from "@/components/stats/pfp";

//#region Helper Functions
const getTotalItemsUsed = (playerData: any): number => {
  return (
    sumNumberListObject(playerData.offenseUsage) +
    sumNumberListObject(playerData.trapUsage) +
    sumNumberListObject(playerData.boostUsage) +
    sumNumberListObject(playerData.defenseUsage)
  );
};

const checkAchievementProgress = (
  stat: number,
  milestones: number[]
): boolean[] => {
  let achievementStatus: boolean[] = [];
  for (let i = 0; i < milestones.length; i++) {
    achievementStatus.push(stat >= milestones[i]);
  }
  return achievementStatus;
};
//#endregion

type AchievementsPageProps = {
  account: AccountSchema;
  setAccount: Function;
  playerData: any;
  setActiveTab: (tab: "info" | "achievements") => void;
};

export const AchievementsPage = ({
  account,
  setAccount,
  playerData,
  setActiveTab,
}: AchievementsPageProps) => {
  // Medals shape (rotated 30 degrees)
  const hexagonClip =
    "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)";

  const firstPlaceFinishes = playerData.firstPlace;
  const top3Finishes = playerData.podium;
  const totalRaces = playerData.totalRaces;
  const itemsUsed = getTotalItemsUsed(playerData);

  const firstPlaceAchievements = checkAchievementProgress(
    firstPlaceFinishes,
    [1, 10, 25, 50, 100]
  );
  const top3Achievements = checkAchievementProgress(
    top3Finishes,
    [1, 25, 50, 100, 200]
  );
  const totalRaceAchievements = checkAchievementProgress(
    totalRaces,
    [1, 25, 50, 100, 250]
  );
  const itemsUsedAchievements = checkAchievementProgress(
    itemsUsed,
    [25, 75, 150, 200, 350]
  );

  const achievementSections = [
    { name: "1st Place Finishes", progress: firstPlaceAchievements },
    { name: "Podium Finishes", progress: top3Achievements },
    { name: "Races", progress: totalRaceAchievements },
    { name: "Items Collected", progress: itemsUsedAchievements },
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

export default AchievementsPage