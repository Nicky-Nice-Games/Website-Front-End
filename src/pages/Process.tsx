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
import ArrowButton from "@/components/ui/arrow-button";
import { useNavigate } from "react-router-dom";

const ProcessPage = () => {
  const photo: string = "images/placeholder/placeholder.PNG";
  const navigate = useNavigate();

  return (
    <>
      <main className="mt-0 px-6 md:px-12 relative bg-[url(images/items-background.png)] bg-fixed bg-repeat">
        {/* About Project Section */}
        <div className="**:text-white">
          <h1 className="text-[60px] painterz pt-4 mx-0 mb-[2rem]">
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
            <div className="md:min-w-[400px] md:w-550">
              <img
                src={photo}
                alt="Photo of the team"
                className="md:ml-[2rem] md:mt-0 self-center md:self-end md:pr-4 w-[100%] h-[300px] mb-2"
              />
              <ArrowButton
                caption="Meet the team!"
                clickAction={() => navigate("/aboutUs")}
                className="absolute right-5 md:right-8 font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Designing Game Section */}
        <div className="**:text-white">
          <h1 className="text-[60px] painterz m-4 mx-0 mb-[2rem]">
            Designing the Game
          </h1>
          <div className="flex md:flex-row flex-col items-stretch">
            <img
              src={photo}
              alt="Picture of RIT"
              className="md:mr-[2rem] mb-[2rem] md:mt-0 self-center md:self-end md:w-[400px] w-full md:w-1/4 max-h-[300px]"
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
              className="md:mt-0 self-center md:self-end md:w-[400px] w-full md:w-1/4 max-h-[300px]"
            />
          </div>
        </div>

        {/* Character Dev Info Section */}
        <div className="**:text-white">
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
          <div className="mt-2 flex flex-row flex-wrap w-[85%] m-auto justify-center">
            {characters.map((c) => {
              return (
                <Dialog>
                  <DialogTrigger className="relative w-full sm:w-1/2 lg:w-1/3 m-auto">
                    <div className="absolute w-[84.5%] h-[84.5%] m-2 md:m-10 bg-[#0007] opacity-0 hover:opacity-100 rounded-lg">
                      <h3 className="text-white text-2xl absolute top-[50%] text-center w-full">
                        Learn about <br /> {c.name}'s development
                      </h3>
                    </div>
                    <img
                      src={c.imgUrl}
                      alt={c.name}
                      className="w-full p-2 md:p-10 rounded-[10%]"
                    />
                  </DialogTrigger>
                  <DialogContent className="lg:max-w-[60%]">
                    <DialogHeader className="text-left">
                      <DialogTitle className="text-4xl painterz mb-4">
                        {c.name}
                        {c.occupation ? ` - ${c.occupation}` : ""}
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

        {/* Track Dev Info Section */}
        <h1 className="text-[60px] m-4 mx-0 mt-[2rem] painterz mb-[2rem] text-white">
          Building our Tracks
        </h1>
        <div className="flex flex-row flex-wrap w-full justify-center">
          <Tabs defaultValue="0">
            <TabsList>
              {tracks.map((t) => {
                return (
                  <TabsTrigger value={tracks.indexOf(t).toString()}>
                    {t.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {tracks.map((t) => {
              return (
                <TabsContent
                  value={tracks.indexOf(t).toString()}
                  className="text-white"
                >
                  {t.devDescription}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </main>
    </>
  );
};
export default ProcessPage;
