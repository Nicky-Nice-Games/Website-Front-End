import { useState, useEffect } from 'react';
import photo from '../../public/images/placeholder.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from '../components/footer';

const AboutPage = () => {
    //String arrays to hold each team's data
    const [teamData, setTeamData] = useState<string[]>([]);
    const [gspData, setGspData] = useState<string[][]>([]);
    const [rndData, setRndData] = useState<string[][]>([]);
    const [contentData, setContentData] = useState<string[][]>([]);
    const [levelData, setLevelData] = useState<string[][]>([]);
    const [supportData, setSupportData] = useState<string[][]>([]);
    const [qaData, setQaData] = useState<string[][]>([]);
    const [webData, setWebData] = useState<string[][]>([]);
    const [productionData, setProductionData] = useState<string[][]>([]);

    useEffect(() => {
        const getTeamData = async (): Promise<any> => {
            //Read in the team data from the file
            const repsonse: Response = await fetch("data/TheTeam.csv");
            const data = await repsonse.text();
            setTeamData(data.split("|"));

            //Create temporary arrays
            const tempTeamData = data.split("|");
            const tempGSPData: string[][] = [];
            const tempRNDData: string[][] = [];
            const tempLevelData: string[][] = [];
            const tempProductionData: string[][] = [];
            const tempContentData: string[][] = [];
            const tempQAData: string[][] = [];
            const tempSupportData: string[][] = [];
            const tempWebData: string[][] = [];

            //Add data from the team array 
            for (let index = 0; index < tempTeamData.length; index++) {
                const dataLine = tempTeamData[index].split(",");
                
                if (dataLine[0].trim() === "GSP") {
                    tempGSPData.push(dataLine);
                }
                if (dataLine[0].trim() === "RND") {
                    tempRNDData.push(dataLine);
                }
                if (dataLine[0].trim() === "Level Design") {
                    tempLevelData.push(dataLine);
                }
                if (dataLine[0].trim() === "Content") {
                    tempContentData.push(dataLine);
                }
                if (dataLine[0].trim() === "QA") {
                    tempQAData.push(dataLine);
                }
                if (dataLine[0].trim() === "Support") {
                    tempSupportData.push(dataLine);
                }
                if (dataLine[0].trim() === "Web") {
                    tempWebData.push(dataLine);
                }
                if (dataLine[0].trim() === "Production") {
                    tempProductionData.push(dataLine);
                }
            }

            //Set the actual data arrays with the data from 
            setGspData(tempGSPData);
            setContentData(tempContentData);
            setLevelData(tempLevelData);
            setProductionData(tempProductionData);
            setQaData(tempQAData);
            setRndData(tempRNDData);
            setSupportData(tempSupportData);
            setWebData(tempWebData);
        }

        getTeamData();

    }, [])

    useEffect(() => {
    console.log("GSP Data updated:", gspData);
    }, [gspData]); // runs every time gspData changes


    type PersonProps = {
        name: string;
        position: string;
        email: string;
    };

   function Person({ name, position, email }:PersonProps) {
    return (
        <div className="m-4 w-[200px]">
        <img src={photo} alt={`Photo of ${name}`} className="h-[200px]"/>
        <p className="person-name">{name}</p>
        <p className="person-position">{position}</p>
        <p className="person-email">{email}</p>
        </div>
    );
    }

    return(<>
        <main className='m-8'>
            <h1 className="font-black text-4xl m-4 mx-0"> About the Project</h1>

            <div className='flex items-stretch'>
                <p>
                Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui elementum neque lacus cursus lacus sem convallis enim. Ullamcorper dolor ultricies in mauris orci malesuada. Cursus commodo urna interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo pellentesque. Curabitur commodo nibh egestas pretium adipiscing rhoncus.
                Fermentum adipiscing fusce id scelerisque pellentesque ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi tempus lectus elit odio. Justo varius nisi.
                </p>
                <img src={photo} alt="Photo of the team" 
                className='m-8 mt-0 self-end w-[400px] h-[300px]'
                />
            </div>
            <h1 className='text-center text-4xl m-4 mx-0'>Meet the team!</h1>
            <div className='flex flex-column items-center w-full text-center'>
                <Tabs defaultValue="GSP" className="w-[400px] w-4/5 bg-orange-100 m-auto">

                <TabsList className='w-full'>
                    <TabsTrigger value="GSP">GSP</TabsTrigger>
                    <TabsTrigger value="Production">Production</TabsTrigger>
                    <TabsTrigger value="Level Design">Level Design</TabsTrigger>
                    <TabsTrigger value="Content">Content</TabsTrigger>
                    <TabsTrigger value="RND">RND</TabsTrigger>
                    <TabsTrigger value="QA">QA</TabsTrigger>
                    <TabsTrigger value="Support">Support</TabsTrigger>
                    <TabsTrigger value="Web">Web</TabsTrigger>

                </TabsList>
    
                <TabsContent value="GSP">
                    <h2 className='text-2xl m-1 mx-0'> {gspData.length > 0 ? gspData[0][0] : ("Loading...")}</h2>

                    <div className="flex flex-row flex-wrap w-full justify-center">
                        {gspData.map((personData, index) => (
                        <Person
                            key={index}
                            name={personData[1]}       // e.g., "Jane Doe"
                            position={personData[2]}   // e.g., "Producer"
                            email={personData[3]}      // e.g., "jane@example.com"
                        />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Production">
                    <h2 className='text-2xl m-1 mx-0'> {productionData.length > 0 ? productionData[0][0] : ("Loading...")}</h2>

                    <div className="flex flex-row flex-wrap w-full justify-center">
                        {productionData.map((personData, index) => (
                        <Person
                            key={index}
                            name={personData[1]}       // e.g., "Jane Doe"
                            position={personData[2]}   // e.g., "Producer"
                            email={personData[3]}      // e.g., "jane@example.com"
                        />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Level Design">
                    <h2 className='text-2xl m-1 mx-0'> {levelData.length > 0 ? levelData[0][0] : ("Loading...")}</h2>

                    <div className="flex flex-row flex-wrap w-full justify-center">
                        {levelData.map((personData, index) => (
                        <Person
                            key={index}
                            name={personData[1]}       // e.g., "Jane Doe"
                            position={personData[2]}   // e.g., "Producer"
                            email={personData[3]}      // e.g., "jane@example.com"
                        />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Content">
                    <h2 className='text-2xl m-1 mx-0'> {contentData.length > 0 ? contentData[0][0] : ("Loading...")}</h2>

                    <div className="flex flex-row flex-wrap w-full justify-center">
                        {contentData.map((personData, index) => (
                        <Person
                            key={index}
                            name={personData[1]}       // e.g., "Jane Doe"
                            position={personData[2]}   // e.g., "Producer"
                            email={personData[3]}      // e.g., "jane@example.com"
                        />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="QA">
                    <h2 className='text-2xl m-1 mx-0'> {qaData.length > 0 ? qaData[0][0] : ("Loading...")}</h2>

                    <div className="flex flex-row flex-wrap w-full justify-center">
                        {qaData.map((personData, index) => (
                        <Person
                            key={index}
                            name={personData[1]}       // e.g., "Jane Doe"
                            position={personData[2]}   // e.g., "Producer"
                            email={personData[3]}      // e.g., "jane@example.com"
                        />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Support">
                    <h2 className='text-2xl m-1 mx-0'> {supportData.length > 0 ? supportData[0][0] : ("Loading...")}</h2>

                    <div className="flex flex-row flex-wrap w-full justify-center">
                        {supportData.map((personData, index) => (
                        <Person
                            key={index}
                            name={personData[1]}       // e.g., "Jane Doe"
                            position={personData[2]}   // e.g., "Producer"
                            email={personData[3]}      // e.g., "jane@example.com"
                        />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Web">
                    <h2 className='text-2xl m-1 mx-0'> {webData.length > 0 ? webData[0][0] : ("Loading...")}</h2>

                    <div className="flex flex-row flex-wrap w-full justify-center">
                        {webData.map((personData, index) => (
                        <Person
                            key={index}
                            name={personData[1]}       // e.g., "Jane Doe"
                            position={personData[2]}   // e.g., "Producer"
                            email={personData[3]}      // e.g., "jane@example.com"
                        />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="RND">
                    <h2 className='text-2xl m-1 mx-0'> {rndData.length > 0 ? rndData[0][0] : ("Loading...")}</h2>

                    <div className="flex flex-row flex-wrap w-full justify-center">
                        {rndData.map((personData, index) => (
                        <Person
                            key={index}
                            name={personData[1]}       // e.g., "Jane Doe"
                            position={personData[2]}   // e.g., "Producer"
                            email={personData[3]}      // e.g., "jane@example.com"
                        />
                        ))}
                    </div>
                </TabsContent>
                </Tabs>
            </div>
        </main>
        </>
    );
}
export default AboutPage