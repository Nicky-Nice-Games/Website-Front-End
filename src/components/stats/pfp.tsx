import type { AccountSchema } from "@/App";
import PfpEditBtn from "./pfp-edit-btn";
import { pfpList } from "@/data/pfps";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "../ui/dialog";

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
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Picture container - made larger */}
      <div className="p-1 rounded-full bg-gray-200">
        <img
          src={pfpList[account.pfp]}
          alt="Profile"
          className="rounded-full h-16 w-16 md:h-20 md:w-20 object-cover"
        />
      </div>

      {showEdit && (
        <Dialog>
          <PfpEditBtn className="mt-2" />
          {/* Avatar picker overlay - made larger */}
          <DialogContent className="flex items-center justify-center p-6 max-w-md">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
              <DialogTitle className="text-xl font-medium mb-6">
                Choose an avatar
              </DialogTitle>
              <div className="grid grid-cols-3 gap-6 place-items-center">
                {pfpList.map((src, index) => (
                  <img
                    key={src}
                    src={src}
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
                          pfp: pfpList.indexOf(src),
                        };
                        setAccount(storedAccount);
                        editPfpIndex(account.pid, pfpList.indexOf(src));
                        localStorage.setItem(
                          "pfp",
                          pfpList.indexOf(src).toString()
                        );
                      }
                    }}
                  />
                ))}
              </div>
              <DialogClose className="mt-6 px-6 py-3 text-base border-2 rounded-lg hover:bg-gray-100 transition-colors">
                Cancel
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
