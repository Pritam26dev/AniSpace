export default async function AnimeDetails({ params }) {
  const { id } = await params;
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  const data = await response.json();
  const anime = data.data;

  return (
    <main className="p-8">
      <div className="flex gap-8">
        <img
          src={anime.images.jpg.large_image_url}
          alt=
        {anime.title}
          className="w-[300px] rounded-xl"
        />

        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-300 mt-4">⭐ {anime.score}</p>

          <p className="text-lg text-gray-300 mt-2">Episodes:{anime.episodes}</p>

          <p className="text-lg text-gray-300 mt-2"> Status:{anime.status}</p>

          <h1 className="text-5xl font-bold mt-6">{anime.title}</h1>
        </div>
      </div>
    </main>
  );
}
