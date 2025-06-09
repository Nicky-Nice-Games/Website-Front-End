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
    const navigate = useNavigate();

    return <NavigationMenu viewport={false} className="sticky top-0 flex flex-row w-full justify-between bg-[#F76902] font-semibold **:text-lg z-30">
        <div className="min-w-40">
            <NavigationMenuLink className="max-w-14">
            <button className="cursor-pointer" onClick={() => navigate('/home')}>
                <img src="images/landscape-placeholder.svg" className='max-w-10' />
            </button>
            </NavigationMenuLink>
        </div>
        <NavigationMenuList>
            <NavigationMenuLink >
            <button className="cursor-pointer" onClick={() => navigate('/about')}>
                About
            </button>
            </NavigationMenuLink>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-inherit"><button 
                    className="cursor-pointer"
                    onClick={() => navigate('/content')}>
                        Content
                    </button></NavigationMenuTrigger>
                <NavigationMenuContent className="*:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                    <button 
                    className="cursor-pointer"
                    onClick={() => navigate('/characters')}>
                        Characters
                    </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                    <button 
                    className="cursor-pointer"
                    onClick={() => navigate('/items')}>
                        Items
                    </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                    <button 
                    className="cursor-pointer"
                    onClick={() => navigate('/tracks')}>
                        Tracks
                    </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink>
            <button className="cursor-pointer" onClick={() => navigate('/newsAndUpdates')}>
                News & Updates
            </button>
            </NavigationMenuLink>
            <NavigationMenuLink>
            <button className="cursor-pointer" onClick={() => navigate('/leaderboard')}>
                Leaderboard
            </button>
            </NavigationMenuLink>
        </NavigationMenuList>
        <NavigationMenuItem className="list-none">
                <NavigationMenuTrigger className="bg-inherit">
                    Username                
                    <img src="images/pfp-placeholder.png" className='max-w-7 m-1' />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-30 *:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                        <button className="cursor-pointer" onClick={() => navigate('/playerStats')}>
                        My Stats
                        </button>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                        <button className="cursor-pointer" onClick={() => navigate('/login')}>
                        Log Out
                        </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
    </NavigationMenu>
}

export default Navbar;
