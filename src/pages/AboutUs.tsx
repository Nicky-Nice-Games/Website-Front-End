import { useState, useEffect } from "react";
import { fetchData } from "@/utils";
import { TeamTabs } from "@/components/about-us/team-tabs";
import type { TeamDataMap } from "@/components/about-us/types";
const AboutUsPage = () => {
  //String arrays to hold each team's data
  const [gspData, setGspData] = useState<string[][]>([]);
  const [rndData, setRndData] = useState<string[][]>([]);
  const [contentData, setContentData] = useState<string[][]>([]);
  const [levelData, setLevelData] = useState<string[][]>([]);
  const [supportData, setSupportData] = useState<string[][]>([]);
  const [qaData, setQaData] = useState<string[][]>([]);
  const [webData, setWebData] = useState<string[][]>([]);
  const [productionData, setProductionData] = useState<string[][]>([]);
  const [advisoryData, setAdvData] = useState<string[][]>([]);

  useEffect(() => {
    const setTeamData = (data: string) => {
      //Create temporary arrays
      const tempTeamData = data.split("|");
      const tempGSPData: string[][] = [];
      const tempRNDData: string[][] = [];
      const tempLevelData: string[][] = [];
      const tempProductionData: string[][] = [];
      const tempContentData: string[][] = [];
      const tempQAData: string[][] = [];
      const tempSupportData: string[][] = [];
      const tempWebData: string[][] = [];
      const tempAdvData: string[][] = [];

      //Add data from the team array
      for (let index = 0; index < tempTeamData.length; index++) {
        const dataLine = tempTeamData[index].split(",");

        if (dataLine[0].trim() === "GSP") {
          tempGSPData.push(dataLine);
        }
        if (dataLine[0].trim() === "Advisory") {
          tempAdvData.push(dataLine);
        }
        if (dataLine[0].trim() === "RND") {
          tempRNDData.push(dataLine);
        }
        if (dataLine[0].trim() === "Level Design") {
          tempLevelData.push(dataLine);
        }
        if (dataLine[0].trim() === "Content") {
          tempContentData.push(dataLine);
        }
        if (dataLine[0].trim() === "QA") {
          tempQAData.push(dataLine);
        }
        if (dataLine[0].trim() === "Support") {
          tempSupportData.push(dataLine);
        }
        if (dataLine[0].trim() === "Web") {
          tempWebData.push(dataLine);
        }
        if (dataLine[0].trim() === "Production") {
          tempProductionData.push(dataLine);
        }
      }

      //Set the actual data arrays with the data from
      setGspData(tempGSPData);
      setContentData(tempContentData);
      setLevelData(tempLevelData);
      setProductionData(tempProductionData);
      setQaData(tempQAData);
      setRndData(tempRNDData);
      setSupportData(tempSupportData);
      setWebData(tempWebData);
      setAdvData(tempAdvData);
    };

    fetchData("GET", "./data/TheTeam.csv", "text", setTeamData);
  }, []);

  useEffect(() => {
    console.log("GSP Data updated:", gspData);
  }, [gspData]); // runs every time gspData changes

  const teamData: TeamDataMap = {
    GSP: gspData,
    Production: productionData,
    "Level Design": levelData,
    Content: contentData,
    QA: qaData,
    Support: supportData,
    Web: webData,
    RND: rndData,
    Advisory: advisoryData,
  };

  return (
    <>
      <main className="min-h-screen p-4 md:p-8 md:px-3 pb-[4rem] 
      bg-[#BBB] bg-[url('images/items-background.png')] 
      bg-fixed bg-cover bg-repeat bg-blend-difference bg-size-[90%] md:bg-size-[80%]">
        <div className="max-w-7xl mx-auto">
          <img
            src="images/test-header-banner.png"
            className="mx-auto w-full md:w-1/2 mb-8"
            alt="Team banner"
          />
          <div className="w-full text-center">
            <TeamTabs teamData={teamData} defaultTab="GSP" />
          </div>
        </div>
      </main>
    </>
  );
};
export default AboutUsPage;
