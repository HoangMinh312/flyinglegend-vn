import ComingSoonPage from "@/components/ComingSoonPage";
import { VideoHero } from "@/components/VideoHero";
import CompanyIntro from "@/components/CompanyIntro";
import GalleryCarousel from "@/components/GalleryCarousel";
import NewsCarousel from "@/components/NewsCarousel";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-start gap-0">
      <VideoHero videoId={"w7zq0Nsqcfo"} />
      {/* Company Intro */}
      <CompanyIntro />
      {/* Picture Gallery */}
      <GalleryCarousel />
      {/* News */}
      <NewsCarousel />
    </main>
  );
}
