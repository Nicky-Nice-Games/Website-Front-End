import type { AccountSchema } from "@/App";
import { sumNumberListObject } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import Pfp from "@/components/stats/pfp";
import { achievementData } from "@/data/achievements";

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

  return (
    <div className="bg-[url(/ggk/images/items-background.png)] min-h-screen text-white p-4 md:p-8">
      {/* Main container - matches InfoPage width */}
      <div className="w-full max-w-[1800px] mx-auto">
        <Card className="bg-black bg-opacity-90 border-2 border-orange-500 w-full mx-auto rounded-lg shadow-lg shadow-orange-500/50">
          {/* Header/nav bar - matches InfoPage */}
          <Card className="h-auto w-full mx-auto rounded-t-lg bg-gradient-to-r from-black to-gray-800 border-b-2 border-orange-500">
            <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 h-full px-2 md:px-4 py-2">
              {/* Left side/Buttons */}
              <div className="flex border-2 border-orange-500 bg-black p-1 md:p-2 justify-center md:justify-start items-center space-x-2 rounded-md">
                <button
                  className="text-orange-400 hover:bg-gray-800 hover:text-orange-300 hover:cursor-pointer border-2 border-orange-500 rounded-md py-1 px-3 text-sm md:text-base transition-colors"
                  onClick={() => setActiveTab("info")}
                >
                  Info
                </button>

                <span className="hidden md:inline text-orange-500">|</span>
                <button
                  className="font-bold text-orange-400 hover:bg-gray-800 hover:text-orange-300 border-2 border-orange-500 rounded-md py-1 px-3 text-sm md:text-base transition-colors underline"
                  onClick={() => setActiveTab("achievements")}
                >
                  Achievements
                </button>
              </div>

              {/* Right side/Profile */}
              <div className="flex justify-center md:justify-end items-center space-x-4">
                <h2 className="text-orange-400 text-sm md:text-base font-medium">
                  {account.username}
                </h2>
                <Pfp
                  account={account}
                  setAccount={setAccount}
                  showEdit={true}
                  className="relative z-50 border-2 border-orange-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* Achievement sections */}
          <div className="p-4 md:p-6">
            {achievementSections.map((section, sectionIndex) => {
              const startIdx = sectionIndex * 5;
              const medals = achievementData.slice(startIdx, startIdx + 5);

              return (
                <div
                  key={section.name}
                  className="p-4 md:p-6 mb-6 md:mb-8 border-2 border-orange-500 rounded-md bg-gradient-to-b from-gray-800 to-black"
                >
                  <div className="mb-4 md:mb-6">
                    <h2 className="text-lg md:text-xl font-semibold text-orange-400">
                      {section.name}
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 justify-items-center">
                    {section.progress.map((unlocked, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col items-center p-1 md:p-2 group"
                      >
                        {unlocked ? (
                          <div className="relative transform transition-transform hover:scale-110">
                            {/* Ribbon */}
                            <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                              <div className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 rounded-t-full" />
                              <div className="w-5 h-1.5 md:w-6 md:h-2 bg-black" />
                            </div>
                            {/* Hexagon medal */}
                            <div
                              className="w-22 h-22 md:w-24 md:h-24 border-4 border-orange-400 flex items-center justify-center"
                              style={{
                                backgroundColor: "#111827", // Dark gray background
                                clipPath: hexagonClip,
                              }}
                            >
                              <span className="text-2xl md:text-3xl text-yellow-400">
                                {medals[idx].name || "🏆"}
                              </span>
                            </div>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-orange-300 text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-orange-500">
                              {medals[idx].name} – {medals[idx].requirement}
                            </div>
                          </div>
                        ) : (
                          <div className="relative">
                            <div
                              className="w-22 h-22 md:w-24 md:h-24 border-2 border-gray-600 bg-gray-900 flex items-center justify-center"
                              style={{ clipPath: hexagonClip }}
                            >
                              <span className="text-2xl md:text-3xl text-gray-600">
                                🔒
                              </span>
                            </div>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-gray-400 text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-600">
                              {medals[idx].name}
                            </div>
                          </div>
                        )}
                        <p className="mt-2 text-md text-center font-medium text-orange-300">
                          {medals[idx].name}
                        </p>
                        <p className="mt-1 text-sm text-center text-green-300">
                          {medals[idx].requirement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AchievementsPage;
