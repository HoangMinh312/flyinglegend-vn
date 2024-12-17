import { SubHeader } from "@/components/subheader";
import NewsPage from "./components/NewsGrid";
import pic1 from "./(assets)/news1.png";

export default function PressPage() {
  // Data for the news items
  const newsItems = [
    {
      id: 1,
      title: "Khám phá máy bay ‘Make in Vietnam’ tại Triển lãm Quốc phòng 2024",
      date: "17 Tháng 12, 2024",
      excerpt:
        "Trong Triển lãm Quốc phòng quốc tế Việt Nam 2024, lần đầu tiên mẫu máy bay “Make in Vietnam” được giới thiệu. Mẫu máy bay này có thể sử dụng để huấn luyện phi công quân sự và tuần tra.",
      image: pic1,
      link: "https://vietnamnet.vn/kham-pha-may-bay-make-in-vietnam-tai-trien-lam-quoc-phong-2024-2353123.html",
    },
  ];

  return (
    <>
      <SubHeader
        title="Tin Tức"
        breadcrumbs={[
          { label: "Trang Chủ", href: "/" },
          { label: "Tin Tức", href: "/press" },
        ]}
        backgroundImage="/subheader-pic1.jpg"
      />
      <div className="container mx-auto px-4 py-16">
        {/* Reusing the NewsPage component */}
        <NewsPage newsItems={newsItems} />
      </div>
    </>
  );
}
