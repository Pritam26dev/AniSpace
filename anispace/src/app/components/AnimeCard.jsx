import Link from "next/link";
import Image from "next/image";

export default function AnimeCard({
  id,
  title,
  image,
  rating,
  watchlist,
  setWatchlist,
}) {
  const handleWatchlist = () => {
    if(watchlist.some((anime)=> anime.id===id)){
      return;
    }
    const animeToAdd={
      id,
      title,
      image,
      rating,
    }

    const updatedWatchlist = [...watchlist, animeToAdd];

    setWatchlist(updatedWatchlist);

    localStorage.setItem("watchlist",JSON.stringify(updatedWatchlist))

    console.log(updatedWatchlist)
    
    
  };

  return (
    <div
      href={`/anime/${id}`}
      className="w-[250px] bg-[#14141c] rounded-xl overflow-hidden flex-shrink-0"
    >
      <Image
  src={image}
  alt={title}
  width={250}
  height={350}
  className="object-cover"
/>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {title}
        </h2>

        <p className="text-gray-400 text-sm">
          ⭐ {rating}
        </p>

        <button
          onClick={handleWatchlist}
          className="mt-3 bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg text-sm transition"
        >
          ❤️ Watchlist
        </button>
      </div>
    </div>
  );
}