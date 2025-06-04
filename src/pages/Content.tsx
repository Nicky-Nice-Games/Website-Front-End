import { useNavigate } from "react-router-dom";

//import ItemsPage from './Items';
// import CharactersPage from './Characters';
// import TracksPage from './Tracks';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "../components/ui/navigation-menu"

const ContentPage = () => {
    return (<>
        <ContentNavigator />
    </>)
}

const ContentNavigator = () => {
    const navigate = useNavigate();

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <button className="p-1 m-1 hover:bg-[#F76902] rounded-sm" onClick={() => navigate("/characters")}>Characters</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className="p-1 m-1 hover:bg-[#F76902] rounded-sm" onClick={() => navigate("/items")}>Items</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className="p-1 m-1 hover:bg-[#F76902] rounded-sm" onClick={() => navigate("/tracks")}>Tracks</button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}

const ItemsPage = () => {
    return (
        <>
            <ContentNavigator />
            <h2 className="text-black">Items Page</h2>
        </>
    );
}

const TracksPage = () => {
    return (
        <>
            <ContentNavigator />
            <h2 className="text-black">Tracks Page</h2>
        </>
    );
}

const CharactersPage = () => {
    return (
        <>
            <ContentNavigator />
            <h2 className="text-black">Character Page</h2>
        </>
    );
}

export {
    ContentPage,
    CharactersPage,
    ItemsPage,
    TracksPage
}