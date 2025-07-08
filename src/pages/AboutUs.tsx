import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

    useEffect(() => {
        const getTeamData = async (): Promise<any> => {
            //Read in the team data from the file
            const repsonse: Response = await fetch("./data/TheTeam.csv");
            const data = await repsonse.text();

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
        image: string;
    };

    function Person({ name, position, email, image }: PersonProps) {
        return (
            // 
            //rounded-full outline-[7px] outline-[#38bdf8]
            <div className="m-4 p-4 w-[200px] drop-shadow-xl/50
                rounded-md p-1 bg-[url(images/tabs-card.png)] 
                bg-cover bg-no-repeat bg-center opacity-100">
                <img src={image} alt={`Photo of ${name}`} 
                className="h-[160px] mb-[1rem] text-center flex justify-self-center"/> 
                <p className="text-[18px] person-name font-bold">{name}</p>
                <p className="text-[16px] person-position px-2">{position}</p>
                <a className="text-[16px] font-bold text-[#d97706]" 
                href={`mailto:${email}`}>{email}</a>
            </div>
        );
    }

    return (<>
        <main className="p-4 md:p-8 md:pl-3 md:pr-3 md:pb-[4rem] bg-[#18181b] 
                bg-fixed bg-size-[90%] md:bg-size-[60%] bg-repeat"
                style={{ backgroundImage: "url('/ggk/images/items-background.png')" }}>
            {/* <h1 className='text-center text-4xl m-4 mx-0'>Meet the team!</h1> */}
            <img src="/ggk/images/test-header-banner.png"
            className='flex justify-self-center w-[100%] md:w-[50%] mb-[2rem]'></img>
            <div className='flex flex-column items-center w-full text-center'>
                <Tabs defaultValue="Content" className="w-[400px] w-9/10 pb-[2rem] m-auto">

                    <TabsList className='w-full flex-wrap flex-column h-full text-[14px]'>
                        <TabsTrigger value="Content">Content</TabsTrigger>
                        <TabsTrigger value="GSP">Game Systems Programing</TabsTrigger>
                        <TabsTrigger value="Level Design">Level Design</TabsTrigger>
                        <TabsTrigger value="RND">Research Development</TabsTrigger>
                        <TabsTrigger value="Advisory">Advisory</TabsTrigger>
                        <TabsTrigger value="Production">Production</TabsTrigger>
                        <TabsTrigger value="QA">Quality Assurance</TabsTrigger>
                        <TabsTrigger value="Support">Support</TabsTrigger>
                        <TabsTrigger value="Web">Web</TabsTrigger>

                    </TabsList>

                    <TabsContent value="GSP" 
                    className='bg-[url(images/card-background-transparent.png)] 
                    bg-no-repeat bg-cover pb-[2rem]'>
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#fed7aa] mt-4'> {gspData.length > 0 ? ("Gameplay and Systems Programming") : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>

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
                    <TabsContent value="Production"
                    className='bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover pb-[2rem]'>
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#fed7aa] mt-4'> {productionData.length > 0 ? productionData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>

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
                    <TabsContent value="Level Design"
                    className='bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover pb-[2rem]'>
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#fed7aa] mt-4'> {levelData.length > 0 ? levelData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>

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
                    <TabsContent value="Content"
                    className='bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover pb-[2rem]'>
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#fed7aa] mt-4'> {contentData.length > 0 ? contentData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>

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
                    <TabsContent value="QA"
                    className='bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover pb-[2rem]'>
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#fed7aa] mt-4'> {qaData.length > 0 ? qaData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>

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
                    <TabsContent value="Support"
                    className='bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover pb-[2rem]'>
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#fed7aa] mt-4'> {supportData.length > 0 ? supportData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>

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
                    <TabsContent value="Web"
                    className='bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover pb-[2rem]'>
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#fed7aa] mt-4'> {webData.length > 0 ? webData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>

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
                    <TabsContent value="RND"
                    className='bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover pb-[2rem]'>
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#fed7aa] mt-4'> {rndData.length > 0 ? rndData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>

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
                    <TabsContent value="Advisory"
                    className='bg-[url(images/card-background-transparent.png)] bg-no-repeat bg-cover pb-[2rem]'>
                        <h2 className='text-4xl m-1 mx-0 bebas text-[#fed7aa] mt-4'> {rndData.length > 0 ? rndData[0][0] : ("Loading...")}</h2>
                        <hr className="h-1 m-2 bg-[#f97316] border-0 dark:bg-gray-700"></hr>

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
                </Tabs>
            </div>
        </main>
    </>
    );
}
export default AboutUsPage