import { useNavigate } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProcessPage = () => {
    const photo:string = 'images/placeholder.PNG';

    return(<>
    <main className="ml-[2rem] mr-[2rem]">
        <div>
            <h1 className="font-black text-4xl m-4 mx-0 mb-[2rem]"> About the Project</h1>
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
            <h1 className="font-black text-4xl m-4 mx-0 mb-[2rem]">Designing the Game</h1>
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
            <h1 className="font-black text-[60px] m-4 mx-0 mt-[2rem] graffiti mb-[2rem]">Designing our characters</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui elementum neque lacus cursus lacus sem convallis enim. Ullamcorper dolor ultricies in mauris orci malesuada. Cursus commodo urna interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo pellentesque. Curabitur commodo nibh egestas pretium adipiscing rhoncus.
            </p>
            <div className="mt-[2rem] flex flex-row flex-wrap w-full justify-center">
                <img src={photo} alt="Picture of RIT"
                    className='m-[1rem] md:mt-0 self-center md:self-end md:w-1/4 w-[100%]'     
                />
                <img src={photo} alt="Picture of RIT"
                    className='m-[1rem] md:mt-0 self-center md:self-end md:w-1/4 w-[100%]'     
                />
                <img src={photo} alt="Picture of RIT"
                    className='m-[1rem] md:mt-0 self-center md:self-end md:w-1/4 w-[100%]'     
                />
                <img src={photo} alt="Picture of RIT"
                    className='m-[1rem] md:mt-0 self-center md:self-end md:w-1/4 w-[100%]'     
                />
                <img src={photo} alt="Picture of RIT"
                    className='m-[1rem] md:mt-0 self-center md:self-end md:w-1/4 w-[100%]'     
                />
                <img src={photo} alt="Picture of RIT"
                    className='m-[1rem] md:mt-0 self-center md:self-end md:w-1/4 w-[100%]'     
                />
            </div>
        </div>
        
        <h1 className="font-black text-[50px] m-4 mx-0 mt-[2rem] bebas mb-[2rem]">Building our Tracks</h1>

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
