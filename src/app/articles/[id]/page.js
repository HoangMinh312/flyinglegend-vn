import { db } from "@/firebase/admin";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ArticlePage({ params }) {
  const { id } = await params; // ✅ Remove `await` (params is already available)

  try {
    const docRef = db.collection("articles").doc(id);
    const doc = await docRef.get();

    if (!doc.exists) return notFound();

    const article = { id: doc.id, ...doc.data() };

    return (
      <div className="container mx-auto px-4 py-16">
        {/* Article Title */}
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        {/* Article excerpt */}
        <h2 className="text-xl mb-2">{article.excerpt}</h2>

        {/* Date */}
        {/* Convert Firestore Timestamp or String to JavaScript Date */}
        <p className="text-sm text-gray-500 mb-4">
          {article.publishedDate
            ? new Date(article.publishedDate.seconds * 1000).toLocaleString(
                "vi-VN",
                {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZone: "Asia/Ho_Chi_Minh", // Vietnam Time
                }
              )
            : ""} {"(GMT +7)"}
        </p>

        {/* Hero Image */}
        {article.heroImageUrl && (
          <Image
            src={article.heroImageUrl}
            alt={article.title}
            width={800}
            height={450}
            className="w-full h-auto mb-4"
          />
        )}

        {/* Article Body */}
        <div
          dangerouslySetInnerHTML={{ __html: article.body }}
          className="prose max-w-none mb-6"
        />

        {/* ✅ Gallery Images (Only if Available) */}
        {article.gallery &&
          Array.isArray(article.gallery) &&
          article.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {article.gallery.map((img, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover rounded-lg border"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return notFound();
  }
}
