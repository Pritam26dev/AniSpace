import AnimeCard from "./AnimeCard";

export default function AnimeRow({ title, animeData, watchlist, setWatchlist }) {
  return (
    <section className="px-10 mb-14">
      <h2 className="text-2xl font-bold text-white tracking-tight mb-6">{title}</h2>
      {animeData?.length === 0 && (
        <p className="text-slate-600 text-sm">No anime found</p>
      )}
      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-purple-900/50 scrollbar-track-transparent">
        {animeData?.map((anime, index) => (
          <AnimeCard
            key={`${anime.mal_id}-${index}`}
            id={anime.mal_id}
            title={anime.title}
            image={anime.images.jpg.image_url}
            rating={anime.score}
            watchlist={watchlist}
            setWatchlist={setWatchlist}
          />
        ))}
      </div>
    </section>
  );
}