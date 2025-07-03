import { useState, useEffect } from "react";
import { TeamTabs } from "@/components/about-us/team-tabs";
import type { TeamDataMap, TeamName } from "@/components/about-us/types";

const AboutUsPage = () => {
  const [teamData, setTeamData] = useState<TeamDataMap>({
    GSP: [],
    RND: [],
    Content: [],
    "Level Design": [],
    Support: [],
    QA: [],
    Web: [],
    Production: [],
  });

  useEffect(() => {
    const getTeamData = async (): Promise<void> => {
      const response: Response = await fetch("./data/TheTeam.csv");
      const data = await response.text();
      const tempTeamData = data.split("|");

      const newTeamData: TeamDataMap = {
        GSP: [],
        RND: [],
        Content: [],
        "Level Design": [],
        Support: [],
        QA: [],
        Web: [],
        Production: [],
      };

      tempTeamData.forEach((item) => {
        const dataLine = item.split(",");
        const team = dataLine[0].trim() as TeamName;

        if (team in newTeamData) {
          newTeamData[team].push(dataLine);
        }
      });

      setTeamData(newTeamData);
    };

    getTeamData();
  }, []);

  return (
    <main className="m-8">
      <h1 className="text-center text-4xl m-4 mx-0">Meet the team!</h1>
      <div className="flex flex-column items-center w-full text-center">
        <TeamTabs teamData={teamData} />
      </div>
    </main>
  );
};

export default AboutUsPage;
