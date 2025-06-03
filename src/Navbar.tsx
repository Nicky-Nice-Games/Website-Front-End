import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "./components/ui/navigation-menu"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return <NavigationMenu viewport={false} className="flex flex-row w-full justify-between bg-[#F76902] font-semibold">
        <NavigationMenuLink>
            <button onClick={() => navigate('/home')}>
                <img src="images/landscape-placeholder.svg" className='max-w-10' />
            </button>
        </NavigationMenuLink>
        <NavigationMenuList>
            <NavigationMenuLink>
            <button onClick={() => navigate('/about')}>
                About
            </button>
            </NavigationMenuLink>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-inherit">Content</NavigationMenuTrigger>
                <NavigationMenuContent className="*:hover:bg-[#F76902]">
                    <NavigationMenuLink>
                    <button 
                    onClick={() => navigate('/content')}>
                        Overview
                    </button>
                    </NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink>
            <button onClick={() => navigate('/newsAndUpdates')}>
                News & Updates
            </button>
            </NavigationMenuLink>
            <NavigationMenuItem>
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
            </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuItem className="list-none">
                <NavigationMenuTrigger className="bg-inherit">
                    Username                
                    <img src="images/landscape-placeholder.svg" className='max-w-7' />
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-30 *:hover:bg-[#F76902]">
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
