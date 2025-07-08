import { DialogTrigger } from "./ui/dialog";

interface EditBtnProps {
  className?: string;
}

export default function EditBtn({
  className = "",
}: EditBtnProps) {
  return (
    <DialogTrigger className={
          `mt-2 px-3 py-1 text-sm border rounded hover:bg-gray-100 ` + className
        }>
      {/* Edit button */}
        Edit
    </DialogTrigger>
  );
}
