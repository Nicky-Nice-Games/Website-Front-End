import type { AccountSchema } from "@/App";
import PfpEditBtn from "./pfp-edit-btn";
import { pfpList } from "@/data/pfps";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "../ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export interface PfpProps {
  account: AccountSchema;
  setAccount: Function;
  /** show or hide the Edit button */
  showEdit?: boolean;
  className?: string;
}

const editPfpIndex = (pid: string, pfpId: number) => {
  const fetchData = async (): Promise<any> => {
    const response: Response = await fetch(
      `https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/changepfp?pfp=${pfpId}&pid=${pid}`,
      {
        method: "PUT",
      }
    );
    if (response.status != 200) {
      console.log(response.statusText);
    }
  };

  fetchData();
};

export default function Pfp({
  setAccount,
  account,
  showEdit = true,
  className = "",
}: PfpProps) {
  // Split "emotes" in pfp list to a new list. "Set" prevents repeats.
  const emotes: string[] = [...new Set(pfpList.map((pfp) => pfp.emote))];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Picture container - made larger */}
      <div className="p-1 rounded-full bg-gray-200">
        <img
          src={pfpList[account.pfp].src}
          alt="Profile"
          className="rounded-full h-16 w-16 md:h-20 md:w-20 object-cover"
        />
      </div>

      {showEdit && (
        <Dialog>
          <PfpEditBtn className="mt-2" />
          {/* Avatar picker overlay - made larger */}
          <DialogContent
            showCloseButton={false}
            className="max-w-md border-orange-700 bg-[#131313]"
          >
            <DialogTitle className="text-xl font-medium mb-6 text-white">
              Choose an avatar
            </DialogTitle>
            <Tabs>
              <TabsList>
                {emotes.map((e, index) => {
                  return (
                    <TabsTrigger value={index.toString()} className="ml-0 mr-1">
                      {e}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {emotes.map((e, index) => {
                return (
                  <TabsContent
                    value={index.toString()}
                    className="grid grid-cols-3 gap-6 py-3 place-items-center shadow-lg bg-linear-to-b from-[#CE6131] to-[#BA382A] rounded-b-xl rounded-tr-xl"
                  >
                    {pfpList
                      .filter((pfp) => pfp.emote === e)
                      .map((pfp, index) => (
                        <img
                          key={pfp.src}
                          src={pfp.src}
                          alt="Option"
                          className={`cursor-pointer rounded-full h-20 w-20 object-cover border-4 hover:border-blue-500 transition-all ${
                            index === account.pfp
                              ? "border-green-500"
                              : "border-transparent"
                          }`}
                          onClick={() => {
                            if (account) {
                              const storedAccount: AccountSchema = {
                                pid: account.pid,
                                username: account.username,
                                pfp: pfpList.indexOf(pfp),
                              };
                              setAccount(storedAccount);
                              editPfpIndex(account.pid, pfpList.indexOf(pfp));
                              localStorage.setItem(
                                "pfp",
                                pfpList.indexOf(pfp).toString()
                              );
                            }
                          }}
                        />
                      ))}
                  </TabsContent>
                );
              })}
            </Tabs>

            <DialogClose className="mt-6 px-6 py-3 w-[30%] text-base border-1 border-white text-white rounded-lg hover:bg-orange-600 transition-colors poppins">
              Cancel
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
