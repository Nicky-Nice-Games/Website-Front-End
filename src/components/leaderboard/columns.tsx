import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { millisecondsToSeconds } from "framer-motion"

const formatTime = (milliseconds: number): string => {
    let seconds = millisecondsToSeconds(milliseconds);
    let minutes = Math.floor(seconds / 60);
    milliseconds %= 1000;
    seconds %= 60

    const formattedMilliseconds = String(milliseconds).padStart(3, '0');
    const formattedSeconds = String(Math.floor(seconds)).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`
}

const formatPlacing = (index: number): string => {
    if (index > 10 && index < 14) return index + "th";
    
    let suffix;
    switch (index % 10){
        case 1: suffix = "st"; break;
        case 2: suffix = "nd"; break;
        case 3: suffix = "rd"; break;
        default: suffix = "th"; break;
    }
    return index + suffix;
}

interface Profile {
    index: number;
    pictureLink: string;
}

interface Player {
    username: string;
    raceTimeMilliseconds: number;
}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Racer = {
  id: string
  profile: Profile
  player: Player
  score: number
}

export const columns: ColumnDef<Racer>[] = [
  {
    accessorKey: "profile",
    header: () => <h1 className="max-w-1"></h1>,
    cell: ({ row }) => {
        const data: Profile = row.getValue("profile");
        return <div className="flex flex-row items-center justify-center w-full">
            <h1 className="font-bold text-xl mr-3">{formatPlacing(data.index)}</h1>
            <img src={data.pictureLink} className="max-w-9"/>
        </div>
    }
  },
  {
    accessorKey: "player",
    header: ({ column }) => { return (
    <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Player
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>)},
    cell: ({ row }) => {
        const data: Player = row.getValue("player");
        return <div className="min-w-30">
            <h2 className="text-base text-left">{data.username}</h2>
            <h2 className="text-lg text-right">{formatTime(data.raceTimeMilliseconds)}</h2>
        </div>
    }
   },
  {
    accessorKey: "score",
    header: ({ column }) => { return (
    <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Score
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>)},
    cell: ({ row }) => <h2 className="text-right text-lg">{row.getValue("score")}</h2>
  }
]