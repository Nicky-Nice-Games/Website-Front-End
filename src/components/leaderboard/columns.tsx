import type { ColumnDef } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Racer = {
  pid: string
  pfpID: number
  raceID: number
  username: string
  getRaceStartTime: string
  raceTime: number
  score: number
  index: number
}

export const columns: ColumnDef<Racer>[] = [
  {
    accessorKey: "index",
    header: () => <h1></h1>,
    cell: ({ row }) => {
      if (!row.getValue("index")) return;
      const isMobileDevice = useMediaQuery({maxWidth: 600}); 
        const index: number = row.getValue("index");
        return <div className="flex flex-row items-center justify-center w-full">
            <h1 className="font-bold text-base md:text-xl mr-3">{formatPlacing(index)}</h1>
            {isMobileDevice ? "" : <img src="images/pfp-placeholder.png" className="max-w-9 rounded-full  "/>}
        </div>
    }
  },
  {
    accessorKey: "username",
    header: () => <h1 className="text-xs lg:text-base md:pl-2">Player</h1>,
    cell: ({ row }) => {
      return <h2 className="text-xs md:text-base text-left relative">{row.getValue("username")}</h2>
    }
  },
  {
    accessorKey: "raceTime",
    header: ({ column }) => { 
      const isSorted = column.getIsSorted();
      let arrowIcon;
      switch (isSorted) {
        case "asc":
          arrowIcon = <ArrowUp />
          break;
        case "desc":
          arrowIcon = <ArrowDown />
          break;
        default:
          arrowIcon = <ArrowUpDown />
          break;
      }
      return (
        <Button
          variant="ghost"
          className="text-xs md:text-base"
          onClick={() => column.toggleSorting(isSorted === "asc")}
        >
          Race Time
          {arrowIcon}
        </Button>
    )},
    cell: ({ row }) => {
      if (!row.getValue("raceTime")) return;
        return <h2 className="text-sm md:text-lg text-right">{formatTime(row.getValue("raceTime"))}</h2>
    }
   },
  {
    accessorKey: "score",
    header: ({ column }) => { 
      const isSorted = column.getIsSorted();
      let arrowIcon;
      switch (isSorted) {
        case "asc":
          arrowIcon = <ArrowUp />
          break;
        case "desc":
          arrowIcon = <ArrowDown />
          break;
        default:
          arrowIcon = <ArrowUpDown />
          break;
      }
      return (
      
    <Button
          variant="ghost"
          className="text-right text-xs md:text-base"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Score
          {arrowIcon}
        </Button>)},
    cell: ({ row }) => {
      if (!row.getValue("index")) return;
      return <h2 className={`text-right text-sm md:text-lg`}>{row.getValue("score")}</h2>}
  }
]