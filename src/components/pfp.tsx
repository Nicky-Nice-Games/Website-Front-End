import type { AccountSchema } from "@/App";
import { useState } from "react";
import PfpEditBtn from "../components/pfp-edit-btn";
import { pfpList } from "@/utils";

export interface PfpProps {
  account: AccountSchema | null;
  setAccount: Function;
  /** show or hide the Edit button */
  showEdit?: boolean;
}

const editPfpIndex = (pid: string, pfpId: number) => {
  const fetchData = async (): Promise<any> => {
    const response: Response = await fetch("https://maventest-a9cc74b8d5cf.herokuapp.com/webservice/playerinfo/changepfp",{
      method: "PUT",
      body: JSON.stringify({
        pfp: pfpId,
        pid: pid
      })
    });
    if (response.status != 200) {
      console.log(response.statusText);
    }
  };

  fetchData();
}

export default function Pfp({
  setAccount,
  account,
  showEdit = true,
}: PfpProps) {
  const startingPfp = account ? pfpList[account.pfp] : "images/placeholder/pfp-placeholder.png"
  const [currentSrc, setCurrentSrc] = useState(startingPfp);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Picture container */}
      <div className="p-1 rounded-full bg-gray-200">
        <img
          src={currentSrc}
          alt="Profile"
          className="rounded-full h-10 w-10 md:h-12 md:w-12 object-cover"
        />
      </div>

      <PfpEditBtn
        className={showEdit ? "" : "hidden"}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      {/* Avatar picker overlay */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm ">
            <h3 className="text-lg font-medium mb-4">Choose an avatar</h3>
            <div className="grid grid-cols-2 gap-4 place-items-center">
              {pfpList.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Option"
                  className="cursor-pointer rounded-full h-16 w-16 object-cover border-2 hover:border-blue-500"
                  onClick={e => {
                    e.preventDefault();
                    setCurrentSrc(src);
                    setIsEditing(false);
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
            <button
              className="mt-6 px-4 py-2 text-sm border rounded hover:bg-gray-100"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
