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
          placeholder="Search anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
        />
      </div>

      {!loading && (
        <>
          <AnimeRow
            title="Trending Anime"
            animeData={filteredTrending}
            watchlist={watchlist}
            setWatchlist={setWatchlist}
          />

          <AnimeRow
            title="Currently Airing"
            animeData={filteredAiring}
            watchlist={watchlist}
            setWatchlist={setWatchlist}
          />

          <AnimeRow
            title="Upcoming Anime"
            animeData={filteredUpcoming}
            watchlist={watchlist}
            setWatchlist={setWatchlist}
          />
        </>
      )}
    </main>
  );
}