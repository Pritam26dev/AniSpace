import Link from 'next/link';
import Image from 'next/image';

export default function AnimeCard({id, title, image, rating }) {
  return (
    <Link href={`anime/${id}`}>

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

    </Link>
  );
}