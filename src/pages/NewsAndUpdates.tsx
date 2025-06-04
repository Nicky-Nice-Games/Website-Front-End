
// Array of updates
const updates = [
  {
    id: 1,
    title: "Update 1",
    date: "6/3/2025",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos",
    image: '/assets/OIP.jpg',
  },
  {
    id: 2,
    title: "Update 2",
    date: "6/4/2025",
    subtitle: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    image: '/assets/OIP.jpg',
  },
  {
    id: 3,
    title: "Update 3",
    date: "6/5/2025",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: '/assets/OIP.jpg',
  },
  {
    id: 4,
    title: "Update 4",
    date: "6/6/2025",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: '/assets/OIP.jpg',
  },
];

const NewsAndUpdatesPage = () => {
  return (
    <>
      <div className="min-h-screen bg-black p-6">

        {/* Grid container: 
            - 1 column on small screens,
            - 2 columns on small+ (sm),
            - 3 columns on large+ (lg),
            - with spacing (gap-6) between items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {/* Map over the updates array to render each update card */}
          {updates.map((update, index) => {
            // Every fourth item (0-based index) will be full-width
            const isFullWidth = index % 4 === 0;

            return (
              <div
                key={update.id} // Unique key for each item
                
                // Conditionally apply full-width spans based on screen size:
                // - col-span-1: default
                // - sm: span 2 columns
                // - lg: span all 3 columns (full width)
                className={`${
                  isFullWidth ? "col-span-1 sm:col-span-2 lg:col-span-3" : ""
                } bg-white text-black rounded-xl shadow overflow-hidden`}
              >
                
                {/* Update image */}
                <img
                  src={update.image}
                  alt={update.title}
                  // Full width for all images, but height depends on if it's full-width or not
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsAndUpdatesPage;
