"use client";

import Image from "next/image";
import pic1 from "./(assets)/pic1.jpg";
import pic2 from "./(assets)/pic2.jpg";
import pic3 from "./(assets)/pic3.jpg";
import pic4 from "./(assets)/pic4.jpg";
import pic5 from "./(assets)/pic5.jpg";
import pic6 from "./(assets)/pic6.jpg";
import pic7 from "./(assets)/pic7.jpg";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Initialize selected index

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const handleSlideClick = (index) => {
    setSelectedIndex(index);
    if (emblaApi) emblaApi.scrollTo(index); // Update the carousel's position
  };

  return (
    <section className="flex flex-col lg:flex-row max-w-screen-sm lg:max-w-screen-xl md:h-auto mx-4 md:mx-auto items-center mb-4 lg:mb-8">
      {/* Vertical Carousel */}
      <div className="embla w-full lg:w-1/4">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex lg:flex-col gap-4">
            {images.map((image, index) => (
              <div
                className="embla__slide hover:cursor-pointer"
                key={index}
                onClick={() => handleSlideClick(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="rounded-3xl w-full h-full object-cover"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Image */}
      <div className="flex flex-col justify-center items-center w-full lg:w-3/4 mt-4 lg:mt-0 rounded-lg lg:ml-4">
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
