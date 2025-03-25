import { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import ImagePicker from "./ImagePicker";
import SubmitButton from "./SubmitButton";
import { auth } from "@/firebase";
import { isValidURL } from "@/lib/utils";

const ArticleForm = ({ onPreview }) => {
  const [article, setArticle] = useState({
    title: "",
    excerpt: "",
    type: "internal", // Default to internal
    heroImageUrl: "",
    body: "",
    gallery: [],
    externalUrl: "",
    publishedDate: "",
  });

  const [showImagePicker, setShowImagePicker] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prev) => ({ ...prev, [name]: value }));
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

  // ✅ Handle input change correctly
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setArticle((prev) => ({ ...prev, publishedDate: newDate }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ List of required fields based on article type
    const requiredFields = ["title", "excerpt", "type"];
    if (article.type === "internal") {
      requiredFields.push("body");
    } else if (article.type === "external") {
      requiredFields.push("externalUrl", "publishedDate");
    }

    // ✅ Check for missing fields
    const missingFields = requiredFields.filter(
      (field) => !article[field] || article[field].trim() === ""
    );

    // ✅ Validate External URL (Only for External Articles)
    if (article.type === "external" && !isValidURL(article.externalUrl)) {
      alert("Please enter a valid external article URL.");
      setIsSubmitting(false);
      return;
    }

    if (missingFields.length > 0) {
      alert(
        `Please fill in the following required fields: ${missingFields.join(
          ", "
        )}`
      );
      setIsSubmitting(false);
      return;
    }
    try {
      const token = await auth.currentUser.getIdToken(); // Get Firebase Auth token
      const response = await fetch("/api/add-article", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...article,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Article added successfully with ID: ${data.id}`);
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error("Error adding article:", error);
      alert("Failed to add article, please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Title Input */}
      <div className="flex flex-col">
        <label htmlFor="title" className="font-semibold">
          News Title
        </label>
        <input
          id="title"
          name="title"
          placeholder="Title"
          value={article.title}
          onChange={handleChange}
          className="border p-2"
          required
        />
      </div>

      {/* Excerpt Input */}
      <div className="flex flex-col">
        <label htmlFor="excerpt" className="font-semibold">
          News Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          placeholder="Excerpt"
          value={article.excerpt}
          onChange={handleChange}
          className="border p-2"
          required
        />
      </div>

      {/* Article Type Selection */}
      <div className="flex flex-col">
        <label htmlFor="type" className="font-semibold">
          Article Type
        </label>
        <select
          id="type"
          name="type"
          value={article.type}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="internal">Internal</option>
          <option value="external">External</option>
        </select>
      </div>

      {/* Hero Image Upload */}
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
              onClick={() =>
                handleImageDelete(article.heroImageUrl, "heroImageUrl")
              }
              className="absolute top-2 right-2 text-white bg-red-500 p-1 rounded-full"
            >
              X
            </button>
          </div>
        )}
        {showImagePicker === "heroImageUrl" && (
          <ImagePicker onSelectImage={handleImageSelect} field="heroImageUrl" />
        )}
      </div>

      {/* Show Image Picker for Hero Image */}

      {/* External Article URL (Only for External Articles) */}
      {article.type === "external" && (
        <>
          <div className="flex flex-col">
            <label htmlFor="externalUrl" className="font-semibold">
              External Article URL
            </label>
            <input
              id="externalUrl"
              name="externalUrl"
              placeholder="https://example.com"
              value={article.externalUrl}
              onChange={handleChange}
              className="border p-2"
              required
            />
          </div>
          {/* ✅ Date Picker for External Articles */}
          <div className="flex flex-col">
            <label htmlFor="publishedDate" className="font-semibold">
              Published Date
            </label>
            <input
              type="date"
              id="publishedDate"
              name="publishedDate"
              value={article.publishedDate}
              onChange={handleDateChange}
              className="border p-2"
              required
            />
          </div>
        </>
      )}

      {/* Internal Article Fields (Body & Gallery) */}
      {article.type === "internal" && (
        <>
          <div className="flex flex-col">
            <label htmlFor="body" className="font-semibold">
              News Main Body
            </label>
            <textarea
              id="body"
              name="body"
              placeholder="Main Body"
              value={article.body}
              onChange={handleChange}
              className="border p-2 h-40"
            />
          </div>

          {/* Gallery Upload */}
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
            <div className="grid grid-cols-3 gap-2">
              {article.gallery.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt="Gallery"
                    className="border rounded w-full h-32 object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageDelete(img, "gallery")} // ✅ Pass the correct image URL
                    className="absolute top-2 right-2 text-white bg-red-500 p-1 rounded-full"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            {/* Show Image Picker for Hero Image */}
            {showImagePicker === "gallery" && (
              <ImagePicker onSelectImage={handleImageSelect} field="gallery" />
            )}
          </div>
        </>
      )}

      {/* Submit Button */}
      <SubmitButton isSubmitting={isSubmitting} onClick={handleSubmit} />
    </form>
  );
};

export default ArticleForm;
