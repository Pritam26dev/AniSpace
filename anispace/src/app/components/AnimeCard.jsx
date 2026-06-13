import Link from "next/link";
import Image from "next/image";

export default function AnimeCard({ id, title, image, rating, watchlist, setWatchlist }) {
  const isInWatchlist = watchlist?.some((anime) => anime.id === id);

  const handleWatchlist = () => {
    if (isInWatchlist) return;
    const updated = [...watchlist, { id, title, image, rating }];
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="w-[200px] flex-shrink-0 bg-[#0f0f1a] rounded-2xl overflow-hidden border border-purple-900/20 hover:border-purple-600/50 hover:-translate-y-1 transition-all duration-300 group">
      <Link href={`/anime/${id}`} className="block relative h-[280px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-[#0a0a12]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-lg">
            View Details
          </span>
        </div>
      </Link>

      <div className="p-3">
        <Link href={`/anime/${id}`}>
          <h2 className="text-sm font-semibold text-slate-100 mb-1 leading-snug line-clamp-2 hover:text-purple-400 transition-colors">
            {title}
          </h2>
        </Link>
        <p className="text-xs text-slate-500 mb-3">⭐ {rating ?? "N/A"}</p>
        <button
          onClick={handleWatchlist}
          disabled={isInWatchlist}
          className={`w-full py-1.5 rounded-lg text-xs font-semibold transition-all
            ${isInWatchlist
              ? "bg-green-900/30 text-green-400 border border-green-800/30 cursor-default"
              : "bg-purple-900/20 text-purple-400 border border-purple-800/30 hover:bg-purple-600 hover:text-white hover:border-purple-600"
            }`}
        >
          {isInWatchlist ? "✓ Added" : "♡ Watchlist"}
        </button>
      </div>
    </div>
  );
}