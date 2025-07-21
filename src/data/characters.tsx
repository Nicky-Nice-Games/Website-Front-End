import type { ReactElement } from "react";

export interface Character {
  imgUrl: string;
  conceptImgUrl: string;
  name: string;
  occupation?: string;
  description: ReactElement;
  devDescription: string;
  songName: string;
  songLink: string;
}

// sample list of characters to display
export const characters: Character[] = [
  {
    imgUrl: "images/characters/gizmo.png",
    conceptImgUrl: "images/dev-blogs/week4.jpg",
    name: "Gizmo",
    description: (
      <div>
        <b>Pronouns:</b> Any/All <br />
        <b>Height:</b> Short <br />
        <b>Likes:</b> Doohickeys, Creativity, Being helpful
        <br />
        <b>Dislikes:</b> Bugs, Bugs
      </div>
    ),
    devDescription:
      "As the mascot of the game, Gizmo's design is based on the first IGM logo from roughly 2011 to 2018, using the \"M\" as his head. Gizmo's toy and ghost designs were created as separate concepts, but both would be utilized in the final design of the character. The wooden toy form is inspired by other blocky wooden string dolls, which had similar shape language to the original ghost form.",
    songName: "Lofi Hip Hop Beats To Relax/Study To",
    songLink: "https://www.youtube.com/watch?v=CFGLoQIhmow",
  },
  {
    imgUrl: "images/characters/FrshSkater.PNG",
    conceptImgUrl: "images/characters/dev-morgan.PNG",
    name: "Morgan",
    occupation: "Skater Freshman",
    description: (
      <div>
        <b>Pronouns:</b> She/They <br />
        <b>Height:</b> Average <br />
        <b>Year:</b> Freshmen <br />
        <b>Major:</b> Photography <br />
        <b>Likes:</b> Skating, Thrifting Clothes, Going Fast
        <br />
        <b>Dislikes:</b> 8AM classes, Wiping out
      </div>
    ),
    devDescription:
      "Morgan is designed after the Lead Content Developer as she appeared in her first year, with a casual personality and interests in ice skating and baggy clothes. She's designed around fast-travel, representing the RIT students that travels around campus using alternative transportation, and incorporating influence from the RIT Skate Club. This fast-travel motif is also reflected by the beanie she wears.",
    songName: "Skater Boi - Avril Lavigne",
    songLink: "https://www.youtube.com/watch?v=TIy3n2b7V9k",
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
        <b>Year:</b> Sophomore <br />
        <b>Major:</b> Packaging Science <br />
        <b>Likes:</b> Free Stuff, Making Mixtapes, Anime, Energy Drinks <br />
        <b>Dislikes:</b> Angry customers, Waking up
        <br />
      </div>
    ),
    devDescription:
      "Reese is the only character in the roster without visible eyes, inspiring his mellow personality and cheesy grin. His occupation as a dining worker was added later in development, which also inspired his name, a food pun that references Reese's™.",
    songName: "Feel Good Inc. - Gorillaz",
    songLink: "https://www.youtube.com/watch?v=HyHNuVaZJ-k",
  },
  {
    imgUrl: "images/characters/OLjr.png",
    conceptImgUrl: "images/characters/dev-emma.png",
    name: "Emma",
    occupation: "OL Junior",
    description: (
      <div>
        <b>Pronouns:</b> She/Her <br />
        <b>Year:</b> Junior <br />
        <b>Job:</b> Orientation Leader <br />
        <b>Major:</b> Game Design and Development <br />
        <b>Likes:</b> Pins, Early Morning Walks, Bucket Hats <br />
        <b>Dislikes:</b> Loud Music, Sleeping In
      </div>
    ),
    devDescription:
      "Emma is inspired by an image of a real RIT Orientation Leader found in research. Her design uses circular shape language to invoke a feeling of cheer, friendliness, and a warm welcome. Her outfit primarily uses RIT's colors to emphasize her pride in the institution.",
    songName: "Turbo Hustle - DJ Maestro",
    songLink:
      "https://www.youtube.com/watch?v=LGpaGI99Xl0&list=RDLGpaGI99Xl0&start_radio=1",
  },
  {
    imgUrl: "images/characters/HkySr.png",
    conceptImgUrl: "images/characters/dev-kai.PNG",
    name: "Kai",
    occupation: "Hockey Senior",
    description: (
      <div>
        <b>Pronouns:</b> They/Them <br />
        <b>Major:</b> Business <br />
        <b>Likes:</b> Playing hockey, Bandanas, Going on adventures
        <br />
        <b>Dislikes:</b> Boredom, Losing a contest
      </div>
    ),
    devDescription:
      "Kai is designed and named after a high-school friend of the Assistant Content Team Lead. They were originally designed with a wide triangle-like design, but it was shrunk to fit the other characters later on. Kai's outfit matches their occupation as a hockey player, being based on RIT hockey jerseys with a legally distinct tiger logo on the front.",
    songName: `Eye of the Tiger - Survivor`,
    songLink:
      "https://www.youtube.com/watch?v=btPJPFnesV4&list=RDbtPJPFnesV4&start_radio=1",
  },
  {
    imgUrl: "images/characters/spare-jamster.png",
    conceptImgUrl: "images/characters/dev-jamster.png",
    name: "Jamster",
    description: (
      <div>
        <b>Pronouns:</b> They/Them <br />
        <b>Height:</b> Short <br />
        <b>Year:</b> Unknown <br />
        <b>Major:</b> All <br />
        <b>Likes:</b> Games, Jams, GameJams <br />
        <b>Dislikes:</b> Sitting still, Being hungry
      </div>
    ),
    devDescription:
      "Jamster is the mascot of the RIT Game Developers Club (RGDC), designed by an alum who is a former E-board member of the club. Due to their representation as a mascot for RIT's Game Development majors, they were approved and added to the roster as a guest character with slight design modifications.",
    songName: "Hamster Dance -  Hampton and the Hamsters",
    songLink: "https://www.youtube.com/watch?v=p3G5IXn0K7A",
  },
];
