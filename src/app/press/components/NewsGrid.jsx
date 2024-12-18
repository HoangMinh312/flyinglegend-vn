import NewsCard from "./NewsCard";

export default function NewsPage({ newsItems }) {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Tin Tức</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            date={item.date}
            excerpt={item.excerpt}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
      {/* Pagination component could go here */}
    </section>
  );
}
