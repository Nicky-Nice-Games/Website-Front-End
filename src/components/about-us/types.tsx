export type TeamData = string[][];

//List of Team names
export type TeamName =
  | "GSP"
  | "RND"
  | "Content"
  | "Level Design"
  | "Support"
  | "QA"
  | "Web"
  | "Advisory"
  | "Production";

export type TeamDataMap = Record<TeamName, TeamData>;
