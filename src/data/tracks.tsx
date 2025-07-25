import type { ReactElement } from "react";

//Track Interface with needed information
export interface Track {
  imgUrl: string;
  background: string;
  name: string;
  description: string;
  devDescription: ReactElement;
}

export const tracks: Track[] = [
  {
    imgUrl: "images/tracks/campus-circuit.png",
    background: `bg-[url(images/tracks/campus-circuit.png)]`,
    name: "Campus Circuit",
    description:
      `This Outer Loop is around RIT campus, you may have driven around here as if you drive on campus this loops is used very often,
       if you are ready to finally be able to ignore the stop signs and be ready to rev your engine and speed.`,
    devDescription: (
      <div className="flex flex-col-reverse md:flex-row">
        <img
          src="images/tracks/dev-campus-circuit.jpg"
          alt="Outer Loop Sketch"
          className="md:max-w-60 lg:max-w-[20vw]"
        />
        <p className="md:ml-10 text-center md:text-left">
          Campus Circuit is inspired by RIT's "Outer Loop," a large road that
          encircles the entire campus. As such, the track features multiple
          landmarks around campus, such as the Dorm buildings and the Gene
          Polisseni Center. As the first track in the game, Campus Circuit was
          given an intentionally simplistic layout to allow beginner players to
          familiarize themselves with the game's mechanics.
        </p>
      </div>
    ),
  },
  {
    imgUrl: "images/tracks/dorm-derby.png",
    background: `bg-[url(images/tracks/dorm-derby.png)]`,
    name: "Dorm Room Derby",
    description:
      "Remember the days you used to live in the dorm? well if you wanna relive it with a better memory you can, speed around the dorm in tiny karts. if you still live in the dormside or will be living there be ready to live this experience and dont forget to clean your room otherwise little characters might drive around it.",
    devDescription: (
      <div className="flex flex-col md:flex-row">
        <p className="md:mr-10 text-center md:text-left">
          The Dorm Room Derby is inspired by RIT's dorm rooms, where students
          make their second homes. Inspired by Mario Kart's Ribbon Road, the
          track was given a clean side and a messy side to its visuals,
          symbolizing a clean and messy roommate living in the same space. The
          track is of intermediate difficulty, testing players that have a basic
          familiarity with the game's mechanics.
        </p>
        <img
          src="images/tracks/dev-dorm-derby.jpg"
          alt="Dorm Room Sketch"
          className="md:max-w-60 lg:max-w-[20vw]"
        />
      </div>
    ),
  },
  {
    imgUrl: "images/tracks/tech-house.png",
    background: `bg-[url(images/tracks/tech-house.png)]`,
    name: "Tech House Turnpike",
    description:
      "Have you ever wanted to go around golisano, well you can now. going past classrooms, up and down the floors.",
    devDescription: (
      <div className="flex flex-col-reverse md:flex-row">
        <img
          src="images/tracks/dev-tech-house.jpg"
          alt="Tech House Sketch"
          className="md:max-w-60 lg:max-w-[20vw]"
        />
        <p className="md:ml-10">
          Tech House Turnpike is based on Golisano Hall, the primary building
          where many classes for Game Design majors are held. The primary appeal
          of the track is its vertically structured layout, split into 3
          separate floors. Its goal is to be particularly recognizable to Game
          Design students, who frequently visit the building it's based on.
        </p>
      </div>
    ),
  },
  {
    imgUrl: "images/tracks/all-nighter.png",
    background: `bg-[url(images/tracks/all-nighter.png)]`,
    name: "All-Nighter Expressway",
    description: `With finals coming up, and you havent studied yet.
      What can you do? Go over to academic side at 2 am and 
      do an average rit student event known as an all nighter.`,
    devDescription: (
      <div className="flex flex-col md:flex-row">
        <p className="md:mr-10">
          All-Nighter Expressway is heavily inspired by Mario Kart's Rainbow
          Road, in both aesthetics and challenge level. The track is set in
          nighttime to distinguish itself from the other tracks, which occur in
          daytime, as well as to symbolize the common practice of staying up
          late to finish assignments and study extensively. Much like its
          eponymous practice, All-Nighter Expressway is a final test of skill,
          encompassing the difficulty of all tracks before it.
        </p>
        <img
          src="images/tracks/dev-all-nighter.jpg"
          alt="Final Brick Road Sketch"
          className="md:max-w-60 lg:max-w-[20vw]"
        />
      </div>
    ),
  },
];
