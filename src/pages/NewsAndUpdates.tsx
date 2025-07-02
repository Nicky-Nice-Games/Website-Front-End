import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";



type ListItem = string | { text: string; children?: ListItem[] };

interface ContentBlock {
  type: "paragraph" | "list" | "heading" | "image";
  text?: string;
  items?: ListItem[];
  ordered?: boolean;
  level?: number; // for headings
  src?: string;
  alt?: string;
  caption?: string;
}

// Array of updates
interface Update {
  id: number;
  title: string;
  date: string;
  subtitle: string;
  image: string;
  text: ContentBlock[];
}

const updates: Update[] = [
  {
    id: 1,
    title: "Week 1",
    date: "5/25/2025",
    subtitle: "Start of production",

    image: './assets/OIP.jpg',
    text: [
      { type: "heading", level: 2, text: "Content Team" },
      { type: "paragraph", text: "Dev textures" },
      {
        type: "list",
        ordered: false,
        items: [
          "Finished 32 PNG dev textures for level designers.",
          "Finished dummy racer (rigged, weighted and textured)",
          "This dummy helped us notice early on that textures don’t port from Maya to Unity through .FBX, you have to override the texture in Unity for it to apply. Knowing this now will make it so we don’t have questions with future models",
          "Finished dummy kart",
        ]
      },
      { type: "paragraph", text: "Concept art" },
      {
        type: "list",
        ordered: false,
        items: [
          "Over 40 total separate concept character designs",
          "6 concepts for each year (freshman, sophomore, junior, senior)",
          "2 IGM “mascot” concepts by each team member",
          "6 sorta misc “themed” concepts",
        ]
      },
      { type: "heading", level: 2, text: "Level Design Team " },
      { type: "paragraph", text: "Sketching" },
      {
        type: "list",
        ordered: false,
        items: [
          {
            text: "8 sketched race track concepts",
            children: [
              "The Quarter Mile (2 Variations)",
              "Polisseni Loop (2 Variations)",
              "RIT Woods",
              "The SHED",
              "The SAU",
              "Global Village",
              "Double Dorm Room",
              "Finals Brick Road",
            ]
          },
          {
            text: "2 sketched battle mode track concepts",
            children: [
              "RITZ Dining Hall",
              "Ice Rink"
            ]
          }
        ]
      },
      { type: "paragraph", text: "Greyboxing (as of 11:10 AM 5/30/2025)" },
      {
        type: "list",
        ordered: false,
        items: [
          {
            text: "3 rough track layouts in Blender",
            children: [
              "Quarter Mile A & B",
              "Global Village"
            ]
          },
          {
            text: "1 detailed track layout in Unity",
            children: ["RIT Woods"]
          }
        ]
      },
      { type: "paragraph", text: "Test Chambers in Unity" },
      {
        type: "list",
        ordered: false,
        items: [
          { text: "1 road and ramps room for testing basic physics" },
          {
            text: "2 terrain testing chambers",
            children: [
              "The Tube: a straight path through all of the dev textures",
              "The Grid: a 5x6 grid of rooms each containing one dev texture"
            ]
          }
        ]
      },
      { type: "heading", level: 2, text: "QA Team" },
      { type: "paragraph", text: "Jonathan, Team lead worked with backend on Unity to backend & backend to Unity integration. Nathan worked with Gio, Bobby, and Zachary S, on the GitHub guides and setup. Lydia worked with the production team and assisted the frontend team with figma utilization. Ronnel made playtesting form questions for users to fill out." },
      { type: "heading", level: 2, text: "Gameplay Team " },
      {
        type: "list",
        ordered: false,
        items: [
          { text: "Prototyped menu and game states" },
          { text: "Prototyped AI pathing" },
          {
            text: "Prototyped HUD",
            children: [
              "Layout",
              "Minimap",
              "Other information"
            ]
          },
          { text: "Prototyped multiplayer networking" },
          {
            text: "Prototyped item system",
            children: [
              "Picking up items",
              "Using items"
            ]
          },
          { text: "Prototyped kart functionalities and player controls" },
        ]
      },
      { type: "heading", level: 2, text: "R&D Team" },
      {
        type: "list",
        ordered: false,
        items: [
          { text: "Prototyped communication between Arduino and Unity" },
          { text: "Research into components for the cabinet’s seat technology and design" }
        ]
      },
      { type: "heading", level: 2, text: "Production Team" },
      {
        type: "list",
        ordered: false,
        items: [
          { text: "Josh, the project lead, has been busy this week creating, rehearsing, and iterating a presentation that he’s giving to the whole team on Friday. Josh’s goal with his presentation is to unify our team’s vision and ensure we can all move forward confidently. We want everyone to have a solid understanding of the goals of our project and the direction we want to move in so that we can efficiently work together and create a cool project." },
          {
            text: "Further developed our social media marketing plans so that we can create a coherent brand identity",
            children: [
              "Created a social media usage survey for team members to fill out to gauge a better understanding of the most popular social media platforms amongst IGM students. After reviewing the responses, our plan is to use YouTube, Instagram, Reddit, TikTok, and X(Twitter) for our marketing purposes",
              "Started to build out a content calendar of when we plan to post specific content, which will help us in the coming weeks when we are actually posting",
              "Created a personal info survey to gather information on each team member to include in “Meet the Team” Instagram posts",
              "Prototyping designs for social media posts"
            ]
          },
          { text: "Created some quick mockup designs for posters/fliers that we would like to put around campus to market our game and communicated with team members outside our group who are helping to create finished designs" },
          { text: "Met with team leads to answer questions and give guidance to keep the project moving forward and ensure we are all working toward creating the best project" }
        ]
      },
      { type: "heading", level: 2, text: "Support Team" },
      {
        type: "list",
        ordered: false,
        items: [
          {
            text: "Shadowed teams to get a sense of what they were working on and how progress was coming along, keeping notes on a shared document",
            children: [
              "This allows us to see what they have completed as well as what they are currently doing, making it easier for us to jump in if assistance is needed"
            ]
          },
          { text: "Created a procedure document for cloning a GitHub repository" },
          {
            text: "Our build engineer, Giovanni Paulino, has also been very busy this week…",
            children: [
              "Created a Unity project and uploaded it to the main repository",
              "Cloned this repository on another device an opened the Unity project successfully, with the help of our local Game Developer, Bobby Pellegrino",
              "Troubleshooted issues with filename length, large files, and creating .gitignore and .gitattributes files with Nathan Arlauckas from the QA Team",
              {
                text: "In collaboration with several people, created a branch ruleset to:",
                children: [
                  "Prohibit pushing content directly to the main repository",
                  "Require all merges with the main repository to be in the form of a pull request",
                  "Require a member of specific teams (such as the QA team or Support team) to review and approve all pull requests",
                  "Require all pull requests to run a workflow with a GitHub-hosted runner to test the code (not a part of the branch ruleset, but a part of the pull request process)"

                ]
              },
              { text: "Gathered a list of tools used or that could be used in the development process" },
              { text: "Created a branching/merging procedure w/ QA team" },
              { text: "Worked with R&D to brainstorm different cabinet designs" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Week 2",
    date: "6/1/2025",
    subtitle: "Start of production",
    image: './assets/OIP.jpg',
    text: [
      {  type: "heading", level: 2, text: "Production Team"},
      {
        type: "list",
        ordered: false,
        items: [
          { text: "Narrowing down the name of the game"},
          { text: "Migrating Design Doc over to GitHub",
            children: [
              "Filled out more of the Lorem Ipsum in the design document"
            ]
          },
          { text: "Met with teams, checking in on how they’re doing so far on the project"},
          { text: "Josh tasks:",
            children: [
              "Worked on pitch presentation",
              "Did a lot of meetings"
            ]
          },
        ]
      },
      {
        type: "heading", level: 2, text: "R&D Team"
      },
      {
        type: "list",
        ordered: false,
        items: [
          {
            text: "Cabinets design research finished",
            children: [
              "Design Inspiration",
              "Best Practices",
              "Seating options",
              "Feedback hardware"
            ]
          },
          { text: "Design sketches completed"},
          { text: "World-scale 3D models finished"},
        ]
      },
      { type: "image", src: './assets/blog-image-1.png'}
    ]
  }
];

// Converts MM/DD/YYYY to YYYY-MM-DD for parsing
const toISO = (dateStr: string) => {
  const [month, day, year] = dateStr.split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const NewsAndUpdatesPage = () => {
  const sortedUpdates = [...updates].sort((a, b) => {
    const dateA = Date.parse(toISO(a.date));
    const dateB = Date.parse(toISO(b.date));
    return dateB - dateA;
  });

  // Checks if screen size is mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // state for tracking which item is active (expanded) or not
  const [active, setActive] = useState<Update | boolean | null>(null);
  const id = useId(); // unique ID for layout animations
  const ref = useRef<HTMLDivElement>(null); // ref for detecting outside clicks

  const [mostRecentUpdate, ...restUpdates] = sortedUpdates;
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(restUpdates.length / itemsPerPage);
  const paginatedUpdates = isMobile
    ? restUpdates
    : restUpdates.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  // Handlers
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    // close modal on Escape key
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    // lock body scroll when modal is open
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // close pop up when clicking outside
  useOutsideClick(ref, () => setActive(null));

  const RecursiveList: React.FC<{
    items: ListItem[];
    ordered?: boolean;
  }> = ({ items, ordered }) => {
    const ListTag = ordered ? "ol" : "ul";

    return (
      <ListTag className={`${ordered ? "list-decimal" : "list-disc"} pl-4 space-y-1`}>
        {items.map((item, i) => {
          if (typeof item === "string") {
            return <li key={i}>{item}</li>;
          }
          return (
            <li key={i}>
              {item.text}
              {item.children && <RecursiveList items={item.children} ordered={ordered} />}
            </li>
          );
        })}
      </ListTag>
    );
  };

  return (
    <div className="min-h-screen bg-black p-6">
      {/* overlay behind pop up when active */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-41"
          />
        )}
      </AnimatePresence>

      {/* expanded item pop up */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`item-${active.title}-${id}`}
              ref={ref}
              className={`w-19/20 h-[90%] md:h-130 md:max-h-[90%] bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden ${isMobile
                ? "flex flex-col overflow-y-auto"
                : "flex flex-col md:flex-row"
                }`}
            >
              {isMobile ? (
                // Mobile layout
                <>
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full object-cover object-top"
                    />
                  </motion.div>
                  <div className="relative w-full flex flex-col p-6 h-full overflow-hidden">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-4"
                    >
                      {active.title}
                    </motion.h3>

                    <div className="flex-1 overflow-y-auto pr-2 text-neutral-600 dark:text-neutral-400 space-y-4">
                      {active.text.map((block, i) => {
                        if (block.type === "paragraph") return <p key={i}>{block.text}</p>;

                        if (block.type === "heading") {
                          const HeadingTag = `h${block.level || 2}` as any;
                          return (
                            <HeadingTag
                              key={i}
                              className="font-bold text-neutral-800 dark:text-neutral-100 mt-4 text-xl"
                            >
                              {block.text}
                            </HeadingTag>
                          );
                        }

                        if (block.type === "list") {
                          const ListTag = block.ordered ? "ol" : "ul";
                          return (
                            <ListTag
                              key={i}
                              className={`${block.ordered ? "list-decimal" : "list-disc"} list-inside pl-4 space-y-1`}
                            >
                              <RecursiveList items={block.items ?? []} ordered={block.ordered} />
                            </ListTag>
                          );
                        }

                        if (block.type === "image") {
                          return (
                            <div key={i} className="my-4">
                              <img src={block.src} alt={block.alt || ""} className="w-full rounded-md" />
                              {block.caption && (
                                <p className="text-sm text-center text-neutral-500 mt-1 italic">
                                  {block.caption}
                                </p>
                              )}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </>
              ) : (
                // Desktop layout
                <>
                  <motion.div
                    layoutId={`image-${active.title}-${id}`}
                    className="min-w-4/10 md:h-auto"
                  >
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover object-top rounded-xl"
                    />
                  </motion.div>
                  <div className="relative w-full flex flex-col p-6 h-full overflow-hidden">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200 mb-4"
                    >
                      {active.title}
                    </motion.h3>

                    <div className="flex-1 overflow-y-auto pr-2 text-neutral-600 dark:text-neutral-400 space-y-4">
                      {active.text.map((block, i) => {
                        if (block.type === "paragraph") return <p key={i}>{block.text}</p>;

                        if (block.type === "heading") {
                          const HeadingTag = `h${block.level || 2}` as any;
                          return (
                            <HeadingTag
                              key={i}
                              className="font-bold text-neutral-800 dark:text-neutral-100 mt-4 text-xl"
                            >
                              {block.text}
                            </HeadingTag>
                          );
                        }

                        if (block.type === "list") {
                          const ListTag = block.ordered ? "ol" : "ul";
                          return (
                            <ListTag
                              key={i}
                              className={`${block.ordered ? "list-decimal" : "list-disc"} list-inside pl-4 space-y-1`}
                            >
                              <RecursiveList items={block.items ?? []} ordered={block.ordered} />
                            </ListTag>
                          );
                        }

                        if (block.type === "image") {
                          return (
                            <div key={i} className="my-4">
                              <img src={block.src} alt={block.alt || ""} className="w-full rounded-md" />
                              {block.caption && (
                                <p className="text-sm text-center text-neutral-500 mt-1 italic">
                                  {block.caption}
                                </p>
                              )}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      {/* Most recent update */}
      <motion.div
        layoutId={`item-${mostRecentUpdate.title}-${id}`}
        key={mostRecentUpdate.id}
        onClick={() => setActive(mostRecentUpdate)}
        className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white text-black rounded-xl shadow overflow-hidden cursor-pointer hover:scale-105 m-4"
      >
        <img
          src={mostRecentUpdate.image}
          alt={mostRecentUpdate.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-4">
          <p className="text-xs text-[#F76902] font-semibold mb-1">
            {mostRecentUpdate.date}
          </p>
          <h2 className="text-lg font-bold">{mostRecentUpdate.title}</h2>
          <p className="text-sm mt-1">{mostRecentUpdate.subtitle}</p>
        </div>
      </motion.div>

      {/* Grid container: 
            - 1 column on small screens,
            - 2 columns on small+ (sm),
            - 3 columns on large+ (lg),
            - with spacing (gap-6) between items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map over the updates array to render each update card */}
        {paginatedUpdates.map((update, index) => {
          //const globalIndex = (currentPage - 1) * itemsPerPage + index;
          index = index;

          const mostRecentId = sortedUpdates[0]?.id;
          // Only the most recent update is full width
          const isFullWidth = update.id === mostRecentId;

          return (
            <motion.div
              layoutId={`item-${update.title}-${id}`}
              key={update.id} // Unique key for each item
              onClick={() => setActive(update)}
              // Full width for all images, but height depends on if it's full-width or not
              className={`${isFullWidth ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
                } bg-white text-black rounded-xl shadow overflow-hidden 
        cursor-pointer hover:scale-105 m-4`}
            >
              {/* Image */}
              <img
                src={update.image}
                alt={update.title}
                className={`w-full ${isFullWidth ? "h-96" : "h-72"
                  } object-cover`}
              />
              {/* Text content of the update */}
              <div className="p-4">
                {/* Date */}
                <p className="text-xs text-[#F76902] font-semibold mb-1">
                  {update.date}
                </p>
                {/* Title */}
                <h2 className="text-lg font-bold">{update.title}</h2>
                {/* Subtitle */}
                <p className="text-sm mt-1">{update.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      {!isMobile && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
      {isMobile && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            ↑ Back to top
          </button>
        </div>
      )}
    </div>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.02,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default NewsAndUpdatesPage;
