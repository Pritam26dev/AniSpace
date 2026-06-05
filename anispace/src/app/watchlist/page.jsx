"use client"
import {useEffect,useState} from "react";

export default function WatchlistPage(){
    const [watchlist,setWatchlist]=useState([]);
    console.log(watchlist);

    useEffect(() => {
  const savedWatchlist = localStorage.getItem("watchlist");

  if (savedWatchlist) {
    setWatchlist(JSON.parse(savedWatchlist));
  }
}, []);
    return(
        <main>
            <h1>My WatchList</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {watchlist.length === 0?( 
                <p>
                    No Anime Added yet
                </p>
            ):(
                watchlist.map((anime)=>(
                    <div key={anime.id} 
                    className="bg-[#14141c] rounded-xl overflow-hidden">
                        <div className="p-4">
                            <h2 className="font-semibold">
                                {anime.title}
                            </h2>
                        </div>
                    </div>
                ))
            
            )}
            </div>
        </main>
    )
}