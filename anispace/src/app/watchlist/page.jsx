"use client";
import { useEffect, useState } from "react";
import Navbar  from "../components/Navbar";

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");

    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []);

  const handleRemove = (id) => {
    const updatedWatchlist = watchlist.filter(
      (anime) => anime.id !== id
    );

    setWatchlist(updatedWatchlist);

    localStorage.setItem(
      "watchlist",
      JSON.stringify(updatedWatchlist)
    );
  };

  return (
    <>
    <Navbar/>

    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        My Watchlist
      </h1>

      <div className="flex flex-col gap-6">
        {watchlist.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-gray-400 text-lg">
              No anime added yet.
            </p>
          </div>
        ) : (
          watchlist.map((anime) => (
            <div
              key={anime.id}
              className="bg-[#14141c] rounded-xl p-4 flex gap-6 items-center"
            >
              <div className="w-[120px] h-[170px] bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-2xl">
                  {anime.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  ⭐ {anime.rating}
                </p>

                
              </div>

              <button
                onClick={() => handleRemove(anime.id)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </main>
    </>
  );
}