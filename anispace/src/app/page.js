"use client";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimeRow from "./components/AnimeRow";
import SkeletonCard from "./components/SkeletonCard";

export default function Home() {
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [airingAnime, setAiringAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredTrending = trendingAnime.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredAiring = airingAnime.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredUpcoming = upcomingAnime.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetchAnime = async () => {
      const [
        trendingResponse,
        airingResponse,
        upcomingResponse,
      ] = await Promise.all([
        fetch("https://api.jikan.moe/v4/top/anime"),
        fetch("https://api.jikan.moe/v4/seasons/now"),
        fetch("https://api.jikan.moe/v4/seasons/upcoming"),
      ]);

      const trendingData = await trendingResponse.json();
      const airingData = await airingResponse.json();
      const upcomingData = await upcomingResponse.json();

      setTrendingAnime(trendingData.data);
      setAiringAnime(airingData.data);
      setUpcomingAnime(upcomingData.data);

      setLoading(false);
    };

    fetchAnime();
  }, []);

  return (
    <main>
      <Navbar />

      <Hero />

      {loading && (
        <div className="flex gap-6 overflow-x-auto pb-4 px-8 mt-16">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}

      <div className="px-8 mt-8">
        <input
          type="text"
          placeholder="Search Naruto, One Piece, Attack on Titan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-blue-500"
        />

        {search && (
          <>
            <p className="text-gray-400 mt-3">
              Searching for: "{search}"
            </p>

            <p className="text-gray-400 mt-2">
              Trending Results: {filteredTrending.length}
            </p>

            <button 
            onClick={()=>setSearch("")}
            className="mt-3 px-4 py-2 bg-zinc-700 rounded-lg"
            >
              Clear Search
            </button>

            {filteredTrending.length === 0 &&
              filteredAiring.length === 0 &&
              filteredUpcoming.length === 0 && (
                <p className="text-red-400 mt-2">
                  No matching anime found.
                </p>
              )}
          </>
        )}
      </div>

      {!loading && (
        <>
          {filteredTrending.length > 0 && (
            <AnimeRow
              title="Trending Anime"
              animeData={filteredTrending}
            />
          )}

          {filteredAiring.length > 0 && (
            <AnimeRow
              title="Currently Airing"
              animeData={filteredAiring}
            />
          )}

          {filteredUpcoming.length > 0 && (
            <AnimeRow
              title="Upcoming Anime"
              animeData={filteredUpcoming}
            />
          )}
        </>
      )}
    </main>
  );
}