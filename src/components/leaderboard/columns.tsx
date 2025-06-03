import type { ColumnDef } from "@tanstack/react-table"
import { millisecondsToSeconds } from "framer-motion"

const formatTime = (milliseconds: number): string => {
    let seconds = millisecondsToSeconds(milliseconds);
    let minutes = Math.floor(seconds / 60);
    milliseconds %= 1000;
    seconds %= 60

    const formattedMilliseconds = String(milliseconds).padStart(3, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`
}

interface Profile {
    placing: number;
    pictureLink: string;
}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Racer = {
  id: string
  profile: Profile
  name: string
  raceTimeMilliseconds: number
  score: number
}

export const columns: ColumnDef<Racer>[] = [
  {
    accessorKey: "placing",
    header: "",
  },
  {
    accessorKey: "name",
    header: "Player",
  },
  {
    accessorKey: "raceTimeMilliseconds",
    header: "",
    cell: ({ row }) => formatTime(row.getValue("raceTimeMilliseconds"))
  },
  {
    accessorKey: "score",
    header: "Score",
  }
]