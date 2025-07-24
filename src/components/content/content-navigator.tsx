import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface ContentNavigatorProps {
  currentPage: string;
}

const ContentNavigator = (props: ContentNavigatorProps) => {
  const navigate = useNavigate();

  const mascotButtonColor =
    props.currentPage === "mascot"
      ? "bg-[#F76902] text-white"
      : "hover:text-[#F76902] text-white";
  const characterButtonColor =
    props.currentPage === "characters"
      ? "bg-[#F76902] text-white"
      : "hover:text-[#F76902] text-white";
  const itemButtonColor =
    props.currentPage === "items"
      ? "bg-[#F76902] text-white"
      : "hover:text-[#F76902] text-white";
  const trackButtonColor =
    props.currentPage === "tracks"
      ? "bg-[#F76902] text-white"
      : "hover:text-[#F76902] text-white";

  return (
    <>
      <NavigationMenu className="p-[10px] bg-size-[30%] bg-[url('images/black-checker.png')]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <button
              className={`p-2 m-1 font-bold ${mascotButtonColor} poppins tracking-wide rounded-sm text-sm md:text-lg`}
              onClick={() => {
                navigate("/mascot");
              }}
            >
              Our Mascot
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              className={`p-2 m-1 font-bold ${characterButtonColor} poppins tracking-wide rounded-sm text-sm md:text-lg`}
              onClick={() => {
                navigate("/characters");
              }}
            >
              Characters
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              className={`p-2 m-1 font-bold ${itemButtonColor} poppins tracking-wide rounded-sm text-sm md:text-lg`}
              onClick={() => {
                navigate("/items");
              }}
            >
              Items
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              className={`p-2 m-1 font-bold ${trackButtonColor} tracking-wide poppins rounded-sm text-sm md:text-lg`}
              onClick={() => {
                navigate("/tracks");
              }}
            >
              Tracks
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export { ContentNavigator };
