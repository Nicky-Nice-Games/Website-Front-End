
import PlaceholderImg from "../assets/Media/Images/placeholder.PNG"
const PlayerStatsPage = () => {
    return(

        <>      
                <div className="bg-black min-h-screen text-white p-8">
                    <div className=" grid grid-cols-3 gap-4 w-full h-screen justify-items-center ml-[5%] mr-[5%]">
                        <div className=" mt-30 mr-8">
                            <h1 className="text-4xl mb-4 text-[#F76902] font-bold"> Player</h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida magna ac ex pretium, eget luctus ante mollis. Cras nunc dolor, ullamcorper vitae dignissim nec, condimentum et augue. Etiam vestibulum ex dui, non fermentum lectus egestas nec. In hac habitasse platea dictumst. Proin eleifend, libero quis dignissim sollicitudin, libero eros efficitur ex, vitae ornare dui magna ultricies arcu. Nulla nunc nisi, viverra id ante ut, dapibus lacinia diam. Mauris pretium at purus vitae tempus. Proin aliquet bibendum odio, eget commodo odio porta vel. Sed nibh nisi, commodo ac mauris facilisis, ultricies rhoncus lacus.
                            </p>
                        </div>
                        <div>
                            <img 
                                src={PlaceholderImg}
                                alt="Player portrait"
                                className="-full h-64 mt-[50%]"
                                >
                            </img>
                        </div>
                         <div className="self-start mt-46 mb-8 mr-30 border border-2 border-[#7C878E] rounded-4xl p-8">
                            <h2 className="text-center mb-8 text-[#F76902] text-2xl font-bold"> Player Stats</h2>
                            <div className="grid grid-cols-3 gap-8">
                            <div className="border p-4 text-center">Stat 1 <p> 0</p></div>
                            <div className="border p-4 text-center">Stat 2 <p> 0</p></div>
                            <div className="border p-4 text-center">Stat 3 <p> 0</p></div>
                            <div className="border p-4 text-center">Stat 4 <p> 0</p></div>
                            <div className="border p-4 text-center">Stat 5 <p> 0</p></div>
                            <div className="border p-4 text-center">Stat 6 <p> 0</p></div>
                            <div className="border p-4 text-center">Stat 7 <p> 0</p></div>
                            <div className="border p-4 text-center">Stat 8 <p> 0</p></div>
                            <div className="border p-4 text-center">Stat 9 <p> 0</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                
        </>
    );
}
export default PlayerStatsPage