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

import PlaceholderImg from "../../public/images/pfp-placeholder.png"
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
           <div className="px-8">
  <h2 className="text-black text-3xl ml-8">Items Page</h2>

  <div className="grid grid-cols-6 gap-4 p-8 mx-auto max-w-6xl">
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>

    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
    <div className="bg-gray-300 border-2 border-gray-600 rounded-xl h-24 w-24 flex items-center justify-center">
      <img
        src={PlaceholderImg}
        alt="Item placeholder image"
        className="h-16 w-16"
      />
    </div>
  </div>
</div>

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