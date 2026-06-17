"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import pic1 from "@/app/press/(assets)/news1.png";
import pic2 from "@/app/press/(assets)/news2.png";
import pic3 from "@/app/press/(assets)/news3.png";
import pic4 from "@/app/press/(assets)/news4.jpg";
import pic5 from "@/app/press/(assets)/news5.jpg";
import pic6 from "@/app/press/(assets)/news6.jpg";
import pic7 from "@/app/press/(assets)/news7.jpg";

const newsData = [
  {
    id: 0,
    title: "KHÁT VỌNG BẦU TRỜI – TỰ HÀO VIỆT NAM",
    date: "28 Tháng 8, 2025",
    image: "/conference-aug-2025/hero.jpg",
    link: "/press/khat-vong-bau-troi",
  },
  {
    id: 1,
    title: "HỘI THẢO MÁY BAY TP-150",
    date: "28 Tháng 3, 2025",
    image: "/conferenceImages/heroImage.jpg",
    link: "/press/hoi-thao-trien-lam-may-bay-tp150",
  },
  {
    id: 2,
    title: "Khám phá máy bay ‘Make in Vietnam’ tại Triển lãm Quốc phòng 2024",
    date: "17 Tháng 12, 2024",
    image: pic1,
    link: "https://vietnamnet.vn/kham-pha-may-bay-make-in-vietnam-tai-trien-lam-quoc-phong-2024-2353123.html",
  },
  {
    id: 3,
    title:
      "Máy bay huấn luyện sản xuất ở Việt Nam trưng bày tại Triển lãm Quốc phòng",
    date: "18 Tháng 12, 2024",
    image: pic2,
    link: "https://dantri.com.vn/xa-hoi/may-bay-huan-luyen-san-xuat-o-viet-nam-trung-bay-tai-trien-lam-quoc-phong-20241218071145196.htm",
  },
  {
    id: 4,
    title: "Cận cảnh chiếc máy bay đầu tiên sản xuất tại Việt Nam",
    date: "18 Tháng 12, 2024",
    image: pic3,
    link: "https://www.sggp.org.vn/can-canh-chiec-may-bay-dau-tien-san-xuat-tai-viet-nam-post773566.html",
  },
  {
    id: 5,
    title:
      "Triển lãm Quốc phòng quốc tế Việt Nam 2024: “Mục sở thị” máy bay huấn luyện đầu tiên sản xuất tại Việt Nam",
    date: "18 Tháng 12, 2024",
    image: pic4,
    link: "https://www.qdnd.vn/trien-lam-quoc-phong-quoc-te-viet-nam-2024/trien-lam-quoc-phong-quoc-te-viet-nam-2024-muc-so-thi-may-bay-huan-luyen-dau-tien-san-xuat-tai-viet-nam-807653",
  },
  {
    id: 6,
    title:
      "Chuyện về chiếc máy bay huấn luyện và tuần tra lần đầu tiên được sản xuất tại Việt Nam",
    date: "18 Tháng 12, 2024",
    image: pic5,
    link: "https://vovgiaothong.vn/chuyen-ve-chiec-may-bay-huan-luyen-va-tuan-tra-lan-dau-tien-duoc-san-xuat-tai-viet-nam-ema42386.html",
  },
  {
    id: 7,
    title:
      "Cựu sĩ quan Mỹ: Việt Nam ra mắt máy bay huấn luyện có 2 điểm vượt T-6C Mỹ, mở cơ hội quý cho Không quân",
    date: "30 Tháng 12, 2024",
    image: pic6,
    link: "https://soha.vn/cuu-si-quan-my-viet-nam-ra-mat-may-bay-huan-luyen-co-2-diem-vuot-t-6c-my-mo-co-hoi-quy-cho-khong-quan-198241230064409619.htm",
  },
  {
    id: 8,
    title: "Mong muốn “góp một viên gạch” vào nền sản xuất máy bay Việt Nam",
    date: "29 Tháng 1, 2025",
    image: pic7,
    link: "https://www.qdnd.vn/kinh-te/cac-van-de/mong-muon-gop-mot-vien-gach-vao-nen-san-xuat-may-bay-viet-nam-813723",
  },
];

export default function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <section className="relative mx-auto my-16 max-w-6xl">
      <h2 className="text-center text-2xl font-semibold">Tin Tức</h2>
      <div className="embla_news overflow-hidden" ref={emblaRef}>
        <div className="embla__container_news flex">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="embla__slide_news min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]"
            >
              <div className="h-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md">
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
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-gray-200"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-gray-200"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="mt-4 flex justify-center space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              selectedIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
