import { useState } from 'react';

import photo from '../assets/Media/Images/placeholder.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AboutPage = () => {


   

    return(
        <>
            <h1 className="text-black"> About the Project</h1>

            <div style={{display:'flex', alignItems:'stretch'}}>
                <p>
                Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui elementum neque lacus cursus lacus sem convallis enim. Ullamcorper dolor ultricies in mauris orci malesuada. Cursus commodo urna interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo pellentesque. Curabitur commodo nibh egestas pretium adipiscing rhoncus.
                Fermentum adipiscing fusce id scelerisque pellentesque ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi tempus lectus elit odio. Justo varius nisi.
                </p>
                <img src={photo} alt="Photo of the team" style={{margin:'2rem', marginTop:'0rem',alignSelf:'flex-end'}}/>
            </div>

            <div id="teamSection">
                <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="GSP">GSP</TabsTrigger>
                    <TabsTrigger value="Production">Production</TabsTrigger>
                    <TabsTrigger value="Level Design">Level Design</TabsTrigger>
                    <TabsTrigger value="Content">Content</TabsTrigger>
                    <TabsTrigger value="RND">RND</TabsTrigger>
                    <TabsTrigger value="QA">QA</TabsTrigger>
                    <TabsTrigger value="Support">Support</TabsTrigger>
                    <TabsTrigger value="Web">Web</TabsTrigger>

                </TabsList>
                <TabsContent value="Production">
                    <div className="peopleGrid">
                        <div className="person">
                            <img src={photo} alt="Photo of person"></img>
                        </div>
                        <div className="person">
                            <img src={photo} alt="Photo of person"></img>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="GSP">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </>
        
        
    );
}
export default AboutPage