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
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Gizmo",
    description: (
      <div>
        <b>Pronouns:</b> Any/All <br />
        <b>Height:</b> Short <br />
        <b>Likes:</b> Doohickeys, Creativity, Being helpful
        <br />
        <b>Dislikes:</b> Bugs, Bugs<br />
        <b>Favorite Song: </b> 
        <a className="text-[#d97706]" href="https://www.youtube.com/watch?v=CFGLoQIhmow">
         Lofi Hip Hop Beats To Relax/Study To</a>
      </div>
    ),
    devDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
  {
    imgUrl: "images/characters/FrshSkater.PNG",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
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
        <b>Dislikes:</b> 8AM classes, Wiping out<br />
        <b>Favorite Song: </b>
        <a className="text-[#d97706]" href="https://www.youtube.com/watch?v=TIy3n2b7V9k">
         Skater Boi - Avril Lavigne</a>
      </div>
    ),
    devDescription: "blah blah blah..."
  },
  {
    imgUrl: "images/characters/reese.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Reese",
    occupation: "Dining Sophomore",
    description: (
      <div>
        <b>Pronouns:</b> He/Him <br />
        <b>Height:</b> Average <br />
        <b>Year:</b> Sophomore <br />
        <b>Major:</b> Packaging Science <br />
        <b>Likes:</b> Free Stuff, Making Mixtapes, Anime, Energy Drinks <br />
        <b>Dislikes:</b> Angry customers, Waking up<br />
        <b>Favorite Song: </b>
         <a className="text-[#d97706]" href="https://www.youtube.com/watch?v=HyHNuVaZJ-k">
         Feel Good Inc. - Gorillaz</a>
      </div>
    ),
    devDescription: "blah blah blah..."
  },
  {
    imgUrl: "images/characters/emma.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Emma",
    occupation: "OL Junior",
    description: (
      <div>
        <b>Pronouns:</b> She/Her <br />
        <b>Year:</b> Junior <br />
        <b>Job:</b> Orientation Leader <br />
        <b>Major:</b> Game Design and Development <br />
        <b>Likes:</b> Pins, Early Morning Walks, Bucket Hats <br />
        <b>Dislikes:</b> Loud Music, Sleeping In <br />
        <b>Favorite Song: </b>
        <a className="text-[#d97706]" href="https://www.youtube.com/watch?v=LGpaGI99Xl0&list=RDLGpaGI99Xl0&start_radio=1">
        Turbo Hustle - DJ Maestro</a>
      </div>
    ),
    devDescription: "blah blah blah..."
  },
  {
    imgUrl: "images/characters/kai.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Kai",
    occupation: "Hockey Senior",
    description: (
      <div>
        <b>Pronouns:</b> They/Them<br />
        <b>Major:</b> Business<br />
        <b>Likes:</b> Playing hockey, Bandanas, Going on adventures<br />
        <b>Dislikes:</b> Boredom, Losing a contest<br/>
        <b>Favorite Song: </b>
        <a className="text-[#d97706]" href="https://www.youtube.com/watch?v=btPJPFnesV4&list=RDbtPJPFnesV4&start_radio=1">
        Eye of the Tiger - Survivor</a>
      </div>
    ),
    devDescription: "blah blah blah...",
  },
  {
    imgUrl: "images/characters/spare-jamster.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Jamster",
    description: (
      <div>
        <b>Pronouns:</b> They/Them <br />
        <b>Height:</b> Short <br />
        <b>Year:</b> Unknown <br />
        <b>Major:</b> All <br />
        <b>Likes:</b> Games, Jams, GameJams <br />
        <b>Dislikes:</b> Sitting still, Being hungry<br />
        <b>Favorite Song: </b>
<a className="text-[#d97706]" href="https://www.youtube.com/watch?v=p3G5IXn0K7A">
        Hamster Dance -  Hampton and the Hamsters</a>
      </div>
    ),
    devDescription: "JAMMMMSTER"
  },
];
