import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "./components/ui/navigation-menu"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState("home");

    const navigate = useNavigate();

    return <NavigationMenu viewport={false} className="sticky top-0 flex flex-row w-full justify-between bg-[#F76902] font-semibold **:text-lg z-30">
        <div className="min-w-40">
            <NavigationMenuLink className={`max-w-14 ${currentPage === "home" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() => {navigate('/home'); setCurrentPage("home")}}>
                <img src="images/landscape-placeholder.svg" className='max-w-10' />
            </button>
            </NavigationMenuLink>
        </div>
        <NavigationMenuList>
            <NavigationMenuLink className={`${currentPage === "about" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() =>{navigate('/about'); setCurrentPage("about")}}>
                About
            </button>
            </NavigationMenuLink>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={`${currentPage === "content" ? "bg-white" : "bg-inherit"}`}><button 
                    className="cursor-pointer"
                    onClick={() => {navigate('/content'); setCurrentPage("content")}}>
                        Content
                    </button></NavigationMenuTrigger>
                <NavigationMenuContent className="*:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                    <button 
                    className="cursor-pointer"
                    onClick={() => {navigate('/content/characters'); setCurrentPage("content")}}>
                        Characters
                    </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                    <button 
                    className="cursor-pointer"
                    onClick={() => {navigate('/content/items'); setCurrentPage("content")}}>
                        Items
                    </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                    <button 
                    className="cursor-pointer"
                    onClick={() => {navigate('/content/tracks'); setCurrentPage("content")}}>
                        Tracks
                    </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
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
        </NavigationMenuList>
        <NavigationMenuItem className="list-none">
                <NavigationMenuTrigger className={`${currentPage === "profile" ? "bg-white" : "bg-inherit"}`}>
                    Username                
                    <img src="images/pfp-placeholder.png" className='max-w-7 m-1' />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-30 *:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                        <button className="cursor-pointer" onClick={() => {navigate('/stats'); setCurrentPage("profile")}}>
                        My Stats
                        </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <button className="cursor-pointer" onClick={() => {navigate('/login'); setCurrentPage("login")}}>
                        Log Out
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
    </NavigationMenu>
}

export default Navbar;
