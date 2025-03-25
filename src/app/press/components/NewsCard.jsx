import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ id, title, publishedDate, excerpt, image, link, type }) {
  // ✅ Ensure `publishedDate` is properly formatted
  console.log(publishedDate)
  const formattedDate =
    publishedDate && publishedDate._seconds
      ? new Date(publishedDate._seconds * 1000).toLocaleString("vi-VN", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Ho_Chi_Minh",
        })
      : "Không có ngày xuất bản"; // Default message if date is missing

  // ✅ Define destination link
  const destination = type === "external" ? link : `/articles/${id}`;

  return (
    <Link href={destination} target={type === "external" ? "_blank" : "_self"} rel="noopener noreferrer">
      <div
        className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        aria-label={`Read article: ${title}`}
      >
        {/* ✅ Render Image If Available */}
        {image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-4">{formattedDate} (GMT+7)</p>
          <p className="text-gray-700">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
