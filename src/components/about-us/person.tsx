type PersonProps = {
  name: string;
  position: string;
  email: string;
  image: string;
};

function Person({ name, position, email, image }: PersonProps) {
  return (
    //
    //rounded-full outline-[7px] outline-[#38bdf8]
    <div
      className="m-4 p-4 w-[200px] drop-shadow-xl/50
                rounded-md p-1 bg-[url(images/tabs-card.png)] 
                bg-cover bg-no-repeat bg-center opacity-100"
    >
      <img
        src={image}
        alt={`Photo of ${name}`}
        className="h-[160px] mb-[1rem] text-center flex justify-self-center"
      />
      <p className="text-[18px] person-name font-bold">{name}</p>
      <p className="text-[16px] person-position px-2">{position}</p>
      <a
        className="text-[16px] font-bold text-[#d97706]"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>
  );
}

export { Person };
