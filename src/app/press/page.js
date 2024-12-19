import { SubHeader } from "@/components/subheader";
import NewsPage from "./components/NewsGrid";

import pic1 from "./(assets)/news1.png";
import pic2 from "./(assets)/news2.png";
import pic3 from "./(assets)/news3.png";
import pic4 from "./(assets)/news4.jpg";
import pic5 from "./(assets)/news5.jpg";

import subheaderimage from "./(assets)/subheader-pic1.jpg";

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
      title:
        "Máy bay huấn luyện sản xuất ở Việt Nam trưng bày tại Triển lãm Quốc phòng",
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
    },
    {
      id: 4,
      title:
        "Triển lãm Quốc phòng quốc tế Việt Nam 2024: “Mục sở thị” máy bay huấn luyện đầu tiên sản xuất tại Việt Nam",
      date: "18 Tháng 12, 2024",
      excerpt:
        "Tại khu trưng bày ngoài trời của Triển lãm Quốc phòng quốc tế Việt Nam 2024 xuất hiện một chiếc máy bay đặc biệt. Đó là chiếc TP-150 - máy bay huấn luyện đầu tiên sản xuất tại Việt Nam.",
      image: pic4,
      link: "https://www.qdnd.vn/trien-lam-quoc-phong-quoc-te-viet-nam-2024/trien-lam-quoc-phong-quoc-te-viet-nam-2024-muc-so-thi-may-bay-huan-luyen-dau-tien-san-xuat-tai-viet-nam-807653",
    },
    {
      id: 5,
      title:
        "Chuyện về chiếc máy bay huấn luyện và tuần tra lần đầu tiên được sản xuất tại Việt Nam",
      date: "18 Tháng 12, 2024",
      excerpt:
        "Ngày 19/12/2024, tại Triển lãm Quốc phòng quốc tế Việt Nam 2024, chiếc máy bay huấn luyện mang ký hiệu TP-150 được sản xuất tại Việt Nam bởi Công ty Flying Legend Vietnam lần đầu ra mắt công chúng. Có thể nói, việc sản xuất chiếc máy bay huấn luyện và tuần tra “made in Vietnam” đã thể hiện khát vọng làm chủ công nghệ, “làm chủ bầu trời” của người Việt.",
      image: pic5,
      link: "https://vovgiaothong.vn/chuyen-ve-chiec-may-bay-huan-luyen-va-tuan-tra-lan-dau-tien-duoc-san-xuat-tai-viet-nam-ema42386.html",
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
        backgroundImage={subheaderimage}
      />
      <div className="container mx-auto px-4 py-16">
        {/* Reusing the NewsPage component */}
        <NewsPage newsItems={newsItems} />
      </div>
    </>
  );
}
