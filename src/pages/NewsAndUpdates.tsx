import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CloseIcon } from "@/components/content/close-icon";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { type Update, updates } from "@/data/updates";
import "@react-pdf-viewer/core/lib/styles/index.css";
import HeaderBanner from "@/components/ui/header-banner";

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
      setIsMobile(window.innerWidth < 770);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // state for tracking which item is active (expanded) or not
  const [active, setActive] = useState<Update | boolean | null>(null);
  const id = useId(); // unique ID for layout animations
  const ref = useRef<HTMLDivElement>(null); // ref for detecting outside clicks
  // Separtes the most recent update from the rest
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
    <div className="min-h-screen bg-[url('images/items-background.png')] 
    bg-[#BBB] bg-size-[90%] md:bg-size-[80%] bg-repeat bg-fixed bg-cover bg-blend-difference pt-[1rem]">
      <HeaderBanner text="News and Updates"></HeaderBanner>
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
              className={`w-18/20 h-[90%] md:h-150 md:max-h-[70%] bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden ${
                isMobile
                  ? "flex flex-col overflow-y-auto"
                  : "flex flex-col md:flex-row"
              }`}
            >
              {isMobile ? (
                // Mobile layout
                <>
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <img // Moblie image
                      src={active.image}
                      alt={active.title}
                      className="w-full max-h-72 object-top"
                    />
                  </motion.div>
                  <div className="relative w-full flex flex-col p-6 h-full overflow-hidden">
                    {/* x button */}
                    <button
                      onClick={() => setActive(null)}
                      className="absolute top-4 right-4 z-50 bg-white dark:bg-neutral-900 p-1 rounded-full shadow hover:scale-105"
                      aria-label="Close"
                    >
                      <CloseIcon />
                    </button>
                    <motion.h3 // Mobile title
                      layoutId={`title-${active.title}-${id}`}
                      className="text-header3 text-black mb-4"
                    >
                      {active.title}
                    </motion.h3>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                      <Viewer
                        fileUrl={active.contentLink}
                        defaultScale={SpecialZoomLevel.PageWidth}
                      />
                    </Worker>
                  </div>
                </>
              ) : (
                // Desktop layout
                <>
                  <motion.div
                    layoutId={`image-${active.title}-${id}`}
                    className="min-w-2/5 md:h-auto"
                  >
                    <img // Desktop image
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-top"
                    />
                  </motion.div>

                  <div className="relative w-full flex flex-col p-6 min-w-3/5 xl:min-w-2/5 h-full overflow-hidden">
                    {/* x button */}
                    <button
                      onClick={() => setActive(null)}
                      className="absolute top-4 right-4 z-50 bg-white dark:bg-neutral-900 p-1 rounded-full shadow hover:scale-105"
                      aria-label="Close"
                    >
                      <CloseIcon />
                    </button>

                    <motion.h3 // Desktop title
                      layoutId={`title-${active.title}-${id}`}
                      className="text-header3 text-black mb-4"
                    >
                      {active.title}
                    </motion.h3>

                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                      <Viewer
                        fileUrl={active.contentLink}
                        defaultScale={SpecialZoomLevel.PageWidth}
                      />
                    </Worker>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      {/* Most recent update */}
      <div className="flex justify-center">
        <motion.div
          layoutId={`item-${mostRecentUpdate.title}-${id}`}
          key={mostRecentUpdate.id}
          onClick={() => setActive(mostRecentUpdate)}
          className="col-span-1 sm:col-span-2 lg:col-span-3 max-w-200 bg-white text-black rounded-xl shadow overflow-hidden cursor-pointer m-4"
        >
          <img
            src={mostRecentUpdate.image}
            alt={mostRecentUpdate.title}
            className="w-full max-h-96 object-cover transition-transform duration-300 hover:scale-120"
          />
          <div className="p-4 bg-white relative z-2">
            <p className="text-xs text-[#F76902] font-semibold mb-1">
              {mostRecentUpdate.date}
            </p>
            <h2 className="text-lg font-bold">{mostRecentUpdate.title}</h2>
            <p className="text-sm mt-1">{mostRecentUpdate.subtitle}</p>
          </div>
        </motion.div>
      </div>

      {/* Grid container: 
            - 1 column on small screens,
            - 2 columns on small+ (sm),
            - 3 columns on large+ (lg),
            - with spacing (gap-6) between items */}
      <div className="grid m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px]">
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
              cursor-pointer m-4`}
            >
              {/* Image */}
              <img
                src={update.image}
                alt={update.title}
                className={`w-full transition-transform duration-300 hover:scale-120 object-fill ${
                  isFullWidth ? "h-96" : "h-72"
                } `}
              />
              {/* Text content of the update */}
              <div className="p-4 relative bg-white z-2">
                {/* Date */}
                <p className="text-[15px] poppins text-[#F76902] font-bold mb-1">
                  {update.date}
                </p>
                {/* Title */}
                <h2 className="text-[24px] poppins font-bold">
                  {update.title}
                </h2>
                {/* Subtitle */}
                <p className="text-body mt-1">{update.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Only shows these buttons if its the desktop version*/}
      {!isMobile && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="cursor-pointer disabled:cursor-auto px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 hover:bg-gray-600"
          >
            Previous
          </button>
          <div className="text-white px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</div>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="cursor-pointer disabled:cursor-auto px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 hover:bg-gray-600"
          >
            Next
          </button>
        </div>
      )}
      {/* Only shows this button if its the mobile version*/}
      {isMobile && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 hover:bg-gray-600"
          >
            ↑ Back to top
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsAndUpdatesPage;
