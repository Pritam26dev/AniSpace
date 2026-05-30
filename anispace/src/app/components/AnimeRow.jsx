import AnimeCard from "./AnimeCard"


export default function AnimeRow({title,animeData}){
    return(
        <section className="px-8 mt-16">

            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            {animeData?.length === 0 && (
                <p className="text-gray-400">
                    No anime found
                </p>
            )}
            <div className="flex gap-6 overflow-x-auto pb-4">
            {animeData?.map((anime,index) => (
            <AnimeCard
              key={`${anime.mal_id}-${index}`}
              id={anime.mal_id}
              title={anime.title}
              image={anime.images.jpg.image_url}
              rating={anime.score}
            />
          ))}

            </div>
        </section>
    )
}