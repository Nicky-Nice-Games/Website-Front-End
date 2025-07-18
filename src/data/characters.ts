export interface Character {
  imgUrl: string;
  conceptImgUrl: string;
  name: string;
  occupation?: string;
  description: string;
  devDescription: string;
  songName: string;
  songLink: string;
}

// sample list of characters to display
export const characters: Character[] = [
  {
    imgUrl: "images/characters/gizmo.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Gizmo",
    description: `Pronouns: any/all
    Height: Short
    Likes: Doohickeys, Creativity, Being helpful
    Dislikes: Bugs, Bugs`,
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
    description: `Pronouns: She/They
      Height: Average
      Year: Freshmen
      Major: Photography
      Likes: Skating, Thrifting Clothes, Going Fast
      Dislikes: 8AM classes, Wiping out`,
    devDescription: "blah blah blah...",
    songName: "Skater Boi - Avril Lavigne",
    songLink: "https://www.youtube.com/watch?v=TIy3n2b7V9k",
  },
  {
    imgUrl: "images/characters/reese.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Reese",
    occupation: "Dining Sophomore",
    description: `Pronouns: He/Him
      Height: Average
      Year: Sophomore
      Major: Packaging Science
      Likes: Free Stuff, Making Mixtapes, Anime, Energy Drinks
      Dislikes: Angry customers, Waking up`,
    devDescription: "blah blah blah...",
    songName: "Feel Good Inc. - Gorillaz",
    songLink: "https://www.youtube.com/watch?v=HyHNuVaZJ-k",
  },
  {
    imgUrl: "images/characters/OLjr.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Emma",
    occupation: "OL Junior",
    description: `Pronouns: She/Her
      Height: Average
      Year: Junior
      Job: Orientation Leader
      Major: Game Design and Development
      Likes: Pins, Early Morning Walks, Bucket Hats
      Dislikes: Loud Music, Sleeping In`,
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
    description: `Pronouns: They/Them
      Height: Tall
      Major: Business
      Likes: Playing hockey, Bandanas, Going on adventures
      Dislikes: Boredom, Losing a contest`,
    devDescription: "blah blah blah...",
    songName: `Eye of the Tiger - Survivor`,
    songLink:
      "https://www.youtube.com/watch?v=btPJPFnesV4&list=RDbtPJPFnesV4&start_radio=1",
  },
  {
    imgUrl: "images/characters/spare-jamster.png",
    conceptImgUrl: "images/placeholder/placeholder.PNG",
    name: "Jamster",
    description: `Pronouns: They/Them
      Height: Short
      Year: Unknown
      Major: All
      Likes: Games, Jams, Gamejams
      Dislikes: Sitting still, Being hungry`,
    devDescription: "JAMMMMSTER",
    songName: "Hamster Dance -  Hampton and the Hamsters",
    songLink: "https://www.youtube.com/watch?v=p3G5IXn0K7A",
  },
];
