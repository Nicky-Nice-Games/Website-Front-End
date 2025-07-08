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

  const characterButtonColor =
    props.currentPage === "characters"
      ? "bg-[#F76902] hover:bg-white"
      : "hover:bg-[#F76902]";
  const itemButtonColor =
    props.currentPage === "items"
      ? "bg-[#F76902] hover:bg-white"
      : "hover:bg-[#F76902]";
  const trackButtonColor =
    props.currentPage === "tracks"
      ? "bg-[#F76902] hover:bg-white"
      : "hover:bg-[#F76902]";

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <button
              className={`p-1 m-1 font-bold ${characterButtonColor} poppins tracking-wide rounded-sm text-lg`}
              onClick={() => {
                const navigateRoute: string =
                  props.currentPage === "characters"
                    ? "/content"
                    : "/characters";
                navigate(navigateRoute);
              }}
            >
              Characters
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              className={`p-1 m-1 font-bold ${itemButtonColor} poppins tracking-wide rounded-sm text-lg`}
              onClick={() => {
                const navigateRoute: string =
                  props.currentPage === "items" ? "/content" : "/items";
                navigate(navigateRoute);
              }}
            >
              Items
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              className={`p-1 m-1 font-bold ${trackButtonColor} tracking-wide poppins rounded-sm text-lg`}
              onClick={() => {
                const navigateRoute: string =
                  props.currentPage === "tracks" ? "/content" : "/tracks";
                navigate(navigateRoute);
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
