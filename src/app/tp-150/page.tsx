import { SubHeader } from "@/components/Subheader";
import Image from "next/image";
import React from "react";

import subheaderimage from "./(assets)/subheader-pic.jpg";

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
        backgroundImage={subheaderimage}
      />

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <section className="mb-8 text-center text-gray-700">
          <h2 className="mb-4 text-3xl font-bold">Giới Thiệu Máy Bay TP-150</h2>
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
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Thông Số Kỹ Thuật
          </h2>
          <div className="grid grid-cols-1 gap-6 rounded-lg border border-gray-400 p-6 md:grid-cols-2">
            {/* Aircraft Dimensions */}
            <div>
              <h3 className="mb-2 text-xl font-semibold">Kích Thước Máy Bay</h3>
              <table className="w-full table-auto border-collapse border border-gray-300 text-gray-600">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Chiều dài máy bay
                    </td>
                    <td className="border border-gray-300 px-4 py-2">7.1 m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Sải cánh
                    </td>
                    <td className="border border-gray-300 px-4 py-2">8.38</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Diện tích cánh
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      10 m<sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Chiều cao buồng lái
                    </td>
                    <td className="border border-gray-300 px-4 py-2">0.95 m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Chiều rộng buồng lái
                    </td>
                    <td className="border border-gray-300 px-4 py-2">0.73 m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Dung tích nhiên liệu
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      2 x 57 l
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
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
              <h3 className="mb-2 text-xl font-semibold">
                Trọng Lượng & Tải Trọng
              </h3>
              <table className="w-full table-auto border-collapse border border-gray-300 text-gray-600">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Trọng lượng cất cánh tối đa
                    </td>
                    <td className="px-4 py-2">
                      <p>750 kg (hệ số quá tải +6/-3G)</p>
                      <p>820 kg (hệ số quá tải +4/-2G)</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Trọng lượng rỗng
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      500 kg (trang bị đầy đủ)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Sức chứa hành lý (1 phi công)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">70 kg</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Sức chứa hành lý (2 phi công)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">34 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">Hiệu Suất Bay</h3>
              <table className="w-full table-auto border-collapse border border-gray-300 text-gray-600">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Tốc độ bay bằng tối đa
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      300 km/giờ
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Tốc độ leo cao
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      400 m/phút (tới mực bay 3050 m)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Thất tốc
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      92.6 km/giờ (tiếp cận hạ cánh)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Tiêu thụ nhiên liệu trung bình
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      25 lít/giờ (MOGAS 95)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Tầm bay xa
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      1200 km (với thùng nhiên liệu phụ)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Trần bay
                    </td>
                    <td className="border border-gray-300 px-4 py-2">7000 m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Tốc độ cất cánh
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      100 km/giờ
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Cất/hạ cánh với gió cạnh tối đa
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      7.5 m/giây
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Độ dài đường cất/hạ cánh tối thiểu
                    </td>
                    <td className="border border-gray-300 px-4 py-2">500 m</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Động Cơ</h3>
              <table className="w-full table-auto border-collapse border border-gray-300 text-gray-600">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Loại động cơ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Rotax 915 iS
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Công suất
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      150 mã lực
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Cánh quạt
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      3 cánh hoặc 4 cánh, tùy chọn
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
                      Tuổi thọ động cơ
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      2000 giờ
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 bg-gray-400 bg-opacity-60 px-4 py-2">
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
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Thông Số Kích Thước Máy Bay TP-150
          </h2>
          <div className="grid grid-cols-1 rounded-lg border border-gray-400 md:grid-cols-3 md:gap-4">
            <div className="relative h-52 w-full md:h-[50vh]">
              <Image
                src={planeSchematic1}
                alt="Plane Schematic 1"
                layout="fill"
                className="rounded-lg object-contain"
              />
            </div>
            <div className="relative h-52 w-full md:h-[50vh]">
              <Image
                src={planeSchematic2}
                alt="Plane Schematic 2"
                layout="fill"
                className="rounded-lg object-contain"
              />
            </div>
            <div className="relative h-52 w-full md:h-[50vh]">
              <Image
                src={planeSchematic3}
                alt="Plane Schematic 3"
                layout="fill"
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Hình Ảnh TP-150
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-60">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Video */}
        <section>
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Video Máy Bay TP-150
          </h2>
          <div className="relative aspect-video h-72 w-full md:h-96 lg:h-fit">
            <iframe
              className="absolute inset-0 h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/w7zq0Nsqcfo" // Replace VIDEO_ID
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
