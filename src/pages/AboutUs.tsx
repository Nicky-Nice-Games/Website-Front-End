import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchData } from '@/utils';

const AboutUsPage = () => {
    //String arrays to hold each team's data
    const [gspData, setGspData] = useState<string[][]>([]);
    const [rndData, setRndData] = useState<string[][]>([]);
    const [contentData, setContentData] = useState<string[][]>([]);
    const [levelData, setLevelData] = useState<string[][]>([]);
    const [supportData, setSupportData] = useState<string[][]>([]);
    const [qaData, setQaData] = useState<string[][]>([]);
    const [webData, setWebData] = useState<string[][]>([]);
    const [productionData, setProductionData] = useState<string[][]>([]);
    const [advisoryData, setAdvData] = useState<string[][]>([]);


    useEffect(() => {
        const setTeamData = (data:string) => {
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
            const tempAdvData: string[][] = [];

            //Add data from the team array 
            for (let index = 0; index < tempTeamData.length; index++) {
                const dataLine = tempTeamData[index].split(",");

                if (dataLine[0].trim() === "GSP") {
                    tempGSPData.push(dataLine);
                }
                  if (dataLine[0].trim() === "Advisory") {
                    tempAdvData.push(dataLine);
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
            setAdvData(tempAdvData);
        }

        fetchData('GET', './data/TheTeam.csv', "text", setTeamData)

    }, [])

    useEffect(() => {
        console.log("GSP Data updated:", gspData);
    }, [gspData]); // runs every time gspData changes


    type PersonProps = {
        name: string;
        position: string;
        email: string;
        image: string;
    };

    function Person({ name, position, email, image }: PersonProps) {
        return (
            // 
            //rounded-full outline-[7px] outline-[#38bdf8]
            <div className="m-4 w-[200px] drop-shadow-xl/50
                rounded-md p-1 bg-[url(images/tabs-card.png)] 
                bg-cover bg-no-repeat bg-center opacity-100">
                <img src={image} alt={`Photo of ${name}`} 
                className="h-[200px] mb-[1rem]" /> 
                <p className="text-[20px] person-name font-bold">{name}</p>
                <p className="text-[18px] person-position px-2">{position}</p>
                <a className="text-[18px] font-bold text-[#d97706]" 
                href={`mailto:${email}`}>{email}</a>
            </div>
        );
    }

    return (<>
        <main className="p-4 md:p-8 bg-[#18181b] bg-fixed bg-size-[90%] md:bg-size-[60%] bg-repeat"
                style={{ backgroundImage: "url(' images/items-background.png')" }}>
            {/* <h1 className='text-center text-4xl m-4 mx-0'>Meet the team!</h1> */}
            <img src=" images/test-header-banner.png"
            className='flex justify-self-center w-[100%] md:w-[50%] mb-[2rem]'></img>
            <div className='flex flex-column items-center w-full text-center'>
                <Tabs defaultValue="GSP" className="w-[400px] w-9/10 
                bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover m-auto">

                    <TabsList className='w-full flex-wrap flex-column h-full'>
                        <TabsTrigger value="GSP">Game Systems Programing</TabsTrigger>
                        <TabsTrigger value="Production">Production</TabsTrigger>
                        <TabsTrigger value="Level Design">Level Design</TabsTrigger>
                        <TabsTrigger value="Content">Content</TabsTrigger>
                        <TabsTrigger value="RND">Research Development</TabsTrigger>
                        <TabsTrigger value="QA">Quality Assurance</TabsTrigger>
                        <TabsTrigger value="Support">Support</TabsTrigger>
                        <TabsTrigger value="Web">Web</TabsTrigger>
                        <TabsTrigger value="Advisory">Advisory</TabsTrigger>

                    </TabsList>

                    <TabsContent value="GSP">
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#e5e7eb] mt-2'> {gspData.length > 0 ? ("Gameplay & Systems Programming") : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>


                        <div className="flex flex-row flex-wrap w-full justify-center">
                            {gspData.map((personData, index) => (
                                <Person
                                    key={index}
                                    name={personData[1]}       // e.g., "Jane Doe"
                                    position={personData[2]}   // e.g., "Producer"
                                    email={personData[3]}      // e.g., "jane@example.com"
                                    image={personData[4]}
                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="Production">
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#e5e7eb] mt-2'> {productionData.length > 0 ? productionData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <div className="flex flex-row flex-wrap w-full justify-center">
                            {productionData.map((personData, index) => (
                                <Person
                                    key={index}
                                    name={personData[1]}       // e.g., "Jane Doe"
                                    position={personData[2]}   // e.g., "Producer"
                                    email={personData[3]}      // e.g., "jane@example.com"
                                    image={personData[4]}
                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="Level Design">
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#e5e7eb] mt-2'> {levelData.length > 0 ? levelData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className="flex flex-row flex-wrap w-full justify-center">
                            {levelData.map((personData, index) => (
                                <Person
                                    key={index}
                                    name={personData[1]}       // e.g., "Jane Doe"
                                    position={personData[2]}   // e.g., "Producer"
                                    email={personData[3]}      // e.g., "jane@example.com"
                                    image={personData[4]}

                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="Content">
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#e5e7eb] mt-2'> {contentData.length > 0 ? contentData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <div className="flex flex-row flex-wrap w-full justify-center">
                            {contentData.map((personData, index) => (
                                <Person
                                    key={index}
                                    name={personData[1]}       // e.g., "Jane Doe"
                                    position={personData[2]}   // e.g., "Producer"
                                    email={personData[3]}      // e.g., "jane@example.com"
                                    image={personData[4]}
                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="QA">
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#e5e7eb] mt-2'> {qaData.length > 0 ? qaData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <div className="flex flex-row flex-wrap w-full justify-center">
                            {qaData.map((personData, index) => (
                                <Person
                                    key={index}
                                    name={personData[1]}       // e.g., "Jane Doe"
                                    position={personData[2]}   // e.g., "Producer"
                                    email={personData[3]}      // e.g., "jane@example.com"
                                    image={personData[4]}
                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="Support">
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#e5e7eb] mt-2'> {supportData.length > 0 ? supportData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <div className="flex flex-row flex-wrap w-full justify-center">
                            {supportData.map((personData, index) => (
                                <Person
                                    key={index}
                                    name={personData[1]}       // e.g., "Jane Doe"
                                    position={personData[2]}   // e.g., "Producer"
                                    email={personData[3]}      // e.g., "jane@example.com"
                                    image={personData[4]}

                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="Web">
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#e5e7eb] mt-2'> {webData.length > 0 ? webData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <div className="flex flex-row flex-wrap w-full justify-center">
                            {webData.map((personData, index) => (
                                <Person
                                    key={index}
                                    name={personData[1]}       // e.g., "Jane Doe"
                                    position={personData[2]}   // e.g., "Producer"
                                    email={personData[3]}      // e.g., "jane@example.com"
                                    image={personData[4]}

                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="RND">
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#e5e7eb] mt-2'> {rndData.length > 0 ? rndData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <div className="flex flex-row flex-wrap w-full justify-center">
                            {rndData.map((personData, index) => (
                                <Person
                                    key={index}
                                    name={personData[1]}       // e.g., "Jane Doe"
                                    position={personData[2]}   // e.g., "Producer"
                                    email={personData[3]}      // e.g., "jane@example.com"
                                    image={personData[4]}

                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="Advisory">
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#e5e7eb] mt-2'> {advisoryData.length > 0 ? advisoryData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <div className="flex flex-row flex-wrap w-full justify-center">
                            {advisoryData.map((personData, index) => (
                                <Person
                                    key={index}
                                    name={personData[1]}       // e.g., "Jane Doe"
                                    position={personData[2]}   // e.g., "Producer"
                                    email={personData[3]}      // e.g., "jane@example.com"
                                    image={personData[4]}

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
export default AboutUsPage