import type { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatTime, formatPlacing } from "@/utils";
import { useMediaQuery } from "react-responsive";
import { pfpList } from "@/data/pfps";

// Formats time from a large millisecond value to show minutes, seconds and milliseconds

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Racer = {
  pid: string;
  pfp: number;
  raceID: number;
  username: string;
  getRaceStartTime: string;
  raceTime: number;
  score: number;
  index: number;
};

export const columns: ColumnDef<Racer>[] = [
  {
    accessorKey: "index",
    header: () => <h1></h1>,
    cell: ({ row }) => {
      if (!row.getValue("index")) return;
      const isMobileDevice = useMediaQuery({ maxWidth: 600 });
      const index: number = row.getValue("index");
      const pfp: number = row.getValue("pfp");
      return (
        <div className="flex flex-row items-center justify-center w-full">
          <h1 className="font-bold text-base md:text-xl mr-3">
            {formatPlacing(index)}
          </h1>
          {isMobileDevice ? (
            ""
          ) : (
            <img src={pfpList[pfp].src} className="max-w-9 rounded-full" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "pfp",
    header: () => <h1></h1>,
    cell: () => <p></p>,
  },
  {
    accessorKey: "username",
    header: () => <h1 className="text-xs lg:text-base md:pl-2">Player</h1>,
    cell: ({ row }) => {
      return (
        <h2 className="text-xs md:text-base text-left relative">
          {row.getValue("username")}
        </h2>
      );
    },
  },
  {
    accessorKey: "raceTime",
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      let arrowIcon;
      switch (isSorted) {
        case "asc":
          arrowIcon = <ArrowUp />;
          break;
        case "desc":
          arrowIcon = <ArrowDown />;
          break;
        default:
          arrowIcon = <ArrowUpDown />;
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
      );
    },
    cell: ({ row }) => {
      if (!row.getValue("raceTime")) return;
      return (
        <h2 className="text-sm md:text-lg text-right">
          {formatTime(row.getValue("raceTime"))}
        </h2>
      );
    },
  },
  {
    accessorKey: "score",
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      let arrowIcon;
      switch (isSorted) {
        case "asc":
          arrowIcon = <ArrowUp />;
          break;
        case "desc":
          arrowIcon = <ArrowDown />;
          break;
        default:
          arrowIcon = <ArrowUpDown />;
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
        </Button>
      );
    },
    cell: ({ row }) => {
      if (!row.getValue("index")) return;
      return (
        <h2 className={`text-right text-sm md:text-lg`}>
          {row.getValue("score")}
        </h2>
      );
    },
  },
];
