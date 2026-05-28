"use client";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimeRow from "./components/AnimeRow";
import SkeletonCard from "./components/SkeletonCard";

export default function Home() {

  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchAnime = async () => {

      const response = await fetch(
        "https://api.jikan.moe/v4/top/anime"
      );

      const data = await response.json();

      setAnimeData(data.data);

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

      {!loading && (
        <AnimeRow
          title="Trending Anime"
          animeData={animeData}
        />
      )}

    </main>
  );
}