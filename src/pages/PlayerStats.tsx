import { useEffect, useState } from "react";
import type { AccountSchema } from "@/App";
import { fetchData } from "@/utils";
import InfoPage from "./stats/InfoPage";
import AchievementsPage from "./stats/AchievementPage";

const PlayerStatsPage = ({
  account,
  setAccount,
}: {
  account: AccountSchema | null;
  setAccount: Function;
}) => {
  const [activeTab, setActiveTab] = useState<"info" | "achievements">("info");
  // Store fetched player statistics
  const [playerData, setPlayerData] = useState(null);
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
    }
  }, []);

  if (!playerData || !account || !recentRaces)
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
