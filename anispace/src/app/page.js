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
  const [watchlist, setWatchlist] = useState([]);
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
      try {
        const [trendingResponse, airingResponse, upcomingResponse] = await Promise.all([
          fetch("https://api.jikan.moe/v4/top/anime"),
          fetch("https://api.jikan.moe/v4/seasons/now"),
          fetch("https://api.jikan.moe/v4/seasons/upcoming"),
        ]);

        const [trendingData, airingData, upcomingData] = await Promise.all([
          trendingResponse.json(),
          airingResponse.json(),
          upcomingResponse.json(),
        ]);

        setTrendingAnime(trendingData.data || []);
        setAiringAnime(airingData.data || []);
        setUpcomingAnime(upcomingData.data || []);
      } catch (error) {
        console.error("Error fetching anime:", error);
        setTrendingAnime([]);
        setAiringAnime([]);
        setUpcomingAnime([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a12]">
      <Navbar />
      <Hero />

      <div className="px-10 mt-8">
        <input
          type="text"
          placeholder="Search anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#0f0f1a] border border-purple-900/20 text-white placeholder-slate-600 focus:outline-none focus:border-purple-600/50 transition-colors mb-10"
        />
      </div>

      {loading ? (
        <div className="flex gap-5 overflow-x-auto pb-4 px-10 mt-14">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <>
          <AnimeRow title="Trending Anime" animeData={filteredTrending} watchlist={watchlist} setWatchlist={setWatchlist} />
          <AnimeRow title="Currently Airing" animeData={filteredAiring} watchlist={watchlist} setWatchlist={setWatchlist} />
          <AnimeRow title="Upcoming Anime" animeData={filteredUpcoming} watchlist={watchlist} setWatchlist={setWatchlist} />
        </>
      )}
    </main>
  );
}