import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamTab } from "./team-tab";
import type { TeamDataMap } from "./types";

// Props type for the TeamTabs component
type TeamTabsProps = {
  teamData: TeamDataMap; // Object containing data for all teams
  defaultTab?: string; // Which tab to show first (default: "GSP")
};

export const TeamTabs = ({ teamData, defaultTab = "GSP" }: TeamTabsProps) => {
  return (
    // Main tabs container with default value and styling
    <Tabs
      defaultValue={defaultTab}
      className="w-[400px] w-9/10 bg-[url(images/tab-bg.png)] m-auto"
    >
      {/* List of tab buttons */}
      <TabsList className="w-full flex-wrap flex-column h-full">
        {Object.keys(teamData).map((team) => (
          <TabsTrigger key={team} value={team}>
            {team === "GSP" ? "Game Systems Programming" : team}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Content for each tab */}
      <TabsContent value="GSP">
        <TeamTab
          teamData={teamData.GSP}
          teamName="GSP"
          customTitle="Gameplay and Systems Programming"
        />
      </TabsContent>
      <TabsContent value="Production">
        <TeamTab teamData={teamData.Production} teamName="Production" />
      </TabsContent>
      <TabsContent value="Level Design">
        <TeamTab teamData={teamData["Level Design"]} teamName="Level Design" />
      </TabsContent>
      <TabsContent value="Content">
        <TeamTab teamData={teamData.Content} teamName="Content" />
      </TabsContent>
      <TabsContent value="QA">
        <TeamTab teamData={teamData.QA} teamName="QA" />
      </TabsContent>
      <TabsContent value="Support">
        <TeamTab teamData={teamData.Support} teamName="Support" />
      </TabsContent>
      <TabsContent value="Web">
        <TeamTab teamData={teamData.Web} teamName="Web" />
      </TabsContent>
      <TabsContent value="RND">
        <TeamTab teamData={teamData.RND} teamName="RND" />
      </TabsContent>
    </Tabs>
  );
};
