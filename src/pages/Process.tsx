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
      <main className="mt-0 px-6 md:px-12 relative bg-[url(images/items-background.png)] bg-[#BBB] bg-fixed bg-repeat bg-blend-difference *:text-white">
        {/* About Project Section */}
        <div>
          <h1 className="text-header2 pt-4 mx-0 mb-4"> About the Project</h1>
          <div className="flex md:flex-row flex-col items-stretch">
            <p className="text-body">
              Gizmo Go-Kartz was constructed by a team of almost 50 RIT students
              of varying grade levels, all of which are split into 8 sub-teams
              by their specialty. The project and most of its students work in
              the school of Interactive Games and Media, which is incorporated
              into the game's marketing. A majority of the team works remotely,
              but team meetings occur on-campus with all local members present,
              and all remote members in a Zoom call.
            </p>
            <div className="md:min-w-[400px] md:w-300">
              <img
                src="images/process/team-photo.jpg"
                alt="Photo of the team"
                className="md:ml-[2rem] md:mt-0 self-center md:self-end md:pr-4 w-[100%] h-[300px] mb-2"
              />
              <ArrowButton
                caption="Meet the team!"
                clickAction={() => navigate("/aboutUs")}
                className="absolute right-5 md:right-8 font-semibold px-6 mt-[1rem] px-10 py-3"
              />
            </div>
          </div>
        </div>

        {/* Designing Game Section */}
        <div>
          <h1 className="text-header2 mt-[4rem] m-4 mx-0 mb-4">
            Designing the Game
          </h1>
          <div className="pb-[1rem] flex md:flex-row flex-col items-stretch">
            <img
              src={photo}
              alt="Picture of RIT"
              className="md:mr-[2rem] mb-[2rem] md:mt-0 self-center md:self-end md:w-[400px] w-full md:w-1/4 max-h-[300px]"
            />
            <p className="text-body">
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
            <p className="text-body mr-8">
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
        <div>
          <h1 className="text-header2 m-4 mx-0 mb-4">
            Designing our characters
          </h1>
          <p className="text-body">
            The character roster of Gizmo Go-Kartz is designed to be both
            approachable and scalable. Characters are build using a standardized
            body base reminiscent of Nintendo's Miis, with heads and faces being
            easy to customize. This allows ease of character production for a
            high-quality base cast with room for future expansion. Character are
            also meant to have easily identifiable heads, as those are what will
            be most prominently seen by players in-game. The original plan for
            the roster was to include multiple RIT mascots, but this caused
            complications with requiring approval from third parties to include
            their mascots. As a result, most of the characters are original
            students, and only 2 are mascots with approval.
          </p>
          <div className="mt-2 flex flex-row flex-wrap w-[85%] m-auto justify-center">
            {characters.map((c) => {
              return (
                <Dialog>
                  <DialogTrigger className="relative w-full sm:w-1/2 lg:w-1/3 m-auto">
                    <div className="absolute w-[84.5%] h-[84.5%] m-2 md:m-10 bg-[#0007] opacity-0 hover:opacity-100 rounded-lg">
                      <h3 className="text-white text-2xl poppins absolute top-[50%] text-center w-full">
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
                      <DialogTitle className="text-header3 mb-4">
                        {c.name}
                        {c.occupation ? ` - ${c.occupation}` : ""}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="max-h-[70vh] overflow-auto flex flex-col items-center text-center">
                      <img
                        src={c.conceptImgUrl}
                        alt={`${c.name} concept`}
                        className="mb-2 max-h-100"
                      />
                      <DialogDescription className="text-body text-black">
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
        <h1 className="text-header2 m-4 mx-0 mb-4">Building our Tracks</h1>
        <Tabs defaultValue="0" className="w-[90vw]">
          <TabsList className="flex flex-wrap h-full pl-0">
            {tracks.map((t) => {
              return (
                <TabsTrigger value={tracks.indexOf(t).toString()}>
                  {t.name}
                </TabsTrigger>
              );
            })}
            <TabsTrigger value="cut">Cut Content</TabsTrigger>
          </TabsList>
          {tracks.map((t) => {
            return (
              <TabsContent
                value={tracks.indexOf(t).toString()}
                className="text-white"
              >
                <div className="bg-linear-to-b from-[#F66624] to-[#D84B3A] p-5 h-[30vh] rounded-e-2xl rounded-b-2xl mb-3">
                  {t.devDescription}
                </div>
              </TabsContent>
            );
          })}
          <TabsContent value="cut">
            <div className="bg-linear-to-b from-[#F66624] to-[#D84B3A] p-5 h-[30vh] rounded-e-2xl rounded-b-2xl mb-3">
              Stuff about Quarter Mile and other cut tracks
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
};
export default ProcessPage;
