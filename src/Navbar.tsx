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
    setAccount: Function;
}


const Navbar = ({ account, setAccount}: NavbarParams) => {
    const navbarButton: string = "bg-size-[100%_100%] bg-[url(images/navbar/button.png)] hover:bg-[url(images/navbar/button-hover.png)] active:bg-[url(images/navbar/button-active.png)]";

    const [currentPage, setCurrentPage] = useState("home");
    const [username, setUsername] = useState("")
    const loginButton = <NavigationMenuLink className={`${navbarButton}`}>
            <button className={`cursor-pointer ${currentPage == "login" ? "active-outline" : "passive-outline"}`} onClick={() => {navigate('/login'); setCurrentPage("login")}}>
                Login
            </button>
            </NavigationMenuLink>

    const [loginNavbarItem, setLoginNavbarItem] = useState(loginButton);
    const isMobileDevice = useMediaQuery({ maxWidth: 500 });
    const navigate = useNavigate();
    loginNavbarItem;

    
    const profileDropdown = <NavigationMenuItem className="list-none">
                <NavigationMenuTrigger className={`${navbarButton} bg-inherit`}>
                    <button className={`${currentPage === "stats" ? "active-outline" : "passive-outline"}`}>{ isMobileDevice ? "" : username }</button>                
                    <img src="/src/assets/pfp-placeholder.png" className='max-w-7 md:m-1' />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="md:min-w-30 *:hover:bg-[#F76902] absolute">
                    <NavigationMenuLink>
                        <button onClick={() => { navigate('/stats'); setCurrentPage("stats"); }}>
                        My Stats
                        </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <button onClick={() => { navigate('/login'); setCurrentPage("login"); setAccount(null); localStorage.clear()}}>
                        Log Out
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>

    useEffect(() => {
        if (account) {
            setUsername(account.username); 
            setLoginNavbarItem(profileDropdown);
            navigate('/home');
        }
        else {
            setUsername("username");
            setLoginNavbarItem(loginButton);
        };
    }, [account, username]);

    useEffect(() => {
        if (account) setLoginNavbarItem(profileDropdown);
        else setLoginNavbarItem(loginButton);
    }, [currentPage])

    const pcNavList = <NavigationMenuList>
            <NavigationMenuLink className={`${navbarButton}`}>
            <button className={`cursor-pointer ${currentPage === "about" ? "active-outline" : "passive-outline"}`} onClick={() =>{navigate('/about'); setCurrentPage("about")}}>
                About
            </button>
            </NavigationMenuLink>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={`${navbarButton} bg-inherit`}><button 
                    className={`${currentPage === "content" ? "active-outline" : "passive-outline"}`}
                    onClick={() => {navigate('/content'); setCurrentPage("content")}}>
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
            <NavigationMenuLink className={`${navbarButton}`}>
            <button className={`${currentPage === "news" ? "active-outline" : "passive-outline"} mx-1`} onClick={() => {navigate('/news'); setCurrentPage("news")}}>
                News & Updates
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink className={`${navbarButton}`}>
            <button className={`${currentPage === "leaderboard" ? "active-outline" : "passive-outline"} mx-1`} onClick={() => {navigate('/leaderboard'); setCurrentPage("leaderboard")}}>
                Leaderboard
            </button>
            </NavigationMenuLink>
        </NavigationMenuList>

    const mobileNavList = <><NavigationMenuItem className="list-none">
        <NavigationMenuTrigger className={`${navbarButton} bg-inherit`}><p className="passive-outline">Pages</p></NavigationMenuTrigger>
        <NavigationMenuContent className="absolute -left-5 min-w-30">
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

    return <NavigationMenu viewport={false} className={`bebas bg-size-[100%] **:font-black sticky top-0 flex flex-row w-full justify-between bg-[url(images/navbar/background.png)] font-semibold **:text-base md:**:text-2xl z-30`}>
        <div className="md:min-w-40">
            <NavigationMenuLink className={`max-w-14 ${navbarButton}`}>
            <button className="cursor-pointer" onClick={() => {navigate('/home'); setCurrentPage("home")}}>
                <img src="./images/content-assets/tempLogo.png" className='max-w-10' />
            </button>
            </NavigationMenuLink>
        </div>
        { isMobileDevice ? mobileNavList : pcNavList}
        { loginNavbarItem }
    </NavigationMenu>
}

export default Navbar;
