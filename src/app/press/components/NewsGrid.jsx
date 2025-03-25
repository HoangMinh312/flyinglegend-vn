import NewsCard from "./NewsCard";

export default function NewsPage({ newsItems }) {
  console.log(newsItems);
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Tin Tức</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <NewsCard
            key={item.id}
            id={item.id}
            title={item.title}
            publishedDate={item.publishedDate} // ✅ Pass the full object
            excerpt={item.excerpt}
            image={
              item.heroImageUrl && item.heroImageUrl.trim() !== ""
                ? item.heroImageUrl
                : null
            }
            link={item.externalUrl}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
}
