import NewsCard from "./NewsCard";

export default function NewsPage({ newsItems }) {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Tin Tức</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
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
