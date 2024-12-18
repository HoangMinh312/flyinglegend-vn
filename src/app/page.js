"use client";

import ComingSoonPage from "./components/comingSoonPage";
import { VideoHero } from "./components/videoHero";
import CompanyIntro from "./components/companyIntro";
import GalleryCarousel from "./components/galleryCarousel";
import NewsCarousel from "./components/newsCarousel";

export default function Home() {
  return (
    <main className="flex-col min-h-screen items-center justify-start gap-0">
      <VideoHero videoId={"w7zq0Nsqcfo"}/>
      {/* Company Intro */}
      {/* <CompanyIntro /> */}
      {/* Picture Gallery */}
      {/* <GalleryCarousel /> */}
      {/* News */}
      {/* <NewsCarousel /> */}
    </main>
  );
}
