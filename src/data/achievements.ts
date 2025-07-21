// Achievement names and colors
export interface AchievementData {
  name: string;
  requirement: string;
  color: string;
}

export const achievementData:AchievementData[] = [
  
    /* 1st Place Finishes*/
    { name: "First Win", requirement: "1 Win", color: "#f97316" }, // Orange
    { name: "Amateur", requirement: "10 Win", color: "#ef4444" }, // Red
    { name: "Pro", requirement: "25 Win", color: "#3b82f6" }, // Blue
    { name: "Elite Racer", requirement: "50 Win", color: "#10b981" }, // Green
    { name: "Champion", requirement: "100 Win", color: "#f59e0b" }, // Yellow

    /* Podium Finishes */
    {
      name: "Podium Debut",
      requirement: "Place in top 3 once",
      color: "#f97316",
    }, // Orange
    {
      name: "Bronze Contender",
      requirement: "Place in top 3 25 times",
      color: "#ef4444",
    }, // Red
    {
      name: "Silver Regular",
      requirement: "Place in top 3 50 times",
      color: "#3b82f6",
    }, // Blue
    {
      name: "Podium Veteran",
      requirement: "Place in top 3 100",
      color: "#10b981",
    }, // Green
    {
      name: "Podium Legend",
      requirement: "Place in top 3 200",
      color: "#f59e0b",
    }, // Yellow

    /* Races Completed */
    {
      name: "Getting Started",
      requirement: "Complete 1 race",
      color: "#f97316",
    }, // Orange
    {
      name: "Weekend Driver",
      requirement: "Complete 25 races",
      color: "#ef4444",
    }, // Red
    {
      name: "Track Regular",
      requirement: "Complete 50 races",
      color: "#3b82f6",
    }, // Blue
    {
      name: "Seasoned Racer",
      requirement: "Complete 100 races",
      color: "#10b981",
    }, // Green
    {
      name: "Road Warrior",
      requirement: "Complete 250 races",
      color: "#f59e0b",
    }, // Yellow

    /* Items Collected */
    { name: "First Grab", requirement: "Collect 25 items", color: "#f97316" },
    { name: "Collector", requirement: "Collect 75 items", color: "#ef4444" },
    {
      name: "Item Hoarder",
      requirement: "Collect 150 items",
      color: "#3b82f6",
    },
    {
      name: "Supply Master",
      requirement: "Collect 200 items",
      color: "#10b981",
    },
    {
      name: "Item Overlord",
      requirement: "Collect 350 items",
      color: "#f59e0b",
    },
  ];