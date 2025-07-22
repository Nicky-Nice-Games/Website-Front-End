import { useEffect, useState } from "react";
import type { AccountSchema } from "@/App";
import { fetchData } from "@/utils";
import InfoPage from "./stats/InfoPage";
import AchievementsPage from "./stats/AchievementPage";

// const mockRecentRaces = [
//   {
//     mapRaced: 1, // assuming this is an index for the tracks array
//     raceTime: 120000, // time in milliseconds (2 minutes in this case)
//   },
//   {
//     mapRaced: 2,
//     raceTime: 125000, // 2 minutes 5 seconds
//   },
//   {
//     mapRaced: 3,
//     raceTime: 118000, // 1 minute 58 seconds
//   },
//   {
//     mapRaced: 1,
//     raceTime: 122500, // 2 minutes 2.5 seconds
//   },
//   {
//     mapRaced: 4,
//     raceTime: 130000, // 2 minutes 10 seconds
//   },
// ];

// You'll also need the tracks data that's referenced in your component
// const tracks = [
//   { name: "Track 1" },
//   { name: "Track 2" },
//   { name: "Track 3" },
//   { name: "Track 4" },
// ];
const PlayerStatsPage = ({
  account,
  setAccount,
}: {
  account: AccountSchema | null;
  setAccount: Function;
}) => {
  const [activeTab, setActiveTab] = useState<"info" | "achievements">("info");
  // Store fetched player statistics
  const [playerData, setPlayerData] = useState<any>({
    pid: "string",
    email: "string",
    pw: "string",
    uid: 0,
    username: "string",
    pfpLink: 0,
    collisionWithPlayer: 0,
    collisionWithWall: 0,
    felloffmap: 0,
    fastestTime: 0,
    favoriteChara: 0,
    favoriteTrack: 0,
    offenseUsage: {
      puck1: 0,
      puck2: 0,
      puck3: 0,
      puck4: 0,
    },
    trapUsage: {
      oilSpill1: 0,
      brickwall: 0,
      confuseritchie: 0,
      fakepowerupbrick: 0,
    },
    boostUsage: {
      speedBoost1: 0,
      speedBoost2: 0,
      speedBoost3: 0,
      speedBoost4: 0,
    },
    defenseUsage: {
      defense1: 0,
      defense2: 0,
      defense3: 0,
      defense4: 0,
    },
    podium: 0,
    firstPlace: 0,
    totalRaces: 0,
  });
  // Store a list of the player's most recent races
  const [recentRaces, setRecentRaces] = useState(null);

  useEffect(() => {
    if (account) {
      //Fetch player profile data
      fetchData(
        "GET",
        `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/getdetailinfo/${account.pid}`,
        "json",
        setPlayerData
      );
      //Fetch data for recent races
      fetchData(
        "GET",
        `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/getrecentstats/${account.pid}`,
        "json",
        setRecentRaces
      );
    } else {
      // Sets player data to a dummy object with 0 in all fields for testing.
      setPlayerData({
        pid: "string",
        email: "string",
        pw: "string",
        uid: 0,
        username: "string",
        pfpLink: 0,
        collisionWithPlayer: 0,
        collisionWithWall: 0,
        felloffmap: 0,
        fastestTime: 0,
        favoriteChara: 0,
        favoriteTrack: 0,
        offenseUsage: {
          puck1: 0,
          puck2: 0,
          puck3: 0,
          puck4: 0,
        },
        trapUsage: {
          oilSpill1: 0,
          brickwall: 0,
          confuseritchie: 0,
          fakepowerupbrick: 0,
        },
        boostUsage: {
          speedBoost1: 0,
          speedBoost2: 0,
          speedBoost3: 0,
          speedBoost4: 0,
        },
        defenseUsage: {
          defense1: 0,
          defense2: 0,
          defense3: 0,
          defense4: 0,
        },
        podium: 0,
        firstPlace: 0,
        totalRaces: 0,
      });
    }
  }, [account]);

  if (!playerData || !account)
    return (
      <h1 className="bebas text-center font-black text-5xl mt-8">
        No Data Found!
      </h1>
    );

  if (activeTab === "achievements") {
    return (
      <AchievementsPage
        playerData={playerData}
        setActiveTab={setActiveTab}
        account={account}
        setAccount={setAccount}
      />
    );
  }

  return (
    <InfoPage
      playerData={playerData}
      recentRaces={recentRaces}
      setActiveTab={setActiveTab}
      setAccount={setAccount}
      account={account}
    />
  );
};

export default PlayerStatsPage;
