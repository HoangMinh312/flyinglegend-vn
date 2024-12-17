import { SubHeader } from "@/components/subheader";
import NewsPage from "./components/NewsGrid";

import pic1 from "./(assets)/news1.png";
import pic2 from "./(assets)/news2.png";
import pic3 from "./(assets)/news3.png";

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
    {
      id: 2,
      title: "Lộ diện công ty sản xuất máy bay huấn luyện quân sự Made in Vietnam đầu tiên, đặt tại Vĩnh Phúc",
      date: "17 Tháng 12, 2024",
      excerpt:
        "CTCP Flying Legend Việt Nam thành lập vào tháng 11/2023 với vốn điều lệ 500 triệu đồng. Hoạt động kinh doanh chính là sản xuất máy bay, tàu vũ trụ và máy móc liên quan.",
      image: pic2,
      link: "https://cafef.vn/lo-dien-cong-ty-san-xuat-may-bay-huan-luyen-quan-su-made-in-vietnam-dau-tien-dat-tai-vinh-phuc-188241217144330232.chn",
    },
    {
      id: 3,
      title: "Lộ diện công ty sản xuất máy bay huấn luyện quân sự Made in Vietnam đầu tiên, đặt tại Vĩnh Phúc",
      date: "17 Tháng 12, 2024",
      excerpt:
        "CTCP Flying Legend Việt Nam thành lập vào tháng 11/2023 với vốn điều lệ 500 triệu đồng. Hoạt động kinh doanh chính là sản xuất máy bay, tàu vũ trụ và máy móc liên quan.",
      image: pic3,
      link: "https://markettimes.vn/lo-dien-cong-ty-san-xuat-may-bay-huan-luyen-quan-su-made-in-vietnam-dau-tien-dat-tai-vinh-phuc-72069.html",
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
