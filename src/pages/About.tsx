import { useState, useEffect } from 'react';
import photo from '../../public/images/placeholder.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import '../assets/Styles/About.css';
import { List } from 'lucide-react';

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
        <div className="person" style={{margin:'1rem', width:'200px'}}>
        <img src={photo} alt={`Photo of ${name}`} style={{height:'200px'}}/>
        <p className="person-name">{name}</p>
        <p className="person-position">{position}</p>
        <p className="person-email">{email}</p>
        </div>
    );
    }

    

    return(
        <main>
            <h1 className="text-black"> About the Project</h1>

            <div style={{display:'flex', alignItems:'stretch'}}>
                <p>
                Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui elementum neque lacus cursus lacus sem convallis enim. Ullamcorper dolor ultricies in mauris orci malesuada. Cursus commodo urna interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo pellentesque. Curabitur commodo nibh egestas pretium adipiscing rhoncus.
                Fermentum adipiscing fusce id scelerisque pellentesque ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi tempus lectus elit odio. Justo varius nisi.
                </p>
                <img src={photo} alt="Photo of the team" 
                style={{margin:'2rem', marginTop:'0rem',alignSelf:'flex-end', 
                width:'400px', height:'300px'}}/>
            </div>
            <h1 style={{textAlign:'center'}}>Meet the team!</h1>
            <div id="teamSection">
                <Tabs defaultValue="GSP" className="w-[400px]" 
                style={{width:'80%', backgroundColor:'blanchedalmond'}}>

                <TabsList style={{width:'100%'}}>
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
                    <h2> {gspData.length > 0 ? gspData[0][0] : ("Loading...")}</h2>

                    <div className="peopleGrid">
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
                    <h2> {productionData.length > 0 ? productionData[0][0] : ("Loading...")}</h2>

                    <div className="peopleGrid">
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
                    <h2> {levelData.length > 0 ? levelData[0][0] : ("Loading...")}</h2>

                    <div className="peopleGrid">
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
                    <h2> {contentData.length > 0 ? contentData[0][0] : ("Loading...")}</h2>

                    <div className="peopleGrid">
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
                    <h2> {qaData.length > 0 ? qaData[0][0] : ("Loading...")}</h2>

                    <div className="peopleGrid">
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
                    <h2> {supportData.length > 0 ? supportData[0][0] : ("Loading...")}</h2>

                    <div className="peopleGrid">
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
                    <h2> {webData.length > 0 ? webData[0][0] : ("Loading...")}</h2>

                    <div className="peopleGrid">
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
                    <h2> {rndData.length > 0 ? rndData[0][0] : ("Loading...")}</h2>

                    <div className="peopleGrid">
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
        
        
    );
}
export default AboutPage