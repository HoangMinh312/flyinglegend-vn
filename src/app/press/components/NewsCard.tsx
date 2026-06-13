import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ title, date, excerpt, image, link }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-500">{date}</p>
        <p className="text-gray-700">{excerpt}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <span className="mt-2 block text-blue-600 hover:underline">
            Xem thêm →
          </span>
        </Link>
      </div>
    </div>
  );
}
