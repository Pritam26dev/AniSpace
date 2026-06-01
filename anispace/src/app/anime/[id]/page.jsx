import Image from "next/image";

export default async function AnimeDetails({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}`
  );

  const data = await response.json();

  if (!data.data) {
    return <h1>Anime not found</h1>;
  }

  const anime = data.data;

  return (
    <main className="p-8">

      <div
        className="h-[400px] bg-cover bg-center rounded-2xl relative overflow-hidden"
        style={{
          backgroundImage: `url(${anime.images.jpg.large_image_url})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="flex gap-8 mt-8">

        <Image
  src={anime.images.jpg.large_image_url}
  alt={anime.title}
  width={300}
  height={450}
  className="rounded-xl"
/>

        <div className="flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            {anime.title}
          </h1>

          <p className="text-lg text-gray-300 mt-6">
            ⭐ {anime.score}
          </p>

          <p className="text-lg text-gray-300 mt-2">
            Episodes: {anime.episodes}
          </p>

          <p className="text-lg text-gray-300 mt-2">
            Status: {anime.status}
          </p>

          {anime.trailer?.url && (
            <a
              href={anime.trailer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg w-fit"
            >
              ▶ Watch Trailer
            </a>
          )}

          <p className="text-gray-300 mt-6 leading-7 max-w-3xl">
            {anime.synopsis}
          </p>

          <div className="flex gap-3 mt-6 flex-wrap">
            {anime.genres.map((genre) => (
              <span
                key={genre.mal_id}
                className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

        </div>

      </div>

    </main>
  );
}