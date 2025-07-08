import type { AccountSchema } from "@/App";
import PfpEditBtn from "../components/pfp-edit-btn";
import { pfpList } from "@/utils";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "./ui/dialog";

export interface PfpProps {
  account: AccountSchema;
  setAccount: Function;
  /** show or hide the Edit button */
  showEdit?: boolean;
  className?: string;
}

const editPfpIndex = (pid: string, pfpId: number) => {
  const fetchData = async (): Promise<any> => {
    const response: Response = await fetch(`https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/changepfp?pfp=${pfpId}&pid=${pid}`,{
      method: "PUT"
    });
    if (response.status != 200) {
      console.log(response.statusText);
    }
  };

  fetchData();
}

export default function Pfp({
  setAccount,
  account
}: PfpProps) {
  return (
    <div className="flex flex-col items-center mt-8">
      {/* Picture container */}
      <div className="p-1 rounded-full bg-gray-200">
        <img
          src={pfpList[account.pfp]}
          alt="Profile"
          className="rounded-full h-10 w-10 md:h-12 md:w-12 object-cover"
        />
      </div>
      <Dialog>
        <PfpEditBtn/>
      {/* Avatar picker overlay */}
        <DialogContent className="flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm ">
            <DialogTitle className="text-lg font-medium mb-4">Choose an avatar</DialogTitle>
            <div className="grid grid-cols-2 gap-4 place-items-center">
              {pfpList.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Option"
                  className="cursor-pointer rounded-full h-16 w-16 object-cover border-2 hover:border-blue-500"
                  onClick={() => {
                    if (account) {
                      const storedAccount: AccountSchema = {
                        pid: account.pid,
                        username: account.username,
                        pfp: pfpList.indexOf(src),
                      };
                      setAccount(storedAccount);
                      editPfpIndex(account.pid, pfpList.indexOf(src));
                    }
                  }}
                />
              ))}
            </div>
            <DialogClose
              className="mt-6 px-4 py-2 text-sm border rounded hover:bg-gray-100"
            >
              Cancel
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      
    </div>
  );
}
