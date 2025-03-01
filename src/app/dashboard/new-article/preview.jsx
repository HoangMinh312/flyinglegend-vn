const ArticlePreview = ({ article }) => {
  const isValidUrl = (url) => url && url.trim() !== "";

  return (
    <div className="p-4 border rounded">
      <h1 className="text-2xl font-bold">{article.title || "Title Preview"}</h1>
      <p className="italic">{article.excerpt || "Excerpt Preview"}</p>
      {isValidUrl(article.heroImageUrl) && (
        <img
          src={article.heroImageUrl}
          alt="Hero Image"
          className="w-full h-64 object-contain border rounded"
        />
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: article.body || "<p>Body Preview</p>",
        }}
      />
      {article.gallery && article.gallery.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {article.gallery.map((img, index) => (
            isValidUrl(img) && (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-32 object-contain border rounded"
              />
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlePreview;
