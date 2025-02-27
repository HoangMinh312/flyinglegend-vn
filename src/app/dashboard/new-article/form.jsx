import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/index";
import { CldUploadWidget } from "next-cloudinary";
import ImagePicker from "./ImagePicker";

async function addArticle(articleData) {
  try {
    const articlesRef = collection(db, "articles");
    const docRef = await addDoc(articlesRef, articleData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const ArticleForm = ({ onPreview }) => {
  const [article, setArticle] = useState({
    title: "",
    excerpt: "",
    heroImageUrl: "",
    body: "",
    gallery: [],
  });

  const [showImagePicker, setShowImagePicker] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
    onPreview({ ...article, [name]: value });
  };

  const handleImageSelect = (url, field) => {
    if (field === "heroImageUrl") {
      setArticle({ ...article, heroImageUrl: url });
    } else if (field === "gallery") {
      setArticle((prev) => ({
        ...prev,
        gallery: [...prev.gallery, url],
      }));
    }
    setShowImagePicker("");
  };

  const handleImageDelete = (url, field) => {
    if (field === "heroImageUrl") {
      setArticle({ ...article, heroImageUrl: "" });
    } else if (field === "gallery") {
      setArticle((prev) => ({
        ...prev,
        gallery: prev.gallery.filter((img) => img !== url),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "articles"), {
        ...article,
        publishedDate: new Date(),
        lastEditedDate: new Date(),
      });
      alert("Article saved!");
    } catch (err) {
      console.error("Error adding article: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Title Input with Label */}
      <div className="flex flex-col">
        <label htmlFor="title" className="font-semibold">News Title</label>
        <input
          id="title"
          name="title"
          placeholder="Title"
          value={article.title}
          onChange={handleChange}
          className="border p-2"
        />
      </div>

      {/* Excerpt Input with Label */}
      <div className="flex flex-col">
        <label htmlFor="excerpt" className="font-semibold">News Excerpt</label>
        <input
          id="excerpt"
          name="excerpt"
          placeholder="Excerpt"
          value={article.excerpt}
          onChange={handleChange}
          className="border p-2"
        />
      </div>

      {/* Hero Image Upload & Picker */}
      <div className="flex flex-col gap-2 p-4 border rounded-xl">
        <span className="font-semibold">News Main Image</span>
        <div className="flex gap-2">
          <CldUploadWidget signatureEndpoint="/api/sign-image">
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="bg-green-500 text-white p-2 rounded"
              >
                Upload New Image
              </button>
            )}
          </CldUploadWidget>

          <button
            type="button"
            onClick={() => setShowImagePicker("heroImageUrl")}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Choose from Library
          </button>
        </div>
        {article.heroImageUrl && (
          <div className="relative w-full h-60">
            <img
              src={article.heroImageUrl}
              alt="Hero Preview"
              className="w-full h-full object-contain border rounded-xl"
            />
            <button
              type="button"
              onClick={() => handleImageDelete(article.heroImageUrl, "heroImageUrl")}
              className="absolute top-2 right-2 text-white bg-red-500 p-1 rounded-full"
            >
              X
            </button>
          </div>
        )}
      </div>

      {/* Show Picker for Hero Image */}
      {showImagePicker === "heroImageUrl" && (
        <ImagePicker onSelectImage={handleImageSelect} field="heroImageUrl" />
      )}

      {/* Gallery Upload & Picker */}
      <div className="flex flex-col gap-2 p-4 border rounded-xl">
        <span className="font-semibold">News Gallery Images</span>
        <div className="flex gap-2">
          <CldUploadWidget signatureEndpoint="/api/sign-image">
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="bg-green-500 text-white p-2 rounded"
              >
                Upload New Image
              </button>
            )}
          </CldUploadWidget>

          <button
            type="button"
            onClick={() => setShowImagePicker("gallery")}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Choose from Library
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 p-2 border rounded-xl">
          {article.gallery.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-32 object-contain border rounded"
              />
              <button
                type="button"
                onClick={() => handleImageDelete(img, "gallery")}
                className="absolute top-1 right-1 text-white bg-red-500 p-1 rounded-full"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Show Picker for Gallery */}
      {showImagePicker === "gallery" && (
        <ImagePicker onSelectImage={handleImageSelect} field="gallery" />
      )}

      {/* Body Input with Label */}
      <div className="flex flex-col">
        <label htmlFor="body" className="font-semibold">News Main Body</label>
        <textarea
          id="body"
          name="body"
          placeholder="Main Body"
          value={article.body}
          onChange={handleChange}
          className="border p-2 h-40"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded" onClick={handleSubmit}>
        Save Article
      </button>
    </form>
  );
};

export default ArticleForm;
