import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProcessPage = () => {
  const photo: string = "images/placeholder.PNG";

  type Character = {
    imgUrl: string;
    conceptImg: string;
    name: string;
    description: string;
  };

  const characters: Character[] = [
    {
      imgUrl: "images/content-assets/FrshSkater.PNG",
      conceptImg: "images/placeholder.PNG",
      name: "Morgan - Skater Freshman",
      description: "blah blah blah...",
    },
    {
      imgUrl: "images/content-assets/SophDining.png",
      conceptImg: "images/placeholder.PNG",
      name: "Reese - Dining Sophomore",
      description: "blah blah blah...",
    },
    {
      imgUrl: "images/content-assets/OLjr.png",
      conceptImg: "images/placeholder.PNG",
      name: "Emma - OL Junior",
      description: "blah blah blah...",
    },
    {
      imgUrl: "images/content-assets/HkySr.png",
      conceptImg: "images/placeholder.PNG",
      name: "Kai - Hockey Senior",
      description: "blah blah blah...",
    },
    {
      imgUrl: "images/content-assets/Jamster.png",
      conceptImg: "images/placeholder.PNG",
      name: "Jamster",
      description: "JAMMMMSTER",
    },
    {
      imgUrl: "images/placeholder.PNG",
      conceptImg: "images/placeholder.PNG",
      name: "Gim",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
  ];

  return (
    <>
      <main className="ml-[2rem] mr-[2rem]">
        <div>
          <h1 className="text-[60px] painterz m-4 mx-0 mb-[2rem]">
            {" "}
            About the Project
          </h1>
          <div className="flex md:flex-row flex-col items-stretch">
            <p>
              Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan
              donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu.
              Dui elementum neque lacus cursus lacus sem convallis enim.
              Ullamcorper dolor ultricies in mauris orci malesuada. Cursus
              commodo urna interdum eget pharetra. Nulla enim sit varius tempus
              tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis
              ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis
              volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut
              adipiscing commodo elementum quis adipiscing scelerisque sed
              nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo
              pellentesque. Curabitur commodo nibh egestas pretium adipiscing
              rhoncus. Fermentum adipiscing fusce id scelerisque pellentesque
              ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi
              tempus lectus elit odio. Justo varius nisi.
            </p>
            <img
              src={photo}
              alt="Photo of the team"
              className="ml-[2rem] md:mt-0 self-center md:self-end md:w-[400px] w-[100%] h-[300px]"
            />
          </div>
        </div>

        <div>
          <h1 className="text-[60px] painterz m-4 mx-0 mb-[2rem]">
            Designing the Game
          </h1>
          <div className="flex md:flex-row flex-col items-stretch">
            <img
              src={photo}
              alt="Picture of RIT"
              className="mr-[2rem] mb-[2rem] md:mt-0 self-center md:self-end 
                    md:w-[400px] w-1/4"
            />
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan
              donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu.
              Dui elementum neque lacus cursus lacus sem convallis enim.
              Ullamcorper dolor ultricies in mauris orci malesuada. Cursus
              commodo urna interdum eget pharetra. Nulla enim sit varius tempus
              tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis
              ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis
              volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut
              adipiscing commodo elementum quis adipiscing scelerisque sed
              nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo
              pellentesque. Curabitur commodo nibh egestas pretium adipiscing
              rhoncus. Fermentum adipiscing fusce id scelerisque pellentesque
              ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi
              tempus lectus elit odio. Justo varius nisi.
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-stretch">
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan
              donec euismod viverra aliquam. Nibh rhoncus velit volutpat arcu.
              Dui elementum neque lacus cursus lacus sem convallis enim.
              Ullamcorper dolor ultricies in mauris orci malesuada. Cursus
              commodo urna interdum eget pharetra. Nulla enim sit varius tempus
              tincidunt in in morbi malesuada. Nunc nunc volutpat sit quis
              ullamcorper eget turpis porta. Maecenas eget suspendisse sagittis
              volutpat non sed lorem. Vulputate at faucibus leo rhoncus. Ac ut
              adipiscing commodo elementum quis adipiscing scelerisque sed
              nulla. Malesuada nunc nec malesuada pretium vulputate faucibus leo
              pellentesque. Curabitur commodo nibh egestas pretium adipiscing
              rhoncus. Fermentum adipiscing fusce id scelerisque pellentesque
              ipsum. Mattis sodales iaculis faucibus nam est quam. Vitae morbi
              tempus lectus elit odio. Justo varius nisi.
            </p>
            <img
              src={photo}
              alt="Picture of RIT"
              className="md:mt-0 self-center md:self-end md:w-[400px] w-1/4"
            />
          </div>
        </div>
        <div>
          <h1 className="text-[60px] mx-0 m-4 mt-[2rem] painterz mb-[2rem]">
            Designing our characters
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eget pharetra accumsan donec
            euismod viverra aliquam. Nibh rhoncus velit volutpat arcu. Dui
            elementum neque lacus cursus lacus sem convallis enim. Ullamcorper
            dolor ultricies in mauris orci malesuada. Cursus commodo urna
            interdum eget pharetra. Nulla enim sit varius tempus tincidunt in in
            morbi malesuada. Nunc nunc volutpat sit quis ullamcorper eget turpis
            porta. Maecenas eget suspendisse sagittis volutpat non sed lorem.
            Vulputate at faucibus leo rhoncus. Ac ut adipiscing commodo
            elementum quis adipiscing scelerisque sed nulla. Malesuada nunc nec
            malesuada pretium vulputate faucibus leo pellentesque. Curabitur
            commodo nibh egestas pretium adipiscing rhoncus.
          </p>
          <div className="mt-[2rem] flex flex-row flex-wrap w-full justify-center">
            {characters.map((c) => {
              return (
                <Dialog>
                  <DialogTrigger>
                    <img
                      src={c.imgUrl}
                      alt={c.name}
                      className="w-60 h-40 lg:w-110 lg:h-90 m-5"
                    />
                  </DialogTrigger>
                  <DialogContent className="lg:max-w-[60%]">
                    <DialogHeader className="text-left">
                      <DialogTitle className="text-4xl painterz mb-4">
                        {c.name}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="max-h-[70vh] overflow-auto flex flex-col items-center text-center">
                      <img
                        src={c.conceptImg}
                        alt={`${c.name} concept`}
                        className="mb-2"
                      />
                      <DialogDescription className="text-lg">
                        {c.description}
                      </DialogDescription>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>

        <h1 className="text-[60px] m-4 mx-0 mt-[2rem] painterz mb-[2rem]">
          Building our Tracks
        </h1>

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
    </>
  );
};
export default ProcessPage;
