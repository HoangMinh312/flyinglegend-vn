import React from "react";
import Image from "next/image";

export default function CompanyIntro() {
  return (
    <section className="flex-col justify-start items-center w-full overflow-hidden mb-10">
      <div className="relative h-24 md:h-36 lg:h-48 overflow-hidden w-full">
        <Image
          src="/subheader-pic2.jpg"
          alt="Page header background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />{" "}
        {/* Dark overlay */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white text-center">
            FLYING LEGEND VIETNAM
          </h1>
        </div>
      </div>
      <div className="relative px-4 lg:px-10 sm:px-6 mx-auto max-w-screen-xl w-full mt-4 lg:mt-10">
        <p className="text-justify text-lg">
          Flying Legend Vietnam tự hào là công ty tư nhân đầu tiên tại Việt Nam
          sản xuất máy bay ngay trên chính quê hương mình. Với nền tảng vững
          chắc từ gần 30 năm kinh nghiệm trong ngành hàng không, chúng tôi hướng
          đến việc tiên phong phát triển ngành công nghiệp hàng không của đất
          nước, tạo ra những chiếc máy bay chất lượng cao, đáp ứng tiêu chuẩn
          quốc tế và quân sự. Sản phẩm tiêu biểu của chúng tôi, TP-150, là minh
          chứng cho sự sáng tạo và nỗ lực nâng tầm vị thế của Việt Nam trên bản
          đồ hàng không thế giới.
        </p>
        <br />
        <p className="text-justify text-lg">
          Với cội nguồn là niềm đam mê chinh phục bầu trời, chúng tôi kết hợp
          tinh hoa thiết kế từ Ý cùng tay nghề chế tạo của người Việt tại nhà
          máy hiện đại ở Vĩnh Phúc. Flying Legend Vietnam không chỉ chế tạo máy
          bay mà còn hiện thực hóa những giấc mơ, với khát vọng vươn lên cùng
          đất nước cùng chủ trương mang tính chiến lược của Đảng và Chính phủ,
          xây dựng nền công nghiệp quốc phòng, tiên tiến, hiện đại, tự lực tự
          cường, Flying Legend Vietnam đặt ra tầm nhìn là nhà sản xuất máy bay
          hàng đầu tại Việt Nam, mang tầm quốc tế và mang lại niềm tự hào cho
          quê hương. Hãy cùng đồng hành với chúng tôi trên hành trình đưa ngành
          công nghiệp hàng không Việt Nam vươn tới những tầm cao mới.
        </p>
      </div>
    </section>
  );
}
