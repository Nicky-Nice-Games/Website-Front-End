import { DialogTrigger } from "../ui/dialog";

interface EditBtnProps {
  className?: string;
}

export default function EditBtn({ className = "" }: EditBtnProps) {
  return (
    <DialogTrigger
      className={
        "mt-2 px-5 py-2 font-semibold text-orange-400 bg-black hover:bg-gray-800 hover:text-orange-300 border-2 border-orange-500 rounded-md py-1.5 px-3.5 text-sm md:text-base transition-colors" +
        className
      }
    >
      {/* Edit button */}
      Edit
    </DialogTrigger>
  );
}
