//Track Interface with needed information
export interface Track {
  imgUrl: string;
  name: string;
  description: string;
  devDescription: string;
}

export const tracks: Track[] = [
  {
    imgUrl: "images/tracks/campus-circuit.png",
    name: "Campus Circuit",
    description:
      "This Outer Loop is around RIT campus, you may have driven around here as if you drive on campus this loops is used very often, if you are ready to finally be able to ignore the stop signs and be ready to rev your engine and speed.",
    devDescription: "Outer Loop Dev Stuff",
  },
  {
    imgUrl: "images/tracks/dorm-derby.png",
    name: "Dorm Room Derby",
    description:
      "Remember the days you used to live in the dorm? well if you wanna relive it with a better memory you can, speed around the dorm in tiny karts. if you still live in the dormside or will be living there be ready to live this experience and dont forget to clean your room otherwise little characters might drive around it.",
    devDescription: "Dorm Dev Stuff",
  },
    {
    imgUrl: "images/tracks/tech-house.png",
    name: "Tech House Turnpike",
    description:
      "Have you ever wanted to go around golisano, well you can now. going past classrooms, up and down the floors.",
    devDescription: "Golisano Dev Stuff",
  },
  {
    imgUrl: "images/tracks/all-nighter.png",
    name: "All-Nighter Expressway",
    description:
      `With finals coming up, and you havent studied yet.
      What can you do? Go over to academic side at 2 am and 
      do an average rit student event known as an all nighter.`,
    devDescription: "Finals Brick Road Dev Stuff",
  },
];
