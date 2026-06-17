"use client";

import Image from "next/image";
import pic1 from "./(assets)/pic1.jpg";
import pic2 from "./(assets)/pic2.jpg";
import pic3 from "./(assets)/pic3.jpg";
import pic4 from "./(assets)/pic4.jpg";
import pic5 from "./(assets)/pic5.jpg";
import pic6 from "./(assets)/pic6.jpg";
import pic7 from "./(assets)/pic7.jpg";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronUp, ChevronDown } from "lucide-react";

const images = [
  { src: pic1, alt: "Picture 1" },
  { src: pic2, alt: "Picture 2" },
  { src: pic3, alt: "Picture 3" },
  { src: pic4, alt: "Picture 4" },
  { src: pic5, alt: "Picture 5" },
  { src: pic6, alt: "Picture 6" },
  { src: pic7, alt: "Picture 7" },
];

export default function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { axis: "y", loop: true, dragFree: true },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Initialize selected index

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleSlideClick = (index) => {
    setSelectedIndex(index);
    if (emblaApi) emblaApi.scrollTo(index); // Update the carousel's position
  };

  return (
    <section className="mx-4 mb-4 flex max-w-screen-sm flex-col items-center md:mx-auto md:h-auto lg:mb-8 lg:max-w-screen-xl lg:flex-row">
      {/* Vertical Carousel */}
      <div className="embla relative w-full lg:w-1/4">
        {/* Top Navigation Button */}
        <button
          className="absolute left-1/2 top-0 z-10 mb-2 -translate-x-1/2 -translate-y-full transform rounded-full bg-white/80 p-2 text-gray-800 transition-colors duration-200 hover:bg-gray-200"
          onClick={scrollPrev}
          aria-label="Previous image"
        >
          <ChevronUp className="h-6 w-6" />
        </button>

        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex gap-4 lg:flex-col">
            {images.map((image, index) => (
              <div
                className="embla__slide hover:cursor-pointer"
                key={index}
                onClick={() => handleSlideClick(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full rounded-3xl object-cover"
                  fill
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Button */}
        <button
          className="absolute bottom-0 left-1/2 z-10 mt-2 -translate-x-1/2 translate-y-full transform rounded-full bg-white/80 p-2 text-gray-800 transition-colors duration-200 hover:bg-gray-200"
          onClick={scrollNext}
          aria-label="Next image"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>

      {/* Selected Image */}
      <div className="mt-4 flex w-full flex-col items-center justify-center rounded-lg lg:ml-4 lg:mt-0 lg:w-3/4">
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="rounded-lg object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
}
