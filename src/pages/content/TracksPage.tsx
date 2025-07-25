import { ContentNavigator } from "@/components/content/content-navigator";
import MapSelect from "@/components/map-select";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { type Track } from "@/data/tracks";

//Tracks Page - Sub Page of Content
const TracksPage = () => {
  //information of heading and track carasoul
  return (
    <div
      className="min-h-[84vh] bg-size-[110%] bg-blend-multiply bg-size-[90%] md:bg-size-[80%]"
      style={{
        backgroundImage:
          "linear-gradient(rgb(101, 216, 255), rgb(77, 137, 215)), url('images/items-background-darkoutline.png')",
      }}
    >
      {/*This is the header and description of each item*/}
      <ContentNavigator currentPage="tracks" />
      <img src=" images/tracks-header.png" className="mx-auto mt-5" />
      <MapSelect
        isDialog={true}
        clickActionOrDialogContent={(track: Track) => {
          return (
            <DialogContent className="bg-[#0000] flex justify-start sm:max-w-3/5 gap-0 p-0">
              <img src={track.imgUrl} className="w-2/5 rounded-l-lg" />
              <div className="bg-gray-200 rounded-r-lg p-5">
                <DialogTitle className="mb-5">{track.name}</DialogTitle>
                <DialogDescription>{track.description}</DialogDescription>
              </div>
            </DialogContent>
          );
        }}
      />
    </div>
  );
};

export { TracksPage };
