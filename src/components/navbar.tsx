import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import type { AccountSchema } from "../App";
import { pfpList } from "@/data/pfps";

/// Parameters to be passed into the navbar component
interface NavbarParams {
  account: AccountSchema | null;
  setAccount: Function;
  currentPage: string | null;
  setCurrentPage: Function;
}

const Navbar = ({
  account,
  setAccount,
  currentPage,
  setCurrentPage,
}: NavbarParams) => {
  // Tailwind classes to set the button background for normal, hover and active states.
  const navbarButton: string =
    "bg-size-[100%_100%] bg-[url(/ggk/images/navbar/button.png)] hover:bg-[url(/ggk/images/navbar/button-hover.png)] active:bg-[url(/ggk/images/navbar/button-active.png)] relative active:top-[1px]";
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "instant" });

  // Assigned upon login
  const [username, setUsername] = useState("");

  // Login button
  // Only appears when not logged in
  const loginButton = (
    <NavigationMenuLink className={`${navbarButton} mr-3`}>
      <button
        className={`cursor-pointer ${
          // Highlight the text if user is on the same page as this button
          currentPage == "login" ? "active-outline" : "passive-outline"
        }`}
        onClick={() => {
          scrollToTop();
          navigate("/login");
          setCurrentPage("login");
        }}
      >
        Login
      </button>
    </NavigationMenuLink>
  );

  const [loginNavbarItem, setLoginNavbarItem] = useState(loginButton);
  const isMobileDevice = useMediaQuery({ maxWidth: 500 });
  const navigate = useNavigate();

  // Profile dropdown with link to player stats page and logout button
  // Only appears if logged in
  const profileDropdown = (
    <NavigationMenuItem className="list-none md:mr-4">
      <NavigationMenuTrigger
        className={`${navbarButton} bg-inherit ${
          currentPage === "stats" ? "active-outline" : "passive-outline"
        }`}
      >
        <button
          className={`cursor-pointer ${
            currentPage === "stats" ? "active-outline" : "passive-outline"
          }`}
        >
          {/*Username won't appear on mobile*/}
          {isMobileDevice ? "" : username}
        </button>
        <img
          src={
            account
              ? pfpList[account.pfp]
              : "images/placeholder/pfp-placeholder.png"
          }
          className="max-w-7 md:m-1 rounded-full"
        />
      </NavigationMenuTrigger>
      <NavigationMenuContent className="md:min-w-30 *:hover:text-[#e7ee33] absolute">
        <NavigationMenuLink>
          <button
            onClick={() => {
              scrollToTop();
              navigate("/stats");
              setCurrentPage("stats");
            }}
          >
            My Stats
          </button>
        </NavigationMenuLink>
        <NavigationMenuLink>
          <button
            onClick={() => {
              scrollToTop();
              navigate("/login");
              setCurrentPage("login");
              setAccount(null);
              localStorage.clear();
            }}
          >
            Log Out
          </button>
        </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );

  // When logging in, update the navbar accordingly
  useEffect(() => {
    if (account) {
      setUsername(account.username);
      setLoginNavbarItem(profileDropdown);
    } else {
      setUsername("username");
      setLoginNavbarItem(loginButton);
    }
  }, [account, username]);

  // Safety precaution to ensure the navbar is up to date.
  useEffect(() => {
    if (account) setLoginNavbarItem(profileDropdown);
    else setLoginNavbarItem(loginButton);
  }, [currentPage]);

  // On a wide screen, the central navbar buttons are laid out in a row
  const pcNavList = (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={`${navbarButton} bg-inherit ${
            currentPage === "about" ? "active-outline" : "passive-outline"
          }`}
        >
          <button
            className={`cursor-pointer ${
              currentPage === "about" ? "active-outline" : "passive-outline"
            }`}
            onClick={() => {
              scrollToTop();
              navigate("/process");
              setCurrentPage("about");
            }}
          >
            About
          </button>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute -left-3 *:hover:text-[#e7ee33] min-w-30">
          <NavigationMenuLink>
            <button
              onClick={() => {
                scrollToTop();
                navigate("./process");
                setCurrentPage("about");
              }}
            >
              Process
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <button
              onClick={() => {
                scrollToTop();
                navigate("./aboutUs");
                setCurrentPage("about");
              }}
            >
              About Us
            </button>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={`${navbarButton} bg-inherit ${
            currentPage === "content" ? "active-outline" : "passive-outline"
          }`}
        >
          <button
            className={`cursor-pointer ${
              currentPage === "content" ? "active-outline" : "passive-outline"
            }`}
            onClick={() => {
              scrollToTop();
              navigate("/content");
              setCurrentPage("content");
            }}
          >
            Content
          </button>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute -left-2 *:hover:text-[#e7ee33]">
          <NavigationMenuLink>
            <button
              onClick={() => {
                scrollToTop();
                navigate("./characters");
                setCurrentPage("content");
              }}
            >
              Characters
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <button
              onClick={() => {
                scrollToTop();
                navigate("./items");
                setCurrentPage("content");
              }}
            >
              Items
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <button
              onClick={() => {
                scrollToTop();
                navigate("./tracks");
                setCurrentPage("content");
              }}
            >
              Tracks
            </button>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuLink
        className={`${navbarButton} ${
          currentPage === "news" ? "active-outline" : "passive-outline"
        }`}
      >
        <button
          className={`cursor-pointer ${
            currentPage === "news" ? "active-outline" : "passive-outline"
          } mx-1`}
          onClick={() => {
            scrollToTop();
            navigate("/news");
            setCurrentPage("news");
          }}
        >
          News & Updates
        </button>
      </NavigationMenuLink>
      <NavigationMenuLink
        className={`${navbarButton} ${
          currentPage === "leaderboard" ? "active-outline" : "passive-outline"
        }`}
      >
        <button
          className={`cursor-pointer ${
            currentPage === "leaderboard" ? "active-outline" : "passive-outline"
          } mx-1`}
          onClick={() => {
            scrollToTop();
            navigate("/leaderboard");
            setCurrentPage("leaderboard");
          }}
        >
          Leaderboard
        </button>
      </NavigationMenuLink>
    </NavigationMenuList>
  );

  // On mobile, the central navbar options are condensed into one dropdown
  const mobileNavList = (
    <>
      <NavigationMenuItem className="list-none">
        <NavigationMenuTrigger className={`${navbarButton} bg-inherit`}>
          <p className="passive-outline">Pages</p>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute -left-5 min-w-30">
          <NavigationMenuLink
            className={`${
              currentPage === "about" ? "active-outline" : "passive-outline"
            }`}
          >
            <button
              className="cursor-pointer"
              onClick={() => {
                scrollToTop();
                navigate("./process");
                setCurrentPage("about");
              }}
            >
              About
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink
            className={`${
              currentPage === "content" ? "active-outline" : "passive-outline"
            }`}
          >
            <button
              className="cursor-pointer"
              onClick={() => {
                scrollToTop();
                navigate("./content");
                setCurrentPage("content");
              }}
            >
              Content
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink
            className={`${
              currentPage === "news" ? "active-outline" : "passive-outline"
            }`}
          >
            <button
              className="cursor-pointer"
              onClick={() => {
                scrollToTop();
                navigate("./news");
                setCurrentPage("news");
              }}
            >
              News & Updates
            </button>
          </NavigationMenuLink>
          <NavigationMenuLink
            className={`${
              currentPage === "leaderboard"
                ? "active-outline"
                : "passive-outline"
            }`}
          >
            <button
              className="cursor-pointer"
              onClick={() => {
                scrollToTop();
                navigate("./leaderboard");
                setCurrentPage("leaderboard");
              }}
            >
              Leaderboard
            </button>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );

  return (
    <NavigationMenu
      viewport={false}
      className="z-40 tracking-wider h-14 bg-size-[100%] **:font-black sticky top-0 flex flex-row w-full justify-between bg-[url(/ggk/images/navbar/background.png)] font-semibold **:text-base md:**:text-2xl z-30 shadow-xl/20"
    >
      {/*Left side: Logo button to go home*/}
      <div className="md:min-w-40">
        <NavigationMenuLink
          className={`max-w-12 h-12 ml-1 md:ml-4 bg-[url(images/logo/gizmo-icon.svg)] hover:bg-[url(images/logo/gizmo-icon-hover.svg)]`}
        >
          <button
            className="cursor-pointer"
            onClick={() => {
              scrollToTop();
              navigate("/home");
              setCurrentPage("home");
            }}
          >
            <img
              src="images/logo/gizmo-icon.svg "
              className="opacity-0 bottom-2 right-2 max-w-12 h-12 relative"
            />
          </button>
        </NavigationMenuLink>
      </div>
      {/*Center: Main navigation list. Depends on screen width.*/}
      {isMobileDevice ? mobileNavList : pcNavList}
      {/*Right side: Login button or profile dropdown, depending on whether you're logged in.*/}
      {loginNavbarItem}
    </NavigationMenu>
  );
};

export default Navbar;
