import type { AccountSchema } from "@/App";
import { sumNumberListObject } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import Pfp from "@/components/stats/pfp";
import { achievementData } from "@/data/achievements";
import { motion } from "framer-motion";

const AnimatedCard = motion(Card);

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
      <div className="w-full max-w-[1800px] mx-auto pr-8 pl-8">
        <AnimatedCard
          className="w-full mx-auto rounded-lg border-2 border-orange-500 shadow-lg shadow-orange-500/50"
          initial={{
            background:
              "linear-gradient(45deg, #121212 0%, #2b2b2b 50%, #F76902 100%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            background: [
              "linear-gradient(45deg, #121212 0%, #2b2b2b 50%, #F76902 100%)",
              "linear-gradient(135deg, #121212 0%, #2b2b2b 50%, #F76902 100%)",
              "linear-gradient(225deg, #121212 0%, #2b2b2b 50%, #F76902 100%)",
              "linear-gradient(315deg, #121212 0%, #2b2b2b 50%, #F76902 100%)",
              "linear-gradient(45deg, #121212 0%, #2b2b2b 50%, #F76902 100%)",
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
          <div className="inline-flex m-0 p-6 rounded-t-lg text-white place-items-center text-3xl gap-4 ">
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
            <span> Achievements</span>
          </div>

          {/* Header/nav bar - matches InfoPage */}
          <Card className="h-auto w-full mx-auto rounded-t-lg bg-gradient-to-br from-[#121212] via-[#2b2b2b] to-[#F76902]/70 border-b-2 border-orange-500">
            <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 h-full px-2 md:px-4 py-2">
              {/* Left side/Buttons */}
              <div className="flex border-2 border-orange-500 bg-black p-1.5 md:p-2 justify-center md:justify-start items-center space-x-2.5 md:space-x-3 rounded-md">
                <button
                  className="font-bold text-orange-400 hover:bg-gray-800 hover:text-orange-300 hover:cursor-pointer border-2 border-orange-500 rounded-md py-1.5 px-3.5 text-sm md:text-base transition-colors"
                  onClick={() => setActiveTab("info")}
                >
                  Info
                </button>

                <span className="hidden md:inline text-orange-500 text-lg">
                  |
                </span>

                <button
                  className="text-orange-400 hover:cursor-pointer hover:bg-gray-800 hover:text-orange-300 border-2 border-orange-500 rounded-md py-1.5 px-3.5 text-sm md:text-base transition-colors underline"
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

          {/* Achievement sections */}
          <div className="p-4 md:p-6">
            {achievementSections.map((section, sectionIndex) => {
              const startIdx = sectionIndex * 5;
              const medals = achievementData.slice(startIdx, startIdx + 5);

              return (
                <div
                  key={section.name}
                  className="p-4 md:p-6 mb-6 md:mb-8 border-2 border-orange-500 rounded-md bg-gradient-to-b from-[#121212] via-[#2b2b2b] to-[#F76902]/70"
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
        </AnimatedCard>
      </div>
    </div>
  );
};

export default AchievementsPage;
