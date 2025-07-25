type PreviewTableRowProps = {
  place: string;
  imgPath: string;
  name: string;
  time: string;
  score: string;
  color: string;
};

const PreviewTableRow = ({
  place,
  imgPath,
  name,
  time,
  score,
  color,
}: PreviewTableRowProps) => {
  return (
    <tr className="w-full flex flex-row justify-between items-center text-gray-300 my-1 md:my-4 2xl:my-3">
      <td className="w-[3/5] flex flex-row justify-between items-center">
        <h3
          className={`painterz text-[7vw] md:text-6xl ${color} min-w-[15vw] md:min-w-25`}
        >
          {place}
        </h3>
        <img
          src={imgPath}
          alt={`Photo of ${name}`}
          className="hidden lg:block w-15 outline-[5px] outline-[#38bdf8] h-[60px] rounded-full"
        />
      </td>

      <td>
        <p className="ml-auto md:m-2 bebas text-[5vw] md:text-[3vw] lg:text-[2vw]">
          {name}
        </p>
      </td>

      <td className="relative md:left-2">
        <p className="bebas text-[4vw] md:text-[3vw] lg:text-[2vw]">{time}</p>
      </td>

      <td>
        <p className="bebas text-[4vw] md:text-[3vw] lg:text-[2vw]">{score}</p>
      </td>
    </tr>
  );
};

export default PreviewTableRow;
