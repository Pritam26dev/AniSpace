export default async function AnimeDetails({ params }) {
  const { id } = await params;
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  const data = await response.json();
  console.log(data);
  if(!data.data){
    return <h1>Anime not found</h1>
  }
  const anime = data.data;


  return (
    <main className="p-8">
      <div className="h-[400px] bg-cover bg-center rounded-2xl" style={{
        backgroundImage:`url(${anime.images.jpg.large_image_url})`
      }}></div>
      <div className="flex gap-8 mt-8">
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="w-[300px] rounded-xl"
        />

        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-300 mt-4">⭐ {anime.score}</p>

          <p className="text-lg text-gray-300 mt-2">Episodes:{anime.episodes}</p>

          <p className="text-lg text-gray-300 mt-2"> Status:{anime.status}</p>

          <h1 className="text-5xl font-bold mt-6">{anime.title}</h1>

          <p className="text-gray-300 mt-6 leading-7 max-w-3xl">{anime.synopsis}</p>

          <div className="flex gap-3 mt-6 flex-wrap">
            {anime.genres.map((genre)=>(
              <span 
              key={genre.mal_id}
              className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                {genre.name}
                </span>)
            )}




          </div>

        </div>
      </div>
    </main>
  );
}
