import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "./components/ui/navigation-menu"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState("home");
    const isMobileDevice = useMediaQuery({ maxWidth: 500 });

    const navigate = useNavigate();

    const pcNavList = <NavigationMenuList>
            <NavigationMenuLink className={`${currentPage === "about" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() =>{navigate('/about'); setCurrentPage("about")}}>
                About
            </button>
            </NavigationMenuLink>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-inherit"><button 
                    onClick={() => navigate('/content')}>
                        Content
                    </button></NavigationMenuTrigger>
                <NavigationMenuContent className="*:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                    <button 
                    onClick={() => navigate('/characters')}>
                        Characters
                    </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                    <button 
                    onClick={() => navigate('/items')}>
                        Items
                    </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                    <button 
                    onClick={() => navigate('/tracks')}>
                        Tracks
                    </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink>
            <button onClick={() => navigate('/newsAndUpdates')}>
                News & Updates
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink>
            <button onClick={() => navigate('/leaderboard')}>
                Leaderboard
            </button>
            </NavigationMenuLink>
            {/* <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-inherit">Community</NavigationMenuTrigger>
                <NavigationMenuContent className="*:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                    <button onClick={() => navigate('/forum')}>
                        Forum
                    </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                    <button onClick={() => navigate('/leaderboard')}>
                        Leaderboards
                    </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem> */}
        </NavigationMenuList>

    const mobileNavList = <><NavigationMenuItem className="list-none">
        <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
        <NavigationMenuContent>
            <NavigationMenuLink className={`${currentPage === "about" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() =>{navigate('/about'); setCurrentPage("about")}}>
                About
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink className={`${currentPage === "content" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() =>{navigate('/content'); setCurrentPage("content")}}>
                Content
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink className={`${currentPage === "news" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() => {navigate('/news'); setCurrentPage("news")}}>
                News & Updates
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink className={`${currentPage === "leaderboard" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() => {navigate('/leaderboard'); setCurrentPage("leaderboard")}}>
                Leaderboard
            </button>
            </NavigationMenuLink>
        </NavigationMenuContent>
        </NavigationMenuItem>
    </>

    return <NavigationMenu viewport={false} className="sticky top-0 flex flex-row w-full justify-between bg-[#F76902] font-semibold **:text-sm md:**:text-base lg:**:text-lg z-30">
        <div className="md:min-w-40">
            <NavigationMenuLink className={`max-w-14 ${currentPage === "home" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() => {navigate('/home'); setCurrentPage("home")}}>
                <img src="images/landscape-placeholder.svg" className='max-w-10' />
            </button>
            </NavigationMenuLink>
        </div>
        { isMobileDevice ? mobileNavList : pcNavList}
        <NavigationMenuItem className="list-none">
                <NavigationMenuTrigger className={`${currentPage === "profile" ? "bg-white" : "bg-inherit"}`}>
                    { isMobileDevice ? "" : "Username" }                
                    <img src="images/pfp-placeholder.png" className='max-w-7 md:m-1' />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:min-w-30 *:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                        <button onClick={() => navigate('/playerStats')}>
                        My Stats
                        </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <button onClick={() => navigate('/login')}>
                        Log Out
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
    </NavigationMenu>
}

export default Navbar;
