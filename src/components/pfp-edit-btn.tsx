interface EditBtnProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  className?: string;
}

export default function EditBtn({
  isEditing,
  setIsEditing,
  className = "",
}: EditBtnProps) {
  const openEditingScreen = () => setIsEditing(!isEditing);
  return (
    <>
      {" "}
      {/* Edit button */}
      <button
        className={
          `mt-2 px-3 py-1 text-sm border rounded hover:bg-gray-100 ` + className
        }
        onClick={openEditingScreen}
      >
        Edit
      </button>
    </>
  );
}
