import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "./components/ui/navigation-menu"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import type { AccountSchema } from "./App";

interface NavbarParams {
    account: AccountSchema | null
    setCurrentPage: Function;
    currentPage: string | null
    setAccount: Function;
}


const Navbar = ({ account, setAccount, setCurrentPage, currentPage}: NavbarParams) => {
    const [username, setUsername] = useState("")
    const loginButton = <NavigationMenuLink className={`${currentPage === "login" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() => {navigate('/login'); setCurrentPage("login")}}>
                Login
            </button>
            </NavigationMenuLink>

    const [loginNavbarItem, setLoginNavbarItem] = useState(loginButton);
    const isMobileDevice = useMediaQuery({ maxWidth: 500 });
    const navigate = useNavigate();
    loginNavbarItem;

    const profileDropdown = <NavigationMenuItem className="list-none">
                <NavigationMenuTrigger className={`${currentPage === "profile" ? "bg-white" : "bg-inherit"}`}>
                    { isMobileDevice ? "" : username }                
                    <img src="/src/assets/pfp-placeholder.png" className='max-w-7 md:m-1' />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:min-w-30 *:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                        <button onClick={() => navigate('/stats')}>
                        My Stats
                        </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <button onClick={() => {setCurrentPage("login"); setAccount(null); localStorage.clear()}}>
                        Log Out
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>

    useEffect(() => {
        if (account) {
            setUsername(account.username); 
            setLoginNavbarItem(profileDropdown);
            navigate('*/');
        }
        else {
            setUsername("username");
            setLoginNavbarItem(loginButton);
            navigate('/login');
        };
    }, [account, username]);

    const pcNavList = <NavigationMenuList>
            <NavigationMenuLink className={`${currentPage === "about" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() =>{navigate('./about'); setCurrentPage("about")}}>
                About
            </button>
            </NavigationMenuLink>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={`${currentPage === "content" ? "bg-white" : "bg-inherit"}`}><button 
                    onClick={() => {navigate('./content'); setCurrentPage("content")}}>
                        Content
                    </button></NavigationMenuTrigger>
                <NavigationMenuContent className="*:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                    <button 
                    onClick={() => {navigate('./characters'); setCurrentPage("content")}}>
                        Characters
                    </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                    <button 
                    onClick={() => {navigate('./items'); setCurrentPage("content")}}>
                        Items
                    </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                    <button 
                    onClick={() => {navigate('./tracks'); setCurrentPage("content")}}>
                        Tracks
                    </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink className={`${currentPage === "news" ? "bg-white" : ""}`}>
            <button onClick={() => {navigate('./news'); setCurrentPage("news")}}>
                News & Updates
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink className={`${currentPage === "leaderboard" ? "bg-white" : ""}`}>
            <button onClick={() => {navigate('./leaderboard'); setCurrentPage("leaderboard")}}>
                Leaderboard
            </button>
            </NavigationMenuLink>
        </NavigationMenuList>

    const mobileNavList = <><NavigationMenuItem className="list-none">
        <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
        <NavigationMenuContent className="absolute min-w-36">
            <NavigationMenuLink className={`${currentPage === "about" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() =>{navigate('./about'); setCurrentPage("about")}}>
                About
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink className={`${currentPage === "content" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() =>{navigate('./content'); setCurrentPage("content")}}>
                Content
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink className={`${currentPage === "news" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() => {navigate('./news'); setCurrentPage("news")}}>
                News & Updates
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink className={`${currentPage === "leaderboard" ? "bg-white" : ""}`}>
            <button className="cursor-pointer" onClick={() => {navigate('./leaderboard'); setCurrentPage("leaderboard")}}>
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
                <img src="./images/content-assets/tempLogo.png" className='max-w-10' />
            </button>
            </NavigationMenuLink>
        </div>
        { isMobileDevice ? mobileNavList : pcNavList}
        <NavigationMenuItem className="list-none">
                <NavigationMenuTrigger className={`${currentPage === "profile" ? "bg-white" : "bg-inherit"}`}>
                    { isMobileDevice ? "" : "Username" }                
                    <img src="./images/pfp-placeholder.png" className='max-w-7 md:m-1' />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:min-w-30 *:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                        <button onClick={() => navigate('./stats')}>
                        My Stats
                        </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <button onClick={() => navigate('./login')}>
                        Log Out
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
    </NavigationMenu>
}

export default Navbar;
