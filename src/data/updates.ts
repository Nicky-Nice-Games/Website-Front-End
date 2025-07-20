// Array of updates
interface Update {
  id: number;
  title: string;
  date: string;
  subtitle: string;
  image: string;
  contentLink: string;
}

const updates: Update[] = [
  {
    id: 1,
    title: "Week 1",
    date: "5/25/2025",
    subtitle: "Start of production",
    image: "images/dev-blogs/week1.png",
    contentLink: "data/dev-blogs/week1.pdf",
  },
  {
    id: 2,
    title: "Week 2",
    date: "6/1/2025",
    subtitle: "We have characters now!",
    image: "images/dev-blogs/week2.jpg",
    contentLink: "data/dev-blogs/week2.pdf",
  },
  {
    id: 3,
    title: "Week 3",
    date: "6/9/2025",
    subtitle: "We've come up with a new branding for our game",
    image: "images/dev-blogs/week3.png",
    contentLink: "data/dev-blogs/week3.pdf",
  },
  {
    id: 4,
    title: "Week 4",
    date: "6/16/2025",
    subtitle: "A new mascot has been chosen",
    image: "images/dev-blogs/week4.jpg",
    contentLink: "data/dev-blogs/week4.pdf",
  },
  {
    id: 5,
    title: "Week 5",
    date: "6/23/2025",
    subtitle: "Our first build of the game",
    image: "images/dev-blogs/week5.png",
    contentLink: "data/dev-blogs/week5.pdf",
  },
];

export { type Update, updates };
