import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
//import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { millisecondsToSeconds } from "framer-motion"
import { useMediaQuery } from "react-responsive"

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
            <h1 className="font-bold text-base md:text-xl mr-3">{formatPlacing(data.index)}</h1>
            <img src={data.pictureLink} className="max-w-9"/>
        </div>
    }
  },
  {
    accessorKey: "player",
    header: ({ column }) => { return (
    <Button
          variant="ghost"
          className="m-0 p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Player
          <ArrowUpDown className="md:ml-2 md:h-4 md:w-4" />
        </Button>)},
    cell: ({ row }) => {
        const isMobileDevice = useMediaQuery({maxWidth: 600}); 
        const data: Player = row.getValue("player");
        return <div className="md:min-w-30">
            { isMobileDevice ? "" : <h2 className="text-xs md:text-base text-left">{data.username}</h2>}
            <h2 className="text-sm md:text-lg text-right">{formatTime(data.raceTimeMilliseconds)}</h2>
        </div>
    }
   },
  {
    accessorKey: "score",
    header: ({ column }) => { return (
    <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Score
          <ArrowUpDown className="m-0 md:ml-2 md:h-4 md:w-4" />
        </Button>)},
    cell: ({ row }) => {
      const isMobileDevice = useMediaQuery({maxWidth: 600}); 
     return <h2 className={`${isMobileDevice ? "text-left" : "text-right"} text-sm md:text-lg`}>{row.getValue("score")}</h2>}
  }
]