type PersonProps = {
  name: string;
  position: string;
  email: string;
  image: string;
};

// This component is the format for what each persons specific tab will look like
export const Person = ({ name, position, email, image }: PersonProps) => {
  return (
    <div className="m-4 w-[200px] rounded-md bg-orange-100">
      <img
        src={image}
        alt={`Photo of ${name}`}
        className="h-[200px] rounded-md"
      />
      <p className="person-name font-bold">{name}</p>
      <p className="person-position">{position}</p>
      <p className="person-email">{email}</p>
    </div>
  );
};
