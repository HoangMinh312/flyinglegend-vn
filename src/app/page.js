"use client";

import ComingSoonPage from "./components/comingSoonPage";
import { VideoHero } from "./components/videoHero";
import CompanyIntro from "./components/companyIntro";
import GalleryCarousel from "./components/galleryCarousel";
import NewsCarousel from "./components/newsCarousel";

export default function Home() {
  return (
    <main className="flex-col min-h-screen items-center justify-start gap-0 bg-blue-400">
      <ComingSoonPage />
      {/* <VideoHero videoId={"eJopS3T8o30"}/> */}
      {/* Company Intro */}
      {/* <CompanyIntro /> */}
      {/* Picture Gallery */}
      {/* <GalleryCarousel /> */}
      {/* News */}
      {/* <NewsCarousel /> */}
    </main>
  );
}
