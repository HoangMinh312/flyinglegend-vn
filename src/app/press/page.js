"use client";

import { useEffect, useState } from "react";
import { SubHeader } from "@/components/subheader";
import NewsPage from "./components/NewsGrid";

import subheaderimage from "./(assets)/subheader-pic1.jpg";

export default function PressPage() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/get-articles");
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <SubHeader
        title="Tin Tức"
        breadcrumbs={[
          { label: "Trang Chủ", href: "/" },
          { label: "Tin Tức", href: "/press" },
        ]}
        backgroundImage={subheaderimage}
      />
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50"></div>
            <p className="mt-4 text-gray-600 text-lg font-medium">
              Đang tải tin tức...
            </p>
          </div>
        ) : (
          <NewsPage newsItems={newsItems} />
        )}
      </div>
    </>
  );
}
