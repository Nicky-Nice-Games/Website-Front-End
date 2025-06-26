import { useState } from "react";
const avatarOptions = [
  "../../web/images/bottom-card.png",
  "../../web/images/github-logo.png",
  "../../web/images/instagram-logo.png",
  "../../web/images/instagram-logo.png",
  "../../web/images/github-logo.png",
  "../../web/images/bottom-card.png",
];

export default function Pfp() {
  const [currentSrc, setCurrentSrc] = useState("/images/placeholder.PNG");
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

      {/* Edit button */}
      <button
        className="mt-2 px-3 py-1 text-sm border rounded hover:bg-gray-100"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>

      {/* Avatar picker overlay */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm ">
            <h3 className="text-lg font-medium mb-4">Choose an avatar</h3>
            <div className="grid grid-cols-2 gap-4 place-items-center">
              {avatarOptions.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Option"
                  className="cursor-pointer rounded-full h-16 w-16 object-cover border-2 hover:border-blue-500"
                  onClick={() => {
                    setCurrentSrc(src);
                    setIsEditing(false);
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
