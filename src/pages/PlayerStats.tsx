
import PlaceholderImg from "../../public/images/landscape-placeholder.svg"

const PlayerStatsPage = () => {
    return (
        <div className="bg-black min-h-screen text-white p-4 md:p-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
                {/* Player Info Section */}
                <div className="lg:mt-8 order-1 lg:order-1">
                    <h1 className="text-3xl md:text-4xl mb-4 text-[#F76902] font-bold">Player</h1>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida magna ac ex pretium, eget luctus ante mollis. 
                        Cras nunc dolor, ullamcorper vitae dignissim nec, condimentum et augue. Etiam vestibulum ex dui, non fermentum lectus 
                        egestas nec. In hac habitasse platea dictumst. Proin eleifend, libero quis dignissim sollicitudin, libero eros efficitur 
                        ex, vitae ornare dui magna ultricies arcu.
                    </p>
                </div>

                {/* Player Image Section */}
                <div className="flex justify-center order-3 lg:order-2 lg:mt-0 mt-4 mb-8 lg:mb-0">
                    <img 
                        src={PlaceholderImg}
                        alt="Player portrait"
                        className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-cover rounded-lg lg:mt-20"
                    />
                </div>

                {/* Stats Section */}
                <div className="order-2 lg:order-3 border-2 border-[#7C878E] rounded-3xl p-4 md:p-6 lg:p-8">
                    <h2 className="text-center mb-6 text-[#F76902] text-xl md:text-2xl font-bold">Player Stats</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="border border-gray-600 p-2 md:p-3 text-center rounded-lg">
                                <div className="text-xs md:text-sm">Stat {i+1}</div>
                                <div className="font-bold text-lg">0</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerStatsPage;