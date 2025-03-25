const ArticlePreview = ({ article }) => {
  return (
    <div className="p-4 border rounded">
      <h1 className="text-2xl font-bold">{article.title || "Title Preview"}</h1>
      <p className="italic">{article.excerpt || "Excerpt Preview"}</p>

      {article.heroImageUrl && (
        <img src={article.heroImageUrl} alt="Hero Image" className="w-full h-64 object-contain border rounded" />
      )}

      {article.type === "external" ? (
        <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Read Full Article
        </a>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: article.body || "<p>Body Preview</p>" }} />
      )}

      {article.gallery?.length > 0 && article.type === "internal" && (
        <div className="grid grid-cols-3 gap-2">
          {article.gallery.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-32 object-contain border rounded" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticlePreview;
