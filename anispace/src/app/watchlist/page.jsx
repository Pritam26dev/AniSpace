"use client"
import {useEffect,useState} from "react";

export default function WatchlistPage(){
    const [watchlist,setWatchlist]=useState([]);

    useEffect(()=>{
        const savedWatchlist=localStorage.getItem("watchlist");

        if(savedWatchlist){
            setWatchlist(
                JSON.parse(savedWatchlist)
            )
        }
    })
    return(
        <main>
            <h1>My WatchList</h1>

            <p className="text-gray-400 mt-4"> No anime added yet</p>
        </main>
    )
}