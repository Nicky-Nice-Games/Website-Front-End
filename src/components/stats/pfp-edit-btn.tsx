import { DialogTrigger } from "../ui/dialog";

interface EditBtnProps {
  className?: string;
}

export default function EditBtn({ className = "" }: EditBtnProps) {
  return (
    <DialogTrigger
      className={
        "mt-2 px-5 py-2 text-sm border border-2 rounded-md bg-gradient-to-tl from-[#121212] to-[#F76902]/70 hover:bg-gray-100 " +
        className
      }
    >
      {/* Edit button */}
      Edit
    </DialogTrigger>
  );
}
