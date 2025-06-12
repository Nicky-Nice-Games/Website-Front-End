import React, { useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PlayerStatsPage = () => {
    const [activeTab, setActiveTab] = useState<'info' | 'achievements'>('info');

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

            {/* */}
            <Card className="bg-cyan-800 w-[45%] mx-auto rounded-none">
                 {/* Header/class nav bar*/}
            <Card className="h-16 w-full mx-auto rounded-none">
                <CardContent className="text-black flex space-x-4 px-4">
                    <button 
                        className={`${activeTab === 'info' ? 'font-bold underline' : ''}`}
                        onClick={() => setActiveTab('info')}
                    >
                        Info
                    </button>
                    <span>|</span>
                    <button 
                        className={`${activeTab === 'achievements' ? 'font-bold underline' : ''}`}
                        onClick={() => setActiveTab('achievements')}
                    >
                        Achievements
                    </button>
                </CardContent>
            </Card>

            {activeTab === 'info' ? (
                <>
                    {/* Random cool background banner */}
                    <Card className=" h-48 w-full mx-auto rounded-none">

                    </Card>

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
                        <div
                            className="bg-white grid grid-cols-[65%_35%] gap-y-1 w-full h-full"
                        >

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
                </>
            ) : (
                <div className="p-4">
                    {/* Achievements sub page */}
                    <h2 className="text-black text-center">Achievements Page coming soon!</h2>
                </div>
            )}
        </Card>
    </div>
    );
}

export default PlayerStatsPage;