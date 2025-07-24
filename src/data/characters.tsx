import type { ReactElement } from "react";

export interface Character {
  imgUrl: string;
  conceptImgUrl: string;
  name: string;
  occupation?: string;
  description: ReactElement;
  devDescription: string;
}

// sample list of characters to display
export const characters: Character[] = [
  {
    imgUrl: "images/characters/gizmo.png",
    conceptImgUrl: "images/characters/dev-gizmo.png",
    name: "Gizmo",
    description: (
      <div>
        <b>Pronouns:</b> Any/All <br />
        <b>Height:</b> Short <br />
        <b>Year:</b> N/A <br />
        <b>Major:</b> N/A <br />
        <b>Likes:</b> Doohickeys, Creativity, Being helpful<br />
        <b>Dislikes:</b> Bugs, Bugs<br />
        <b>Favorite Song: </b> 
        <a className="text-[#d97706]" href="https://www.youtube.com/watch?v=CFGLoQIhmow">
         Lofi Hip Hop Beats To Relax/Study To</a>
      </div>
    ),
    devDescription:
      "As the mascot of the game, Gizmo's design is based on the first IGM logo from roughly 2011 to 2018, using the \"M\" as his head. Gizmo's toy and ghost designs were created as separate concepts, but both would be utilized in the final design of the character. The wooden toy form is inspired by other blocky wooden string dolls, which had similar shape language to the original ghost form."
  },
  {
    imgUrl: "images/characters/morgan.png",
    conceptImgUrl: "images/characters/dev-morgan.PNG",
    name: "Morgan",
    occupation: "Skater Freshman",
    description: (
      <div>
        <b>Pronouns:</b> She/They <br />
        <b>Height:</b> Average <br />
        <b>Year:</b> 1st<br />
        <b>Major:</b> Photography <br />
        <b>Likes:</b> Skating, Thrifting Clothes, Going Fast<br />
        <b>Dislikes:</b> 8AM classes, Wiping out<br />
        <b>Favorite Song: </b>
        <a className="text-[#d97706]" href="https://www.youtube.com/watch?v=TIy3n2b7V9k">Skater Boi - Avril Lavigne</a>
      </div>
    ),
    devDescription:
      "Morgan is designed after the Lead Content Developer as she appeared in her first year, with a casual personality and interests in ice skating and baggy clothes. She's designed around fast-travel, representing the RIT students that travels around campus using alternative transportation, and incorporating influence from the RIT Skate Club. This fast-travel motif is also reflected by the beanie she wears."
  },
  {
    imgUrl: "images/characters/reese.png",
    conceptImgUrl: "images/characters/dev-reese.png",
    name: "Reese",
    occupation: "Dining Sophomore",
    description: (
      <div>
        <b>Pronouns:</b> He/Him <br />
        <b>Height:</b> Average <br />
        <b>Year:</b> 2nd<br />
        <b>Major:</b> Packaging Science <br />
        <b>Likes:</b> Free Stuff, Making Mixtapes, Anime, Energy Drinks <br />
        <b>Dislikes:</b> Angry customers, Waking up
        <br />
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=HyHNuVaZJ-k"
        >
          Feel Good Inc. - Gorillaz
        </a>
      </div>
    ),
    devDescription:
      "Reese is the only character in the roster without visible eyes, inspiring his mellow personality and cheesy grin. His occupation as a dining worker was added later in development, which also inspired his name, a food pun that references Reese's™.",
  },
  {
    imgUrl: "images/characters/emma.png",
    conceptImgUrl: "images/characters/dev-emma.png",
    name: "Emma",
    occupation: "OL Junior",
    description: (
      <div>
        <b>Pronouns:</b> She/Her <br />
        <b>Height:</b> Average<br />
        <b>Year:</b> 3rd<br />
        <b>Job:</b> Orientation Leader <br />
        <b>Major:</b> Game Design and Development <br />
        <b>Likes:</b> Pins, Early Morning Walks, Bucket Hats <br />
        <b>Dislikes:</b> Loud Music, Sleeping In <br />
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=LGpaGI99Xl0&list=RDLGpaGI99Xl0&start_radio=1"
        >
          Turbo Hustle - DJ Maestro
        </a>
      </div>
    ),
    devDescription:
      "Emma is inspired by an image of a real RIT Orientation Leader found in research. Her design uses circular shape language to invoke a feeling of cheer, friendliness, and a warm welcome. Her outfit primarily uses RIT's colors to emphasize her pride in the institution."
  },
  {
    imgUrl: "images/characters/kai.png",
    conceptImgUrl: "images/characters/dev-kai.PNG",
    name: "Kai",
    occupation: "Hockey Senior",
    description: (
      <div>
        <b>Pronouns:</b> They/Them<br />
        <b>Height:</b> Tall <br />
        <b>Year:</b> 4th<br />
        <b>Major:</b> Business<br />
        <b>Likes:</b> Playing hockey, Bandanas, Going on adventures<br />
        <b>Dislikes:</b> Boredom, Losing a contest<br/>
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=btPJPFnesV4&list=RDbtPJPFnesV4&start_radio=1"
        >
          Eye of the Tiger - Survivor
        </a>
      </div>
    ),
    devDescription:
      "Kai is designed and named after a high-school friend of the Assistant Content Team Lead. They were originally designed with a wide triangle-like design, but it was shrunk to fit the other characters later on. Kai's outfit matches their occupation as a hockey player, being based on RIT hockey jerseys with a legally distinct tiger logo on the front."
  },
  {
    imgUrl: "images/characters/jamster.png",
    conceptImgUrl: "images/characters/dev-jamster.png",
    name: "Jamster",
    description: (
      <div>
        <b>Pronouns:</b> They/Them <br />
        <b>Height:</b> Short <br />
        <b>Year:</b> N/A<br />
        <b>Major:</b> N/A<br />
        <b>Likes:</b> Games, Jams, GameJams <br />
        <b>Dislikes:</b> Sitting still, Being hungry
        <br />
        <b>Favorite Song: </b>
        <a
          className="text-[#d97706]"
          href="https://www.youtube.com/watch?v=p3G5IXn0K7A"
        >
          Hamster Dance - Hampton and the Hamsters
        </a>
      </div>
    ),
    devDescription:
      "Jamster is the mascot of the RIT Game Developers Club (RGDC), designed by an alum who is a former E-board member of the club. Due to their representation as a mascot for RIT's Game Development majors, they were approved and added to the roster as a guest character with slight design modifications."
  },
];
