import { useNavigate } from "react-router-dom";

//import ItemsPage from './Items';
// import CharactersPage from './Characters';
// import TracksPage from './Tracks';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "../components/ui/navigation-menu"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const ContentPage = () => {
    return (<>
        <ContentNavigator />
        <div className="grid grid-cols-2">
            <div>
                <h3 className="text-center text-4xl m-2 font-black">About the Location</h3>
                <p className="m-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit porro quaerat deserunt! Fuga veritatis porro quo ipsum aperiam, laboriosam, exercitationem quas eveniet magnam quae ex dicta iure. Quo, deleniti sint? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sint quia temporibus odit et architecto? Excepturi corrupti architecto eos repellat, eligendi eum, iste inventore, reprehenderit ratione harum porro ut dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Labore nobis tempora, minus accusamus assumenda doloremque fuga, neque vero consectetur at temporibus praesentium minima mollitia perferendis officia sit deleniti!</p>
            </div>
            <img className="" src="images/landscape-placeholder.svg"></img>
        </div>

    </>)
}

const ContentNavigator = () => {
    const navigate = useNavigate();

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <button className="p-1 m-1 font-bold hover:bg-[#F76902] rounded-sm text-lg" onClick={() => navigate("/characters")}>Characters</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className="p-1 m-1 font-bold hover:bg-[#F76902] rounded-sm text-lg" onClick={() => navigate("/items")}>Items</button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <button className="p-1 m-1 font-bold hover:bg-[#F76902] rounded-sm text-lg" onClick={() => navigate("/tracks")}>Tracks</button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}

const CharactersPage = () => {
    return (
        <>
            <ContentNavigator />
            <h2 className="font-black">Character Page</h2>
        </>
    );
}

const ItemsPage = () => {
    return (
        <>
            <ContentNavigator />
            <h2 className="font-black">Items Page</h2>
        </>
    );
}

const TracksPage = () => {
    return (
        <>
            <ContentNavigator />
            <h2 className="text-white text-center text-xl rounded-lg bg-[#7C878E] relative top-4 z-10 w-50 m-auto">Tracks</h2>
            <Carousel className="text-center border-solid border-slate-400 border-8 rounded-3xl w-200 m-auto">
                <CarouselContent>
                    <CarouselItem><img src="images/placeholder.PNG" className="rounded-xl h-80 m-auto w-full h-full"/></CarouselItem>
                    <CarouselItem><img src="images/placeholder.PNG" className="rounded-xl h-80 m-auto w-full h-full"/></CarouselItem>
                    <CarouselItem><img src="images/placeholder.PNG" className="rounded-xl h-80 m-auto w-full h-full"/></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}

export {
    ContentPage,
    CharactersPage,
    ItemsPage,
    TracksPage
}