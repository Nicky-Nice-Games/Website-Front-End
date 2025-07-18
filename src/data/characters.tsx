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
    imgUrl: "images/characters/gizmo.jpeg",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Gizmo",
    description: (
      <div>
        <b>Nickname:</b> Giz <br />
        <b>Pronouns:</b> Any/All <br />
        <b>Likes:</b> Doohickeys, Creativity, Being helpful
        <br />
        <b>Dislikes:</b> Scaring people
      </div>
    ),
    devDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    songName: "Lofi Hip Hop Beats To Relax/Study To",
    songLink: "https://www.youtube.com/watch?v=CFGLoQIhmow",
  },
  {
    imgUrl: "images/characters/FrshSkater.PNG",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Morgan",
    occupation: "Skater Freshman",
    description: (
      <div>
        <b>Pronouns:</b> She/They <br />
        <b>Year:</b> Freshmen <br />
        <b>Major:</b> Photography <br />
        <b>Likes:</b> Skating, Thrifting Clothes, Going Fast, Finding Spots
        <br />
        <b>Dislikes:</b> Waking Up For Class
      </div>
    ),
    devDescription: "blah blah blah...",
    songName: "Skater Boi - Avril Lavigne",
    songLink: "https://www.youtube.com/watch?v=TIy3n2b7V9k",
  },
  {
    imgUrl: "images/characters/SophDining.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Reese",
    occupation: "Dining Sophomore",
    description: (
      <div>
        <b>Pronouns:</b> He/Him <br />
        <b>Year:</b> Sophomore <br />
        <b>Major:</b> Packaging Science <br />
        <b>Likes:</b> Free Stuff, Creating Playlists For Events, Anime, Energy
        Drinks <br />
        <b>Dislikes:</b> Working 3 Jobs, Sleep <br />
      </div>
    ),
    devDescription: "blah blah blah...",
    songName: "Feel Good Inc. - Gorillaz",
    songLink: "https://www.youtube.com/watch?v=HyHNuVaZJ-k",
  },
  {
    imgUrl: "images/characters/OLjr.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Emma",
    occupation: "OL Junior",
    description: (
      <div>
        <b>Pronouns:</b> She/Her <br />
        <b>Year:</b> Junior <br />
        <b>Job:</b> Orientation Leader <br />
        <b>Major:</b> Game Design and Development <br />
        <b>Likes:</b> Pins, Walking, Early Morning Walks, Bucket Hats <br />
        <b>Dislikes:</b> Loud Music, Sleeping In
      </div>
    ),
    devDescription: "blah blah blah...",
    songName: "Turbo Hustle - DJ Maestro",
    songLink:
      "https://www.youtube.com/watch?v=LGpaGI99Xl0&list=RDLGpaGI99Xl0&start_radio=1",
  },
  {
    imgUrl: "images/characters/HkySr.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Kai",
    occupation: "Hockey Senior",
    description: (
      <div>
        <b>Pronouns:</b> They/Them <br />
        <b>Major:</b> Business <br />
        <b>Likes:</b> Hockey, Bandanas, Going On Adventures, Being Team Captain
        <br />
        <b>Dislikes:</b> Sitting around, Losing a game
      </div>
    ),
    devDescription: "blah blah blah...",
    songName: `Eye of the Tiger - Survivor`,
    songLink:
      "https://www.youtube.com/watch?v=btPJPFnesV4&list=RDbtPJPFnesV4&start_radio=1",
  },
  {
    imgUrl: "images/characters/spare-jamster.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Jamster",
    description: (
      <div>
        <b>Pronouns:</b> They/Them <br />
        <b>Year:</b> Unknown <br />
        <b>Major:</b> All <br />
        <b>Likes:</b> Games, Jams, GameJams <br />
        <b>Dislikes:</b> Not Getting Snacks
      </div>
    ),
    devDescription: "JAMMMMSTER",
    songName: "Hamster Dance -  Hampton and the Hamsters",
    songLink: "https://www.youtube.com/watch?v=p3G5IXn0K7A",
  },
];
