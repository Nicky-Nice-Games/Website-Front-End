import { DialogTrigger } from "../ui/dialog";

interface EditBtnProps {
  className?: string;
}

export default function EditBtn({ className = "" }: EditBtnProps) {
  return (
    <DialogTrigger
      className={
        "mt-2 px-5 py-2 text-sm border border-2 rounded-md bg-gray-600 hover:bg-gray-100 " +
        className
      }
    >
      {/* Edit button */}
      Edit
    </DialogTrigger>
  );
}
