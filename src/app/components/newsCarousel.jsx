"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import pic1 from "./(assets)/pic1.jpg";
import pic2 from "./(assets)/pic2.jpg";
import pic3 from "./(assets)/pic3.jpg";
import pic4 from "./(assets)/pic4.jpg";
import pic5 from "./(assets)/pic5.jpg";
import pic6 from "./(assets)/pic6.jpg";

const newsData = [
  {
    id: 1,
    title: "Breaking News 1",
    date: "Dec 15, 2024",
    image: pic1,
  },
  {
    id: 2,
    title: "Breaking News 2",
    date: "Dec 14, 2024",
    image: pic2,
  },
  {
    id: 3,
    title: "Breaking News 3",
    date: "Dec 13, 2024",
    image: pic3,
  },
  {
    id: 4,
    title: "Breaking News 4",
    date: "Dec 12, 2024",
    image: pic4,
  },
  {
    id: 5,
    title: "Breaking News 5",
    date: "Dec 11, 2024",
    image: pic5,
  },
  {
    id: 6,
    title: "Breaking News 6",
    date: "Dec 10, 2024",
    image: pic6,
  },
];

export default function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

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
                  <h3 className="text-lg font-semibold">{news.title}</h3>
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
    </section>
  );
}
