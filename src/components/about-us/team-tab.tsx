import { Person } from "./person";
import type { TeamData } from "./types";

type TeamTabProps = {
  teamData: TeamData;
  teamName: string;
  customTitle?: string;
};

// This component holds all the tabs for a team
export const TeamTab = ({ teamData, customTitle }: TeamTabProps) => {
  return (
    <div className="bg-linear-to-t from-[#F66624]/90 to-[#D84B3A]/90 bg-no-repeat bg-cover pb-[2rem]">
      <h2 className="text-4xl mx-0 bebas text-[#fed7aa] pt-4">
        {teamData.length > 0 ? customTitle || teamData[0][0] : "Loading..."}
      </h2>
      <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-row flex-wrap w-full justify-center">
        {teamData.map((personData, index) => (
          <Person
            key={index}
            name={personData[1]}
            position={personData[2]}
            email={personData[3]}
            image={personData[4]}
          />
        ))}
      </div>
    </div>
  );
};
