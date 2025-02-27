import { useEffect, useState } from "react";

const ImagePicker = ({ onSelectImage, field }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/fetch-images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading images...</p>;

  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Select an Image</h2>
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative border border-gray-200 rounded-lg p-2 hover:shadow-lg transition"
          >
            <img
              src={img.secure_url}
              alt={`Image ${index}`}
              className="w-full h-32 object-contain cursor-pointer"
              onClick={() => onSelectImage(img.secure_url, field)}
            />
            <button
              onClick={() => onSelectImage(img.secure_url, field)}
              className="absolute bottom-2 left-2 bg-blue-500 text-white text-sm px-2 py-1 rounded"
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePicker;
