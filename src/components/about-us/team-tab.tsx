import { Person } from "./person";
import type { TeamData } from "./types";

type TeamTabProps = {
  teamData: TeamData;
  teamName: string;
  customTitle?: string;
};

export const TeamTab = ({ teamData, teamName, customTitle }: TeamTabProps) => {
  return (
    <div>
      <h2 className="text-4xl m-1 mx-0 painterz">
        {teamData.length > 0 ? customTitle || teamData[0][0] : "Loading..."}
      </h2>
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
