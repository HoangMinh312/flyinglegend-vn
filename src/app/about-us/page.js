import { SubHeader } from "@/components/subheader";
import Image from "next/image";

import photo1 from "./(assets)/about-us1.jpeg";
import photo2 from "./(assets)/about-us2.jpeg";
import photo3 from "./(assets)/about-us3.jpeg";
import photo4 from "./(assets)/about-us4.jpg";
import photo5 from "./(assets)/about-us5.jpg";

import subheaderimage from "./(assets)/subheader-pic1.jpg";

export default function AboutUs() {
  return (
    <>
      <SubHeader
        title="Hành Trình Của Chúng Tôi"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Hành Trình Của Chúng Tôi", href: "/about" },
        ]}
        backgroundImage={subheaderimage}
      />
      <div className="container mx-auto px-4 py-16 flex-col gap-6">
        <h2 className="my-8 text-4xl font-bold">
          Câu Chuyện Flying Legend Vietnam
        </h2>

        <section className="my-8">
          <h3 className="text-2xl font-semibold mb-4">Sứ Mệnh</h3>
          <p className="text-lg">
            Năm 2023, Flying Legend Vietnam đánh dấu sự gia nhập ngành hàng
            không Việt Nam với sứ mệnh sản xuất và lắp ráp máy bay trong nước
            bằng việc hợp tác với Flying Legend Italy, một công ty sản xuất máy
            bay đến từ Cộng hòa Ý. Cơ sở của sự hợp tác là tầm nhìn chung về sự
            hoàn hảo, sự sáng tạo và cam kết chế tạo máy bay đạt tiêu chuẩn quốc
            tế, đáp ứng các nhu cầu dân sự, quân sự đa dạng.
          </p>
        </section>
        <section className="my-8 w-full lg:w-3/5 mx-auto">
          <figure>
            <Image
              src={photo2}
              alt="Flying Legend Vietnam founders shaking hands"
            />
            <figcaption className="text-center mt-2 text-sm italic">
              Ông Trần Hải Đăng, người sáng lập Flying Legend Vietnam, cùng đồng
              sáng lập viên Francesco Rummolino.
            </figcaption>
          </figure>
        </section>
        <section className="my-8">
          <h3 className="text-2xl font-semibold mb-4">Tầm Nhìn</h3>
          <p className="text-lg">
            Thấm nhuần chủ trương chiến lược của Đảng và Chính phủ, xây dựng nền
            công nghiệp quốc phòng tiên tiến, hiện đại, tự lực tự cường, Flying
            Legend Vietnam đặt cho mình tầm nhìn là trở thành nhà sản xuất lắp
            ráp các loại máy bay hạng nhẹ ở Việt Nam, nỗ lực tiếp nhận chuyển
            giao công nghệ, từ đó tiến tới tự thiết kế được các dòng máy bay
            phục vụ cho mục đích an ninh quốc phòng và phát triển lĩnh vực hàng
            không chung ở Việt nam.
          </p>
        </section>
        <section className="my-8 w-full lg:w-3/5 mx-auto">
          <figure>
            <Image
              src={photo3}
              alt="Flying Legend Vietnam's TP-150 aircraft in assembly"
            />
            <figcaption className="text-center mt-2 text-sm italic">
              Đội ngũ đồng sáng lập Flying Legend Vietnam.
            </figcaption>
          </figure>
        </section>
        <section className="my-8">
          <h3 className="text-2xl font-semibold mb-4">
            Cam Kết Về Chất Lượng Và Cải Tiến
          </h3>
          <p className="text-lg">
            Chúng tôi cam kết duy trì tuân thủ các tiêu chuẩn hàng không quốc tế
            về thiết kế, chế tạo máy bay, cùng các tiêu chuẩn cho các sản phẩm
            quân sự. Các quy trình kiểm tra và kiểm soát chất lượng nghiêm ngặt
            được áp dụng trong toàn bộ quá trình lắp ráp, đảm bảo mỗi máy bay
            xuất xưởng là một sản phẩm hoàn hảo đáp ứng các yêu cầu khắt khe của
            khách hàng.
          </p>
        </section>
        <section className="my-8 w-full lg:w-3/5 mx-auto">
          <figure>
            <Image src={photo4} alt="TP-150 at the Vietnam Defense Expo 2024" />
            <figcaption className="text-center mt-2 text-sm italic">
              Chiếc máy bay TP-150 tại xưởng sản xuất của Flying Legend Vietnam.
            </figcaption>
          </figure>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-4">
            Triển Vọng Tương Lai Và Mở Rộng
          </h3>
          <p className="text-lg">
            Chúng tôi tin rằng quốc gia nào làm chủ được bầu trời, sẽ là một
            quốc gia hùng mạnh. Là một doanh nghiệp tư nhân, chúng tôi có chung
            khát vọng vươn mình trong kỷ nguyên mới của đất nước. Vì vậy TP-150
            chỉ là bước khởi đầu. Công ty đã có các kế hoạch phát triển thêm các
            dòng máy bay đáp ứng nhu cầu của cả quân đội và dân sự. Việc đầu tư
            liên tục vào “con người” đồng thời mở rộng hợp tác học hỏi từ các
            đối tác nước ngoài, sẽ là nhân tố chính giúp cho việc nghiên cứu và
            phát triển sản phẩm của Flying Legend Việt nam. Chúng tôi đã sẵn
            sàng cho sự tăng trưởng và mở rộng xuất khẩu ra thị trường quốc tế.
          </p>
        </section>
        <section className="my-8 w-full lg:w-3/5 mx-auto">
          <figure>
            <Image
              src={photo5}
              alt="Flying Legend Vietnam team celebrating success"
            />
            <figcaption className="text-center mt-2 text-sm italic">
              Đội ngũ Flying Legend Vietnam và chiếc máy bay TP-150.
            </figcaption>
          </figure>
        </section>
      </div>
    </>
  );
}
