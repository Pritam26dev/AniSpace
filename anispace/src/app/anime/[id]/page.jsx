import Image from "next/image";
import Link from "next/link";

export default async function AnimeDetails({ params }) {
  const { id } = await params;

  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await response.json();

  if (!data.data) {
    return <h1 className="p-16 text-white text-4xl font-bold">Anime not found</h1>;
  }

  const anime = data.data;
  const episodeCount = anime.episodes || 0;

  return (
    <main className="min-h-screen bg-[#0a0a12] text-white">

      {/* Cinematic banner */}
      <div
        className="h-[420px] bg-cover bg-top relative"
        style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/20 via-[#0a0a12]/60 to-[#0a0a12]" />
      </div>

      {/* Info layout */}
      <div className="flex gap-10 px-10 -mt-36 relative items-start pb-12">
        <div className="flex-shrink-0 z-10">
          <Image
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            width={240}
            height={360}
            className="rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.7)] ring-1 ring-purple-900/40"
          />
        </div>

        <div className="flex-1 pt-36">
          {/* Genre badges */}
          <div className="flex gap-2 flex-wrap mb-4">
            {anime.genres?.slice(0, 3).map((genre) => (
              <span
                key={genre.mal_id}
                className="bg-purple-900/20 text-purple-400 border border-purple-800/30 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <h1 className="text-5xl font-bold tracking-tight leading-none mb-4">
            {anime.title}
          </h1>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-slate-400 text-sm">⭐ {anime.score ?? "N/A"}</span>
            <span className="text-slate-700">·</span>
            <span className="text-slate-400 text-sm">{anime.episodes ?? "?"} episodes</span>
            <span className="text-slate-700">·</span>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                anime.status === "Currently Airing"
                  ? "text-green-400 bg-green-900/10 border-green-800/20"
                  : "text-slate-500 bg-slate-800/30 border-slate-700/30"
              }`}
            >
              {anime.status}
            </span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-8">
            {anime.synopsis}
          </p>

          <div className="flex gap-3 flex-wrap">
            {anime.trailer?.url && (
              <a
                href={anime.trailer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                ▶ Watch Trailer
              </a>
            )}
            <button className="border border-purple-800/40 hover:border-purple-600/60 hover:bg-purple-900/20 text-purple-400 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all">
              ♡ Add to Watchlist
            </button>
          </div>
        </div>
      </div>

      {/* Episodes */}
      {episodeCount > 0 && (
        <section className="px-10 pb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Episodes</h2>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: Math.min(episodeCount, 48) }, (_, i) => (
              <Link
                key={i + 1}
                href={`/watch/${id}/${i + 1}`}
                className="w-12 h-12 flex items-center justify-center bg-[#0f0f1a] border border-purple-900/20 hover:border-purple-600/40 hover:bg-purple-900/20 hover:text-purple-400 text-slate-400 rounded-xl text-sm font-semibold transition-all"
              >
                {i + 1}
              </Link>
            ))}
            {episodeCount > 48 && (
              <span className="flex items-center px-4 text-slate-600 text-sm">
                +{episodeCount - 48} more
              </span>
            )}
          </div>
        </section>
      )}
    </main>
  );
}