import React, { useState } from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const PlayerStatsPage = () => {
    const [activeTab, setActiveTab] = useState<'info' | 'achievements'>('info');

    if (activeTab === 'achievements') {
        return <AchievementsPage setActiveTab={setActiveTab} />;
    }

    return <InfoPage setActiveTab={setActiveTab} />;
}

const InfoPage = ({ setActiveTab }: { setActiveTab: (tab: 'info' | 'achievements') => void }) => {
    const stats = [
        "Fastest Time",
        "Favorite Character",
        "Favorite Kart Color",
        "Favorite Race Track",
        "Total Number of Podium Finishes",
        "Total Wins",
        "Total Races"
    ];

    const statsData = [
        "3.006",
        "Lebron",
        "Red",
        "The Shed",
        " 17",
        "4",
        "83"
    ];
    
    return (
        <div className="bg-black min-h-screen text-white p-4 md:p-8 ">
            {/* Info SUb Page*/}
            <Card className="bg-gray-600 w-[45%] mx-auto rounded-none">
                 {/* Header/class nav bar*/}
                <Card className="h-16 w-full mx-auto rounded-none">
                    <CardContent className="text-black flex space-x-4 px-4">
                        <button 
                            className="font-bold underline"
                            onClick={() => setActiveTab('info')}
                        >
                            Info
                        </button>
                        <span>|</span>
                        <button 
                            className=""
                            onClick={() => setActiveTab('achievements')}
                        >
                            Achievements
                        </button>
                    </CardContent>
                </Card>

                {/* Random cool background banner */}
                <Card className=" h-48 w-full mx-auto rounded-none"></Card>

                {/* Profile Pic/Username*/}
                <Card className="h-32 w-full mx-auto rounded-none">
                    <div className="flex items-center space-x-4 px-4"> 
                            <img 
                            src="images/placeholder.PNG"
                            alt ="profile picture"
                            className="grid cols-2 ml-16 rounded-4xl h-24 w-24 mb-2"
                        ></img>
                        <h2 className="text-black"> 
                            Username
                        </h2>
                    </div> 
                </Card>

                {/* Go karts logo/ overall stats grid*/}
                <Card className="h-64 w-full mx-auto p-0 rounded-none">
                    <div className="grid grid-cols-6 border-2 border-black h-full">
                        <div className="col-span-4 flex items-center justify-center bg-gray-400">
                        1
                        </div>
                        <div className="col-span-2 flex items-center justify-center bg-gray-200">
                        {/* makes the left column 65%, right column 35% */}
                        <div className="bg-white grid grid-cols-[65%_35%] gap-y-1 w-full h-full">
                            {/* Looping function that gets stats labels and corresponding data*/}
                            {stats.map((label, idx) => (
                            <React.Fragment key={idx}>
                                {/* label cell */}
                                <div className="px-4 py-1 text-left text-sm whitespace-nowrap">
                                {label}
                                </div>
                                {/* value cell */}
                                <div className="px-4 py-1 text-left text-sm whitespace-nowrap">
                                {statsData[idx]}
                                </div>
                            </React.Fragment>
                            ))}
                        </div>
                        </div>
                    </div>
                </Card>

                {/* Recent Races Activity */}
                <Card className="w-full mx-auto">
                    <h2 className="ml-4 mb-2 text-lg font-semibold">Recent Races</h2>
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
                </Card>

                {/* Best Races Activity */}
                <Card className="w-full mx-auto">
                    <h2 className="ml-4 mb-2 text-lg font-semibold">Best Races </h2>
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
                </Card>
            </Card>
        </div>
    );
}



type AchievementsPageProps = {
  setActiveTab: (tab: "info" | "achievements") => void
  /** exactly 5 entries, true = unlocked */
  achievementsStatus?: boolean[]
}

export const AchievementsPage = ({
  setActiveTab,
  achievementsStatus = [true, false, true, false, true], // Default with some unlocked medals
}: AchievementsPageProps) => {
  // Clip-path for a regular hexagon (rotated 30 degrees)
  const hexagonClip =
    "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"

  // Achievement names and colors
  const achievementData = [
    { name: "First Win", color: "#f97316" }, // Orange
    { name: "Speed Demon", color: "#ef4444" }, // Red
    { name: "Perfect Lap", color: "#3b82f6" }, // Blue
    { name: "Veteran Racer", color: "#10b981" }, // Green
    { name: "Champion", color: "#f59e0b" }, // Yellow
  ]

  return (
    <div className="bg-black min-h-screen text-white p-4 md:p-8">
      <Card className="bg-gray-600 w-[45%] mx-auto rounded-none">
        {/* tabs */}
        <Card className="h-16 w-full mx-auto rounded-none">
          <CardContent className="text-black flex space-x-4 px-4">
            <button onClick={() => setActiveTab("info")}>Info</button>
            <span>|</span>
            <button
              className="font-bold underline"
              onClick={() => setActiveTab("achievements")}
            >
              Achievements
            </button>
          </CardContent>
        </Card>

        {/* hexagon grid */}
        <div className="p-6">
          <h2 className="text-xl mb-4">Your Medals</h2>

          <div className="mb-8 font-semibold"><h2>Offense Used</h2></div>

          <div className="grid grid-cols-5 gap-8 justify-items-center">
            {achievementsStatus.map((unlocked, idx) => (
              <div key={idx} className="w-24 h-24 flex flex-col items-center">
                {unlocked ? (
                  // Unlocked medal with tooltip
                  <div className="group relative">
                    {/* Ribbon */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="w-6 h-6 bg-yellow-500 rounded-t-full" />
                      <div className="w-6 h-2 bg-black" />
                    </div>
                    {/* Hexagon medal */}
                    <div
                      className="w-24 h-24 border-4 border-yellow-400 flex items-center justify-center transition-transform hover:scale-110"
                      style={{
                        backgroundColor: achievementData[idx].color,
                        clipPath: hexagonClip,
                      }}
                    >
                      <span className="text-2xl">🏆</span>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {achievementData[idx].name}
                    </div>
                  </div>
                ) : (
                  // Locked placeholder with tooltip
                  <div className="group relative">
                    <div
                      className="w-24 h-24 border-2 border-gray-700 bg-gray-800 flex items-center justify-center"
                      style={{ clipPath: hexagonClip }}
                    >
                      <span className="text-2xl text-gray-600">🔒</span>
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {achievementData[idx].name}
                    </div>
                  </div>
                )}
                {/* Achievement name */}
                <p className="mt-2 text-sm text-center">
                  {achievementData[idx].name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
export default PlayerStatsPage;