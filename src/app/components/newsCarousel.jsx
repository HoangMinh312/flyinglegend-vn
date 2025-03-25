"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch News from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/get-articles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ maxResults: 7 }),
        });

        if (!response.ok) throw new Error("Failed to fetch articles");

        const articles = await response.json();

        // ✅ Format articles to match carousel structure
        const formattedNews = articles.map((article) => ({
          id: article.id,
          title: article.title,
          date: article.publishedDate?.seconds
            ? new Date(
                article.publishedDate.seconds * 1000
              ).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                timeZone: "Asia/Ho_Chi_Minh",
              })
            : "Không có ngày xuất bản",
          image: article.heroImageUrl || "/placeholder.jpg", // Use default if no image
          link:
            article.type === "external"
              ? article.externalUrl
              : `/articles/${article.id}`,
        }));

        setNewsData(formattedNews);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // ✅ Embla Scroll Controls
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <section className="relative mx-auto max-w-6xl my-16">
      <h2 className="text-2xl font-semibold text-center">Tin Tức</h2>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50"></div>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <div className="embla_news overflow-hidden" ref={emblaRef}>
            <div className="embla__container_news flex">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="embla__slide_news flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4"
                >
                  <div className="h-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
                    <div className="relative h-40">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">
                        <a
                          href={news.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {news.title}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-500">{news.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-gray-800 rounded-full p-2 hover:bg-gray-200"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-gray-800 rounded-full p-2 hover:bg-gray-200"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  selectedIndex === index ? "bg-gray-800" : "bg-gray-400"
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
