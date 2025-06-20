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
        "Podium Finishes",
        "Wins",
        "Races"
    ];

    const statsData = [
        "3.006",
        "Lebron",
        "Red",
        "The Shed",
        "17",
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
                <Card className="mr-4 ml-4">
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
                <Card className="mr-4 ml-4">
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

                {/* Best Races Activity */}
                <Card className="mr-4 ml-4">
                    <h2 className="ml-4 mb-2 text-lg font-semibold">Best Races Per Track </h2>
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
  achievementsStatus?: boolean[]
}

export const AchievementsPage = ({
  setActiveTab,
  achievementsStatus = [true, false, true, false, true], // Default with some unlocked medals (For Testing)
}: AchievementsPageProps) => {
  // Medals shape (rotated 30 degrees)
  const hexagonClip =
    "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"

    const achievementSections = [
  "1st Place Finishes",
  "Podium Finishes",
  "Races",
  "Items Collected",
  "Item-Based Hits",
  "Offensive Items Used",
  "Specific Offensive Items Used",
  "Traps Used",
  "Boosts Used",
  "Specific Boosts Used",
  "Wall Crashes",
  "Track Fallouts"
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
    { name: "Podium Debut", requirement: "Place in top 3 once", color: "#f97316" }, // Orange
    { name: "Bronze Contender", requirement: "Place in top 3 25 times", color: "#ef4444" }, // Red
    { name: "Silver Regular", requirement: "Place in top 3 50 times", color: "#3b82f6" }, // Blue
    { name: "Podium Veteran", requirement: "Place in top 3 100", color: "#10b981" }, // Green
    { name: "Podium Legend", requirement: "Place in top 3 200", color: "#f59e0b" }, // Yellow

    /* Races Completed */
    { name: "Getting Started", requirement: "Complete 1 race", color: "#f97316" }, // Orange
    { name: "Weekend Driver", requirement: "Complete 25 races", color: "#ef4444" }, // Red
    { name: "Track Regular", requirement: "Complete 50 races", color: "#3b82f6" }, // Blue
    { name: "Seasoned Racer", requirement: "Complete 100 races", color: "#10b981" }, // Green
    { name: "Road Warrior", requirement: "Complete 250 races", color: "#f59e0b" }, // Yellow

    /* Items Collected */
    { name: "First Grab", requirement: "Collect 25 items", color: "#f97316" },
    { name: "Collector", requirement: "Collect 75 items", color: "#ef4444" },
    { name: "Item Hoarder", requirement: "Collect 150 items", color: "#3b82f6" },
    { name: "Supply Master", requirement: "Collect 200 items", color: "#10b981" },
    { name: "Item Overlord", requirement: "Collect 350 items", color: "#f59e0b" },



    /* Item-Based Hits (On opponenets) */
    { name: "First Strike", requirement: "Hit an opponent with 1 item", color: "#f97316" },
    { name: "Sharpshooter", requirement: "Hit 25 opponents", color: "#ef4444" },
    { name: "Brawler", requirement: "Hit 50 opponents", color: "#3b82f6" },
    { name: "Wrecking Force", requirement: "Hit 100 opponents", color: "#10b981" },
    { name: "Item Assassin", requirement: "Hit 150 opponents", color: "#f59e0b" },


    /* Offensive items used (On opponents) */
    { name: "First Throw", requirement: "Use 3 offensive items", color: "#f97316" },
    { name: "Trigger Happy", requirement: "Use 25 offensive items", color: "#ef4444" },
    { name: "Arsenal User", requirement: "Use 50 offensive items", color: "#3b82f6" },
    { name: "Demolitionist", requirement: "Use 100 offensive items", color: "#10b981" },
    { name: "Mayhem Dealer", requirement: "Use 200 offensive items", color: "#f59e0b" },


      /* Offensive [specific] items used (On opponents) */
    { name: "First Win", requirement: "1 Win", color: "#f97316" }, // Orange
    { name: "Amateur", requirement: "10 Win", color: "#ef4444" }, // Red
    { name: "Pro", requirement: "25 Win", color: "#3b82f6" }, // Blue
    { name: "Elite Racer", requirement: "50 Win", color: "#10b981" }, // Green
    { name: "Champion", requirement: "100 Win", color: "#f59e0b" }, // Yellow

      /* Traps used (On opponents) */
    { name: "Drop It!", requirement: "Place 5 traps", color: "#f97316" },
    { name: "Booby Trapper", requirement: "Place 25 traps", color: "#ef4444" },
    { name: "Hazard Handler", requirement: "Place 05 traps", color: "#3b82f6" },
    { name: "Track Menace", requirement: "Place 80 traps", color: "#10b981" },
    { name: "Chaos Architect", requirement: "Place 150 traps", color: "#f59e0b" },

      /* Boosts Used */
    { name: "First Burst", requirement: "Use 5 boosts", color: "#f97316" },
    { name: "Boost Beginner", requirement: "Use 20=5 boosts", color: "#ef4444" },
    { name: "Speedster", requirement: "Use 50 boosts", color: "#3b82f6" },
    { name: "Nitro Pro", requirement: "Use 150 boosts", color: "#10b981" },
    { name: "Turbo Titan", requirement: "Use 300 boosts", color: "#f59e0b" },

      /* [Specific] boosts used*/
    { name: "First Win", requirement: "1 Win", color: "#f97316" }, // Orange
    { name: "Amateur", requirement: "10 Win", color: "#ef4444" }, // Red
    { name: "Pro", requirement: "25 Win", color: "#3b82f6" }, // Blue
    { name: "Elite Racer", requirement: "50 Win", color: "#10b981" }, // Green
    { name: "Champion", requirement: "100 Win", color: "#f59e0b" }, // Yellow

      /* Wall Crashes */
    { name: "Bump Beginner", requirement: "Crash into walls 5 times", color: "#f97316" },
    { name: "Clumsy Driver", requirement: "Crash 25 times", color: "#ef4444" },
    { name: "Bumper Car", requirement: "Crash 60 times", color: "#3b82f6" },
    { name: "Wall Magnet", requirement: "Crash 120 times", color: "#10b981" },
    { name: "Crash King", requirement: "Crash 200 times", color: "#f59e0b" },


      /* Times fallen off track */
    { name: "Whoops!", requirement: "Fall off once", color: "#f97316" },
    { name: "Edge Dancer", requirement: "Fall 10 times", color: "#ef4444" },
    { name: "Track Dropper", requirement: "Fall 25 times", color: "#3b82f6" },
    { name: "Risk Taker", requirement: "Fall 50 times", color: "#10b981" },
    { name: "Gravity Challenger", requirement: "Fall 100 times", color: "#f59e0b" },
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
      
      {achievementSections.map((sectionTitle, sectionIndex) => {
        const startIdx = sectionIndex * 5;
        const medals = achievementData.slice(startIdx, startIdx + 5);

        return (
          <div key={sectionTitle} className="p-6 mb-8 mr-4 ml-4 border-2 border-white rounded-md">
            <div className="mb-8 font-semibold"><h2>{sectionTitle}</h2></div>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              {achievementsStatus.map((unlocked, idx) => (
                <div key={idx} className="w-full flex flex-col items-center p-2">
                  {unlocked ? (
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
                          backgroundColor: medals[idx].color,
                          clipPath: hexagonClip,
                        }}
                      >
                        <span className="text-2xl">🏆</span>
                      </div>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {medals[idx].name} – {medals[idx].requirement}
                      </div>
                    </div>
                  ) : (
                    <div className="group relative">
                      <div
                        className="w-24 h-24 border-2 border-gray-700 bg-gray-800 flex items-center justify-center"
                        style={{ clipPath: hexagonClip }}
                      >
                        <span className="text-2xl text-gray-600">🔒</span>
                      </div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {medals[idx].name}
                      </div>
                    </div>
                  )}
                  <p className="mt-2 text-md text-center break-words w-full px-1">
                    {medals[idx].name}
                  </p>
                  <p className="mt-0 text-sm text-center text-gray-300 w-full px-1">
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
}
export default PlayerStatsPage;