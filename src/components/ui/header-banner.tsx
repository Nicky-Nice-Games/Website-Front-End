interface HeaderBannerProps {
  text: string;
}

const HeaderBanner = ({
  text,
}: HeaderBannerProps) => {
  return (
    <div className="relative w-fit inline-block pr-[6rem]">
        <h1 className="relative z-10 bravo text-[60px] p-[10px] text-black yellow-outline">
            {text}
        </h1>
        <img 
            src="images/blank-header.png"
            className="absolute w-[calc(100%+100px)] top-0 h-full z-0 pointer-events-none"
            alt=""
        />
    </div>

  );
};

export default HeaderBanner;
