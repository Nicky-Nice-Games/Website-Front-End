import { useState, useEffect } from "react";
import { TeamTabs } from "@/components/about-us/team-tabs";
import type { TeamDataMap, TeamName } from "@/components/about-us/types";

const AboutUsPage = () => {
  // Initialize empty team data state
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

  // Fetch and process team data when component loads
  useEffect(() => {
    const getTeamData = async (): Promise<void> => {
      // Fetch CSV data
      const response: Response = await fetch("./data/TheTeam.csv");
      const data = await response.text();
      const tempTeamData = data.split("|");

      // Split CSV data into individual cells
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

      // Prepare empty object to store organized data
      tempTeamData.forEach((item) => {
        const dataLine = item.split(",");
        const team = dataLine[0].trim() as TeamName;

        // Process each entry and sort into teams
        if (team in newTeamData) {
          newTeamData[team].push(dataLine);
        }
      });

      // Update state with the organized data
      setTeamData(newTeamData);
    };

    getTeamData();
  }, []);

  return (
    <main className="m-8">
      <h1 className="text-center text-4xl m-4 mx-0">Meet the team!</h1>
      <div className="flex flex-column items-center w-full text-center">
        {/* Render the tabs component with the team data */}
        <TeamTabs teamData={teamData} />
      </div>
    </main>
  );
};

export default AboutUsPage;
