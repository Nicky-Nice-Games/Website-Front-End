import { Card, CardContent } from "@/components/ui/card";
import Pfp from "@/components/stats/pfp";
import type { AccountSchema } from "@/App";

interface PlayerStatsHeaderProps {
  account: AccountSchema;
  setAccount: (account: AccountSchema) => void;
  setActiveTab: (tab: "info" | "achievements") => void;
  activeTab: "info" | "achievements";
  title?: string;
}

export const StatsHeader = ({
  account,
  setAccount,
  setActiveTab,
  activeTab,
  title = "RACER STATS",
}: PlayerStatsHeaderProps) => {
  return (
    <>
      {/* Nav Bar */}
      <Card className="h-auto w-full mx-auto rounded-t-lg bg-gradient-to-br from-[#121212] via-[#2b2b2b] to-[#F76902]/70 border-b-2 border-orange-500">
        <CardContent className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 h-full px-2 md:px-4 py-2">
          {/* Left side/Buttons */}
          <div className="flex border-2 border-orange-500 bg-black p-1.5 md:p-2 justify-center md:justify-start items-center space-x-2.5 md:space-x-3 rounded-md">
            <button
              className={`font-bold text-orange-400 hover:bg-gray-800 hover:text-orange-300 hover:cursor-pointer border-2 border-orange-500 rounded-md py-1.5 px-3.5 text-sm md:text-base transition-colors ${
                activeTab === "info" ? "underline" : ""
              }`}
              onClick={() => setActiveTab("info")}
            >
              Info
            </button>

            <span className="hidden md:inline text-orange-500 text-lg">|</span>

            <button
              className={`text-orange-400 hover:cursor-pointer hover:bg-gray-800 hover:text-orange-300 border-2 border-orange-500 rounded-md py-1.5 px-3.5 text-sm md:text-base transition-colors ${
                activeTab === "achievements" ? "underline" : ""
              }`}
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
                className="relative z-50"
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
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};
