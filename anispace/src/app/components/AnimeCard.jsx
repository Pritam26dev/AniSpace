import Image from 'next/image';

export default function AnimeCard({ title, image, rating }) {
  return (
    <div className="w-[250px] bg-[#14141c] rounded-xl overflow-hidden">

      <Image
        src={image}
        alt="Anime"
        width={250}
        height={350}
        className="w-full h-87.5 object-cover"
      />

      <div className="p-4">

        <h2 className="text-lg font-semibold mb-2">
          {title}
        </h2>

        <p className="text-gray-400 text-sm">
          ⭐ {rating}
        </p>

      </div>

    </div>
  );
}