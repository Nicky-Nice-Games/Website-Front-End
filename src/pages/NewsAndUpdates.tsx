import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";


interface ContentBlock {
  type: "paragraph" | "list" | "heading";
  text?: string;
  items?: string[];
  ordered?: boolean;
  level?: number; // for headings
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
    title: "Update 1",
    date: "6/3/2025",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos",

    image: './images/placeholder/OIP.jpg',
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
      { type: "paragraph", text: "Sketching"},
      { type: "list", 
        ordered: false,
        items: [
          "8 sketched race track concepts",
        ]
      }
    ]

  },
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
              className={`w-19/20 h-[90%] md:h-130 md:max-h-[90%] bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden ${
                isMobile
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
                  <div className="p-6">
                    <div className="flex flex-row justify-between">
                      <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-2xl mb-4"
                    >
                      {active.title}
                    </motion.h3>

                    <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-base max-h-90 overflow-y-scroll">
                      {active.text.map((block, i) => {
                        if (block.type === "paragraph") {
                          return <p key={i}>{block.text}</p>;
                        }

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
                              className={`${block.ordered ? "list-decimal" : "list-disc"
                                } list-inside pl-4 space-y-1`}
                            >
                              {block.items?.map((item, j) => <li key={j}>{item}</li>)}
                            </ListTag>
                          );
                        }

                        return null;
                      })}
                    </div>
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
                  <div className="p-6 h-fit">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex flex-row justify-between">
                          <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="font-medium text-neutral-700 dark:text-neutral-200 text-2xl mb-4"
                        >
                          {active.title}
                        </motion.h3>

                        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-base max-h-90 overflow-y-scroll">
                          {active.text.map((block, i) => {
                            if (block.type === "paragraph") {
                              return <p key={i}>{block.text}</p>;
                            }

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
                                  className={`${block.ordered ? "list-decimal" : "list-disc"
                                    } list-inside pl-4 space-y-1`}
                                >
                                  {block.items?.map((item, j) => <li key={j}>{item}</li>)}
                                </ListTag>
                              );
                            }

                            return null;
                          })}
                        </div>
                      </div>
                    </div>
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
              className={`${
                isFullWidth ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
              } bg-white text-black rounded-xl shadow overflow-hidden 
        cursor-pointer hover:scale-105 m-4`}
            >
              {/* Image */}
              <img
                src={update.image}
                alt={update.title}
                className={`w-full ${
                  isFullWidth ? "h-96" : "h-72"
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

// const CloseIcon = () => {
//   return (
//     <motion.svg
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0,
//         transition: {
//           duration: 0.02,
//         },
//       }}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-6 w-6 text-black"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 6l-12 12" />
//       <path d="M6 6l12 12" />
//     </motion.svg>
//   );
// };

export default NewsAndUpdatesPage;
