import { tracks } from "@/data/tracks";
import { Dialog, DialogTrigger } from "./ui/dialog";

// Map Select element
// Click action is either
const MapSelect = ({
  isDialog,
  clickActionOrDialogContent,
}: {
  isDialog: boolean;
  clickActionOrDialogContent: Function;
}) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-center">
      {tracks.map((track, index) => {
        return (
          <div className="md:mx-[2rem] mb-10 w-3/4 md:w-1/3">
            <h1 className="w-fit text-lg text-white font-semibold bg-gradient-to-r from-[#F66624] to-[#D84B3A] m-auto p-[5px] mb-2 px-3 py-1 rounded-lg g">
              {track.name}
            </h1>
            {isDialog ? (
              <Dialog>
                <DialogTrigger>
                  <div className="rounded-xl overflow-hidden w-full">
                    <img
                      src={track.imgUrl}
                      className="w-full transition-transform duration-300 hover:scale-120 object-fill"
                    />
                  </div>
                </DialogTrigger>
                {clickActionOrDialogContent(track, index)}
              </Dialog>
            ) : (
              <button
                onClick={() => {
                  clickActionOrDialogContent(track, index);
                }}
                className="cursor-pointer drop-shadow-xl/50 md:w-4/5"
              >
                <div className="rounded-xl overflow-hidden w-full">
                  <img
                    src={track.imgUrl}
                    className="w-full transition-transform duration-300 hover:scale-120 object-fill"
                  />
                </div>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MapSelect;
