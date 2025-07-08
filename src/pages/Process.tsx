import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { characters } from "@/data/characters";
import { tracks } from "@/data/tracks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProcessPage = () => {
  const photo: string = "images/placeholder/placeholder.PNG";

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
              className="mr-[2rem] mb-[2rem] md:mt-0 self-center md:self-end md:w-[400px] w-1/4"
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
            <p className="mr-8">
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
                  <DialogTrigger className="hover:brightness-125">
                    <img
                      src={c.imgUrl}
                      alt={c.name}
                      className="w-60 h-40 lg:w-110 lg:h-90 m-5"
                    />
                  </DialogTrigger>
                  <DialogContent className="lg:max-w-[60%]">
                    <DialogHeader className="text-left">
                      <DialogTitle className="text-4xl painterz mb-4">
                        {c.name}{c.occupation ? ` - ${c.occupation}` : ""}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="max-h-[70vh] overflow-auto flex flex-col items-center text-center">
                      <img
                        src={c.conceptImgUrl}
                        alt={`${c.name} concept`}
                        className="mb-2"
                      />
                      <DialogDescription className="text-lg">
                        {c.devDescription}
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
          <Tabs defaultValue="0">
            <TabsList>
              {tracks.map(t => {
                return <TabsTrigger value={tracks.indexOf(t).toString()}>
                  {t.name}
                </TabsTrigger>
              })}
            </TabsList>
            {tracks.map(t => {
              return <TabsContent value={tracks.indexOf(t).toString()}>
                {t.devDescription}
              </TabsContent>
            })}
          </Tabs>
        </div>
      </main>
    </>
  );
};
export default ProcessPage;
