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
    <div className="bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover pb-[2rem]">
      <h2 className="text-4xl m-1 mx-0 painterz">
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
