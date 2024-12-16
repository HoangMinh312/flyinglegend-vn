"use client";

import ComingSoonPage from "./components/comingSoonPage";
import { VideoHero } from "./components/videoHero";
import CompanyIntro from "./components/companyIntro";
import GalleryCarousel from "./components/galleryCarousel";

export default function Home() {
  return (
    <main className="flex-col min-h-screen items-center justify-start gap-0">
      <VideoHero videoId={"Ta-gQIgKvc0"}/>
      {/* Company Intro */}
      <CompanyIntro />
      {/* Picture Gallery */}
      <GalleryCarousel />
      {/* News */}
    </main>
  );
}
