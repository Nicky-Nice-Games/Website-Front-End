import { useNavigate } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import { CharactersProcess } from "@/components/characters-process";
const ProcessPage = () => {
    const photo:string = 'images/placeholder.PNG';
    const [isVisible, setIsVisible] = useState(false);

    type PopUpProps = {
        name:string
        concepts: string;
        conceptsCap: string;
        designSheet: string;
        designSheetCap: string;
    };

    function PopUp({ name, concepts, conceptsCap }: PopUpProps) {
        const [isVisible, setIsVisible] = useState(true);

        if (!isVisible) return null;

        return (
            <div className="fixed top-[25%] left-[20%] w-[60%] z-4 bg-[#e2e8f0]">
                <div className="absolute top-[1rem] right-[1rem] cursor-pointer" onClick={() => setIsVisible(false)}>
                    <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" 
                            fill="currentColor" 
                            fillRule="evenodd" 
                            clipRule="evenodd" />
                    </svg>
                </div>
                <h1>{name}</h1>
                <div className="flex flex-wrap">
                    <div className="flex flex-column">
                        <img src={concepts} alt="Concept" />
                        <p>{conceptsCap}</p>
                    </div>
                </div>
            </div>
        );
    }

    return(<>
    <main className="ml-[2rem] mr-[2rem]">
        <div>
            <h1 className="text-[60px] painterz m-4 mx-0 mb-[2rem]"> About the Project</h1>
            <div className='flex md:flex-row flex-col items-stretch'>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui elementum neque lacus cursus lacus sem convallis enim. Ullamcorper dolor ultricies in mauris orci malesuada. Cursus commodo urna interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo pellentesque. Curabitur commodo nibh egestas pretium adipiscing rhoncus.
                    Fermentum adipiscing fusce id scelerisque pellentesque ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi tempus lectus elit odio. Justo varius nisi.
                </p>
                <img src={photo} alt="Photo of the team"
                    className='ml-[2rem] md:mt-0 self-center md:self-end md:w-[400px] w-[100%] h-[300px]'
                />

            </div>
        </div>

        <div>
            <h1 className="text-[60px] painterz m-4 mx-0 mb-[2rem]">Designing the Game</h1>
            <div className='flex md:flex-row flex-col items-stretch'>
                <img src={photo} alt="Picture of RIT"
                    className='mr-[2rem] mb-[2rem] md:mt-0 self-center md:self-end 
                    md:w-[400px] w-1/4'
                />
                <p className="">
                    Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui elementum neque lacus cursus lacus sem convallis enim. Ullamcorper dolor ultricies in mauris orci malesuada. Cursus commodo urna interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo pellentesque. Curabitur commodo nibh egestas pretium adipiscing rhoncus.
                    Fermentum adipiscing fusce id scelerisque pellentesque ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi tempus lectus elit odio. Justo varius nisi.
                </p>
            </div>
            <div className='flex md:flex-row flex-col items-stretch'>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui elementum neque lacus cursus lacus sem convallis enim. Ullamcorper dolor ultricies in mauris orci malesuada. Cursus commodo urna interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo pellentesque. Curabitur commodo nibh egestas pretium adipiscing rhoncus.
                    Fermentum adipiscing fusce id scelerisque pellentesque ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi tempus lectus elit odio. Justo varius nisi.
                </p>
                <img src={photo} alt="Picture of RIT"
                    className='md:mt-0 self-center md:self-end md:w-[400px] w-1/4'
                />
            </div>
        </div>
        <div>
            <h1 className="text-[60px] mx-0 m-4 mt-[2rem] painterz mb-[2rem]">
                Designing our characters
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui elementum neque lacus cursus lacus sem convallis enim. Ullamcorper dolor ultricies in mauris orci malesuada. Cursus commodo urna interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo pellentesque. Curabitur commodo nibh egestas pretium adipiscing rhoncus.
            </p>
    
            <CharactersProcess></CharactersProcess>
        </div>
        
        <h1 className="text-[60px] m-4 mx-0 mt-[2rem] painterz mb-[2rem]">Building our Tracks</h1>

        <div className="flex flex-row flex-wrap w-full justify-center">
            <Tabs defaultValue="track1">
                <TabsList>
                    <TabsTrigger value="track1">Track 1</TabsTrigger>
                    <TabsTrigger value="track2">Track 2</TabsTrigger>
                    <TabsTrigger value="track3">Track 3</TabsTrigger>
                    <TabsTrigger value="track4">Track 4</TabsTrigger>
                </TabsList>
                <TabsContent value="track1">Info about Track 1.</TabsContent>
                <TabsContent value="track2">Info about Track 2.</TabsContent>
                <TabsContent value="track3">Info about Track 3.</TabsContent>
                <TabsContent value="track4">Info about Track 4.</TabsContent>

            </Tabs>
        </div>

    </main>
    </>)
}
export default ProcessPage
