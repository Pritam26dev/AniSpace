"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("watchlist");
    if (saved) setWatchlist(JSON.parse(saved));
  }, []);

  const handleRemove = (id) => {
    const updated = watchlist.filter((anime) => anime.id !== id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a12] text-white px-10 py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">My Watchlist</h1>
        <p className="text-slate-500 text-sm mb-10">{watchlist.length} anime saved</p>

        {watchlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-32 gap-4">
            <p className="text-5xl">🎌</p>
            <p className="text-slate-400 text-lg font-medium">Your watchlist is empty</p>
            <p className="text-slate-600 text-sm">Go add some anime you want to watch</p>
            <Link
              href="/"
              className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Browse Anime
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {watchlist.map((anime) => (
              <div
                key={anime.id}
                className="bg-[#0f0f1a] border border-purple-900/20 hover:border-purple-900/40 rounded-2xl p-4 flex gap-6 items-center transition-colors"
              >
                <Link href={`/anime/${anime.id}`} className="flex-shrink-0">
                  <div className="relative w-[90px] h-[130px] rounded-xl overflow-hidden">
                    <Image
                      src={anime.image}
                      alt={anime.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

                <div className="flex-1">
                  <Link href={`/anime/${anime.id}`}>
                    <h2 className="text-lg font-semibold text-white hover:text-purple-400 transition-colors">
                      {anime.title}
                    </h2>
                  </Link>
                  <p className="text-slate-500 text-sm mt-1">⭐ {anime.rating ?? "N/A"}</p>
                </div>

                <button
                  onClick={() => handleRemove(anime.id)}
                  className="border border-red-900/30 hover:border-red-600/50 hover:bg-red-900/20 text-red-400 px-5 py-2 rounded-xl text-sm font-semibold transition-all"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}