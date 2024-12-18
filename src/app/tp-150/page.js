import { SubHeader } from "@/components/subheader";
import Image from "next/image";
import React from "react";

import plane1 from "./(assets)/plane1.jpg";
import plane2 from "./(assets)/plane2.jpg";
import plane3 from "./(assets)/plane3.jpg";
import plane4 from "./(assets)/plane4.jpg";
import plane5 from "./(assets)/plane5.jpeg";
import plane6 from "./(assets)/plane6.jpeg";
import plane7 from "./(assets)/plane7.jpeg";
import plane8 from "./(assets)/plane8.jpeg";

import planeSchematic1 from "./(assets)/plane_schema1.jpg";
import planeSchematic2 from "./(assets)/plane_schema2.jpg";
import planeSchematic3 from "./(assets)/plane_schema3.jpg";

export default function Products() {
  const galleryImages = [
    { src: plane1, alt: "plane Image 1" },
    { src: plane2, alt: "plane Image 2" },
    { src: plane3, alt: "plane Image 3" },
    { src: plane4, alt: "plane Image 4" },
    { src: plane5, alt: "plane Image 5" },
    { src: plane6, alt: "plane Image 6" },
    { src: plane7, alt: "plane Image 7" },
    { src: plane8, alt: "plane Image 8" },
  ];

  return (
    <>
      <SubHeader
        title="Máy Bay TP-150 | Huấn Luyện và Tuần Tra"
        breadcrumbs={[
          { label: "Trang Chủ", href: "/" },
          { label: "TP-150 | Huấn Luyện và Tuần Tra", href: "/tp-150" },
        ]}
        backgroundImage="/subheader-pic2.jpg"
      />

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <section className="mb-8 text-gray-700 text-center">
          <h2 className="text-3xl font-bold mb-4">Giới Thiệu Máy Bay TP-150</h2>
          <p>
            <span className="font-semibold">TP-150</span> là dòng máy bay hiện
            đại, được thiết kế chuyên biệt cho các nhiệm vụ huấn luyện bay sơ
            cấp và tuần tra. Với sự kết hợp giữa công nghệ phương Tây và khả
            năng sản xuất nội địa, TP-150 mang lại hiệu suất ấn tượng và chi phí
            vận hành tối ưu.
          </p>
        </section>

        {/* Specifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Thông Số Kỹ Thuật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-400 rounded-lg p-6">
            {/* Aircraft Dimensions */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Kích Thước Máy Bay</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full text-gray-600">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Chiều dài máy bay
                    </td>
                    <td className="border border-gray-300 px-4 py-2">7.1 m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Sải cánh
                    </td>
                    <td className="border border-gray-300 px-4 py-2">8.38</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Diện tích cánh
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      10 m<sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Chiều cao buồng lái
                    </td>
                    <td className="border border-gray-300 px-4 py-2">0.95 m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Chiều rộng buồng lái
                    </td>
                    <td className="border border-gray-300 px-4 py-2">0.73 m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Dung tích nhiên liệu
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      2 x 57 l
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Dung tích nhiên liệu phụ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      2 x 26 l
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Trọng Lượng & Tải Trọng
              </h3>
              <table className="table-auto border-collapse border border-gray-300 w-full text-gray-600">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Trọng lượng cất cánh tối đa
                    </td>
                    <td className="px-4 py-2">
                      <p>750 kg (hệ số quá tải +6/-3G)</p>
                      <p>820 kg (hệ số quá tải +4/-2G)</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Trọng lượng rỗng
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      500 kg (trang bị đầy đủ)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Sức chứa hành lý (1 phi công)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">70 kg</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Sức chứa hành lý (2 phi công)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">34 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Hiệu Suất Bay</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full text-gray-600">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Tốc độ bay bằng tối đa
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      300 km/giờ
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Tốc độ leo cao
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      400 m/phút (tới mực bay 3050 m)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Thất tốc
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      92.6 km/giờ (tiếp cận hạ cánh)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Tiêu thụ nhiên liệu trung bình
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      25 lít/giờ (MOGAS 95)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Tầm bay xa
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      1200 km (với thùng nhiên liệu phụ)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Trần bay
                    </td>
                    <td className="border border-gray-300 px-4 py-2">7000 m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Tốc độ cất cánh
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      100 km/giờ
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Cất/hạ cánh với gió cạnh tối đa
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      7.5 m/giây
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Độ dài đường cất/hạ cánh tối thiểu
                    </td>
                    <td className="border border-gray-300 px-4 py-2">500 m</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Động Cơ</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full text-gray-600">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Loại động cơ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Rotax 915 iS
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Công suất
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      150 mã lực
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Cánh quạt
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      3 cánh hoặc 4 cánh, tùy chọn
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Tuổi thọ động cơ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      2000 giờ
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 bg-gray-400 bg-opacity-60">
                      Tuổi thọ cánh quạt
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      2000 giờ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Plane schematics  */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Thông Số Kích Thước Máy Bay TP-150
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 border border-gray-400 rounded-lg">
            <div className="relative w-full h-52 md:h-[50vh]">
              <Image
                src={planeSchematic1}
                alt="Plane Schematic 1"
                layout="fill"
                className="object-contain rounded-lg"
              />
            </div>
            <div className="relative w-full h-52 md:h-[50vh]">
              <Image
                src={planeSchematic2}
                alt="Plane Schematic 2"
                layout="fill"
                className="object-contain rounded-lg"
              />
            </div>
            <div className="relative w-full h-52 md:h-[50vh]">
              <Image
                src={planeSchematic3}
                alt="Plane Schematic 3"
                layout="fill"
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Hình Ảnh TP-150
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-60">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Video */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Video Máy Bay TP-150
          </h2>
          <div className="relative w-full h-72 md:h-96 lg:h-fit aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/eJopS3T8o30" // Replace VIDEO_ID
              title="TP-150"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}
