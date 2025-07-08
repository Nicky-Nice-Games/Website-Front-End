import { useEffect, useState } from 'react';
import * as React from 'react';

type Character = {
  imgUrl: string;
  name: string;
  description: string;
};

type PopUpProps = {
  name: string;
  concepts: string;
  conceptsCap: string;
  onClose: () => void;
};

function PopUp({ name, concepts, conceptsCap, onClose }: PopUpProps) {
  return (
    <div
      className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center"
      onClick={onClose} 
    >
      <div
        className="relative w-[60%] bg-[#e2e8f0] p-4 rounded shadow-xl h-[60%] overflow-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="text-[40px] painterz mb-4">{name}</h1>
        <div className="flex flex-col items-center">
          <img src={concepts} alt="Concept" className="mb-2" />
          <p>{conceptsCap}</p>
        </div>
      </div>
    </div>
  );
}

export const CharactersProcess = () => {
  const characters: Character[] = [
    {
      imgUrl: 'images/placeholder.PNG',
      name: 'Skater Freshman',
      description: 'blah blah blah...',
    },
    {
      imgUrl: 'images/placeholder.PNG',
      name: 'Dining Sophomore',
      description: 'blah blah blah...',
    },
    {
      imgUrl: 'images/placeholder.PNG',
      name: 'OL Junior',
      description: 'blah blah blah...',
    },
    {
      imgUrl: 'images/placeholder.PNG',
      name: 'Hockey Senior',
      description: 'blah blah blah...',
    },
    {
      imgUrl: 'images/placeholder.PNG',
      name: 'Jamester',
      description: 'JAMMMMSTER',
    },
    {
      imgUrl: 'images/placeholder.PNG',
      name: 'Gizmo',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (selectedCharacter) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCharacter]);

  return (
    <>
      <div className="mt-[2rem] flex flex-row flex-wrap w-full justify-center">
        {characters.map((char, index) => (
          <img
            key={index}
            src={char.imgUrl}
            alt={char.name}
            className="m-[1rem] md:mt-0 self-center md:self-end md:w-1/4 w-[100%] cursor-pointer"
            onClick={() => setSelectedCharacter(char)}
          />
        ))}
      </div>
        

      {selectedCharacter && (
        <PopUp
          name={selectedCharacter.name}
          concepts={selectedCharacter.imgUrl}
          conceptsCap={selectedCharacter.description}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </>
  );
};
export default CharactersProcess;

