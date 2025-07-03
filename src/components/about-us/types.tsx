export type TeamData = string[][];

export type TeamName =
  | "GSP"
  | "RND"
  | "Content"
  | "Level Design"
  | "Support"
  | "QA"
  | "Web"
  | "Production";

export type TeamDataMap = Record<TeamName, TeamData>;
