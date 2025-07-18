interface ArrowButtonProps {
  caption: string;
  clickAction: Function;
  className?: string;
  direction?: string;
}

const ArrowButton = ({
  caption,
  clickAction,
  className,
  direction = "right",
}: ArrowButtonProps) => {
  return (
    <button
      onClick={() => {
        clickAction();
      }}
      className={`cursor-pointer text-[18px] px-2 py-1 bg-[url(images/arrow.png)] bg-size-[100%_100%] transform transition duration-200 
    ${
      direction === "left"
        ? "rotate-180 hover:-translate-x-3"
        : "hover:translate-x-3"
    } ${className}`}
    >
      <h3 className={`text-white ${direction === "left" ? "rotate-180" : ""}`}>
        {caption}
      </h3>
    </button>
  );
};

export default ArrowButton;
