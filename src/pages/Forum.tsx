const posts = [
  {
    title: "POST TITLE",
    author: "author username",
    views: "X",
    replies: "Y",
    lastReplyBy: "username",
    date: "MM/DD/YYYY",
    time: "HH:MM AM/PM",
  },
  {
    title: "POST TITLE",
    author: "author username",
    views: "X",
    replies: "Y",
    lastReplyBy: "username",
    date: "MM/DD/YYYY",
    time: "HH:MM AM/PM",
  },
  {
    title: "POST TITLE",
    author: "author username",
    views: "X",
    replies: "Y",
    lastReplyBy: "username",
    date: "MM/DD/YYYY",
    time: "HH:MM AM/PM",
  },
  {
    title: "POST TITLE",
    author: "author username",
    views: "X",
    replies: "Y",
    lastReplyBy: "username",
    date: "MM/DD/YYYY",
    time: "HH:MM AM/PM",
  },
   {
    title: "POST TITLE",
    author: "author username",
    views: "X",
    replies: "Y",
    lastReplyBy: "username",
    date: "MM/DD/YYYY",
    time: "HH:MM AM/PM",
  },
];
const ForumPage = () => {
    return(

        <div className="min-h-screen bg-black p-6">
                <div className="max-w-6xl mx-auto p-4">
      {/* Search Bar */}
      <div className="bg-gray-200 p-4 rounded-t-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md bg-gray-100 focus:outline-none"
        />
      </div>

      {/* Posts */}
      {posts.map((post, index) => (
        <div
          key={index}
          className={`flex justify-between items-start border-b py-4 px-2 bg-white hover:bg-gray-200`}
        >
          {/* Left side: Title + Author */}
          <div>
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-sm text-gray-600">by {post.author}</p>
          </div>

          {/* Middle: Views + Replies */}
          <div className="text-right mr-6">
            <p>{post.views} views</p>
            <p>{post.replies} replies</p>
          </div>

          {/* Right side: Last reply info */}
          <div className="text-right">
            <p className="text-sm">Last reply by {post.lastReplyBy}</p>
            <p className="text-sm text-gray-500">
              on {post.date} at {post.time}
            </p>
          </div>
        </div>
      ))}
    </div>
        </div>
    );
}
export default ForumPage