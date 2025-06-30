import { useState, useEffect } from "react";
import { columns } from "@/components/leaderboard/columns"
import { DataTable } from "@/components/leaderboard/data-table"

const LeaderboardPage = () => {
    const [mapId, setMapId] = useState(0);

    useEffect(()=> {}, [mapId]);

    if (mapId < 1) return <div className="text-center">
        <h1 className="bebas text-black italic mx-10 mt-8 text-5xl">Leaderboard</h1>
        <h2 className="text-xl mb-8 font-semibold">Click a map to view its leaderboard</h2>
        <MapSelect setMapId={setMapId} />
    </div>

    return <div className="text-center max-w-8/10 m-auto">
        <button onClick={() => setMapId(0)} className="absolute left-[10%] top-[11.5vh] text-xl font-bold px-7 py-1 bg-[url(images/arrow.png)] bg-size-[100%_100%] rotate-180 hover:-translate-x-3 transform transition duration-200">
            <h5 className="rotate-180 text-white">Back</h5>
        </button>
        <h1 className="bebas text-black italic m-10 text-5xl">Leaderboard</h1>
        <LeaderboardTable mapId={mapId} />
    </div>
}

const MapSelect = ({ setMapId }: {setMapId: Function}) => {
    interface Track{
        name: string;
        imgLink: string;
    }
    const tracks: Track[] = [
        {
            name: "RIT Outer Loop",
            imgLink: "images/content-assets/OuterLoop.png"
        },
        {
            name: "RIT Dorm Room",
            imgLink: "images/placeholder.PNG"
        },
        {
            name: "Golisano",
            imgLink: "images/placeholder.PNG"
        },
        {
            name: "Brick Road",
            imgLink: "images/placeholder.PNG"
        },
    ]
    return <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-between">
        {tracks.map(t => {
            return <div className="md:w-[45%] md:mx-4 mb-10">
                <h1 className="text-lg text-white font-semibold bg-gradient-to-r from-[#F66624] to-[#D84B3A] w-[40%] m-auto px-3 py-1 rounded-lg">{t.name}</h1>
                <button onClick={() => setMapId(tracks.indexOf(t) + 1)} className="hover:brightness-125">
                    <img src={t.imgLink} className="rounded-xl h-[30vh]"/>
                </button>
            </div>
        })}
    </div>
}

const LeaderboardTable = ({ mapId }: {mapId: number}) => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        const getLeaderboardData = async (): Promise<any> => {
            const response: Response = await fetch("./data/leaderboard-data.json");
            let data = await response.json();
            data = data.sort((a: any, b: any) => a.player.raceTimeMilliseconds - b.player.raceTimeMilliseconds);  
            data.map((item: any) => {
                item.profile.index = data.indexOf(item) + 1; 
            })
            console.log(data);
            setLeaderboardData(data);
        }

        getLeaderboardData();
    }, [])
    
    if (leaderboardData.length == 0) return<p>No data found!</p>;

    return <DataTable columns={columns} data={leaderboardData} />;
}
export default LeaderboardPage