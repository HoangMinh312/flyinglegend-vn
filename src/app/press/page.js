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
      title: "Máy bay huấn luyện sản xuất ở Việt Nam trưng bày tại Triển lãm Quốc phòng",
      date: "18 Tháng 12, 2024",
      excerpt:
        "(Dân trí) - TP-150 là sản phẩm hợp tác giữa Việt Nam và Ý, phục vụ công tác huấn luyện bay sơ cấp và nhiệm vụ tuần tra, được trưng bày tại Triển lãm Quốc phòng quốc tế Việt Nam 2024.",
      image: pic2,
      link: "https://dantri.com.vn/xa-hoi/may-bay-huan-luyen-san-xuat-o-viet-nam-trung-bay-tai-trien-lam-quoc-phong-20241218071145196.htm",
    },
    {
      id: 3,
      title: "Cận cảnh chiếc máy bay đầu tiên sản xuất tại Việt Nam",
      date: "18 Tháng 12, 2024",
      excerpt:
        "TP-150 là loại máy bay huấn luyện cơ bản và tuần tra dành cho quân đội. Đây là sản phẩm của liên doanh hợp tác giữa Italy và Việt Nam, thiết kế bởi Công ty Flying Legend Italy và sản xuất tại nhà máy ở tỉnh Vĩnh Phúc.",
      image: pic3,
      link: "https://www.sggp.org.vn/can-canh-chiec-may-bay-dau-tien-san-xuat-tai-viet-nam-post773566.html",
    }
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
