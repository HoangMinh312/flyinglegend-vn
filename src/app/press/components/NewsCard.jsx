import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ title, date, excerpt, image, link }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p className="text-gray-700">{excerpt}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <span className="text-blue-600 hover:underline mt-2 block">Xem thêm →</span>
        </Link>
      </div>
    </div>
  );
}
