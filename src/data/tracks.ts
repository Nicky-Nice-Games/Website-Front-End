//Track Interface with needed information
export interface Track {
  imgUrl: string;
  name: string;
  description: string;
  devDescription: string;
}

export const tracks: Track[] = [
  {
    imgUrl: "images/tracks/OuterLoop.png",
    name: "Outer Loop",
    description:
      "This Outer Loop is around RIT campus, you may have driven around here as if you drive on campus this loops is used very often, if you are ready to finally be able to ignore the stop signs and be ready to rev your engine and speed.",
    devDescription: "Outer Loop Dev Stuff",
  },
  {
    imgUrl: "images/tracks/kingramses.jpg",
    name: "Golisano Hall",
    description:
      "Have you ever wanted to go around golisano, well you can now. going past classrooms, up and down the floors.",
    devDescription: "Golisano Dev Stuff",
  },
  {
    imgUrl: "images/tracks/dorm.png",
    name: "Dorm",
    description:
      "Remember the days you used to live in the dorm? well if you wanna relive it with a better memory you can, speed around the dorm in tiny karts. if you still live in the dormside or will be living there be ready to live this experience and dont forget to clean your room otherwise little characters might drive around it.",
    devDescription: "Dorm Dev Stuff",
  },
  {
    imgUrl: "images/tracks/kingramses.jpg",
    name: "Finals Brick Road",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque aperiam quo, consectetur architecto officia aliquid ea corrupti asperiores, ut quos. Excepturi atque quae minima. Possimus nemo eaque similique fugiat.",
    devDescription: "Finals Brick Road Dev Stuff",
  },
];
