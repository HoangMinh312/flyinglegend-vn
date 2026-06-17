import React from "react";
import Image from "next/image";

import subheaderimage from "./(assets)/subheader-pic.jpg";

export default function CompanyIntro() {
  return (
    <section className="mb-10 w-full flex-col items-center justify-start overflow-hidden">
      <div className="relative h-24 w-full overflow-hidden md:h-36 lg:h-48">
        <Image
          src={subheaderimage}
          alt="Page header background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />{" "}
        {/* Dark overlay */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <h1 className="text-center text-2xl font-bold text-white sm:text-4xl lg:text-6xl">
            FLYING LEGEND VIETNAM
          </h1>
        </div>
      </div>
      <div className="relative mx-auto mt-4 w-full max-w-screen-xl px-4 sm:px-6 lg:mt-10 lg:px-10">
        <p className="text-justify text-lg">
          Flying Legend Vietnam là công ty liên doanh giữa Ý và Việt Nam, sản
          xuất máy bay hạng nhẹ theo công nghệ và thiết kế của Flying Legend
          Italy. Với nền tảng kiến thức từ gần 30 năm kinh nghiệm trong ngành
          hàng không, đội ngũ chúng tôi hướng đến việc phát triển hoạt động lắp
          ráp, sản xuất máy bay trong nước, đáp ứng các tiêu chuẩn hàng không
          quốc tế và quân sự. Sản phẩm tiêu biểu đầu tiên của chúng tôi là
          TP-150, một máy bay quân sự dùng cho huấn luyện cơ bản và tuần tra.
        </p>
        <br />
        <p className="text-justify text-lg">
          Chiếc máy bay nhỏ bé này thể hiện khát khao làm chủ bầu trời của đội
          ngũ những người làm kỹ thuật hàng không, mong muốn góp phần nhỏ bé của
          mình vào nền công nghiệp quốc phòng Việt nam. Chúng tôi muốn được là
          các thành viên đầu tiên thuộc nhóm các doanh nghiệp tư nhân tham gia
          vào Luật Quốc phòng, An ninh và động viên Công nghiệp.
        </p>
        <br />
        <p className="text-justify text-lg">
          Flying Legend Vietnam – Khát vọng vươn mình cùng đất nước.
        </p>
      </div>
    </section>
  );
}
