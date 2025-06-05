const ReactionButtons = ({ likes = 0, dislikes = 0 }) => (
    <div className="flex flex-col items-center space-y-2 ml-4 text-center">
        <div className="flex items-center space-x-2">
            <span>👍</span><span>{likes}</span>
        </div>
        <div className="flex items-center space-x-2">
            <span>👎</span><span>{dislikes}</span>
        </div>
    </div>
);



const parentPost = [
    {
        postTitle: "POST TITLE",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        profilePicture: '/assets/OIP.jpg',
        username: "Username",
        date: "MM/DD/YYYY",
        time: "HH/MM",
    }
]

const posts = [
    {
        username: "Username",
        date: "MM/DD/YYYY",
        time: "HH/MM",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        profilePicture: '/assets/OIP.jpg',
    },
    {
        postTitle: "POST TITLE",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        username: "Username",
        date: "MM/DD/YYYY",
        time: "HH/MM",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        profilePicture: '/assets/OIP.jpg',
    },
    {
        postTitle: "POST TITLE",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        username: "Username",
        date: "MM/DD/YYYY",
        time: "HH/MM",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        profilePicture: '/assets/OIP.jpg',
    },
    {
        postTitle: "POST TITLE",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        username: "Username",
        date: "MM/DD/YYYY",
        time: "HH/MM",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        profilePicture: '/assets/OIP.jpg',
    },
]

const ForumPost = () => {
    return (

        <div className="min-h-screen bg-black p-6">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow">
                {/* parent post */}
                {parentPost.map((parent, index) => (
                    <div key={index}>
                        <div className="flex">
                            {/* Profile Picture and Info Block */}
                            <div className="flex flex-col items-center mr-4">
                                <img src={parent.profilePicture} alt="profile picture" className="h-30 w-30 object-cover mb-2" />
                                <div className="text-center text-sm">
                                    <p className="font-bold">{parent.username}</p>
                                    <p>on {parent.date}</p>
                                    <p>at {parent.time}</p>
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="flex-1 ml-4 border p-4">
                                <h2 className="text-3xl font-bold mb-2">{parent.postTitle}</h2>
                                <p className="text-sm leading-relaxed">
                                    {parent.postText}
                                </p>
                            </div>

                            <ReactionButtons likes={1} dislikes={0} />
                        </div>

                        {/* Reply box */}
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Reply..."
                                className="w-full border p-3 text-gray-600 rounded"
                            />
                        </div>
                    </div>
                ))}


                {posts.map((post, index) => (
                    <div
                        key={index}>



                        {/* comment */}
                        <div className="flex items-start mt-4">
                            <img src={post.profilePicture} alt="profie picture" className="h-20 flex-shrink-0" />
                            <div className="bg-gray-400 text-white flex-1 p-4 ml-2 rounded-md mb-3">
                                <p className="font-bold">
                                    {post.username} <span className="font-normal text-sm">on {post.date} at {post.time}</span>
                                </p>
                                <p>{post.comment}</p>
                            </div>
                            <ReactionButtons likes={1} dislikes={0} />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default ForumPost