import Link from "next/link";
import Image from "next/image";

export default function AnimeCard({
  id,
  title,
  image,
  rating,
  watchlist,
  setWatchlist
}) {

  const handleWatchlist = (e) => {
    e.preventDefault();

    const updatedWAtchlist=[...watchlist, id];
    setWatchlist(updatedWAtchlist);
    console.log(updatedWAtchlist)
  };

  return (
    <Link href={`/anime/${id}`}>

      ...

      <p className="text-gray-400 text-sm">
        ⭐ {rating}
      </p>

      <button
        onClick={handleWatchlist}
      >
        ❤️ Watchlist
      </button>

    </Link>
  );
}