import { useState, useEffect } from "react";
import { columns } from "../components/leaderboard/columns"
import { DataTable } from "../components/leaderboard/data-table"

const LeaderboardPage = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        const getLeaderboardData = async (): Promise<any> => {
            const response: Response = await fetch("data/leaderboard-data.json");
            const data = await response.json();
            console.log(data);
            setLeaderboardData(data);
        }

        getLeaderboardData();
    }, [])
    
    if (leaderboardData.length == 0) return(
        <div className="text-center">
            <h1 className="text-black m-10 text-5xl"> Leaderboard</h1>
            <p>No data found!</p>
        </div>
    );

    return (
        <div className="text-center">
            <h1 className="text-black m-10 text-5xl"> Leaderboard</h1>
                <DataTable columns={columns} data={leaderboardData} />
        </div>
    )
}
export default LeaderboardPage