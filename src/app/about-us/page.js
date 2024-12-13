import { SubHeader } from "@/components/subheader";
import Image from "next/image";

import photo1 from "./(assets)/about-us1.jpeg";
import photo2 from "./(assets)/about-us2.jpeg";
import photo3 from "./(assets)/about-us3.jpeg";
import photo4 from "./(assets)/about-us4.jpg";
import photo5 from "./(assets)/about-us5.jpg";

export default function AboutUs() {
  return (
    <>
      <SubHeader
        title="Hành Trình Của Chúng Tôi"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Hành Trình Của Chúng Tôi", href: "/about" },
        ]}
        backgroundImage="/sky-background.svg"
      />
      <div className="container mx-auto px-4 py-16 flex-col gap-6">
        <h2 className="my-8 text-4xl font-bold">Câu Chuyện Flying Legend Việt Nam</h2>

        <section className="my-8">
          <h3 className="text-2xl font-semibold mb-4">Tầm Nhìn</h3>
          <p className="text-lg">
            Flying Legend Vietnam tự hào là công ty đầu tiên của Việt Nam sản xuất máy bay ngay trên quê hương mình. 
            Sứ mệnh của chúng tôi là mở đường cho ngành công nghiệp hàng không của đất nước, mang đến những chiếc máy bay 
            chất lượng cao, đạt tiêu chuẩn quốc tế và quân sự.
          </p>
        </section>
        <section className="my-8 w-full lg:w-3/5 mx-auto">
          <figure>
            <Image src={photo2} alt="Flying Legend Vietnam founders shaking hands" />
            <figcaption className="text-center mt-2 text-sm italic">
                Ông Trần Hải Đăng, người sáng lập Flying Legend Vietnam, cùng đồng sáng lập viên khác.
            </figcaption>
          </figure>
        </section>
        <section className="my-8">
          <h3 className="text-2xl font-semibold mb-4">Di Sản Của Chúng Tôi</h3>
          <p className="text-lg">
            Flying Legend Vietnam được thành lập bởi ông Trần Hải Đăng, một chuyên gia kỳ cựu với gần 30 năm kinh nghiệm 
            trong ngành hàng không. Sinh ra trong một gia đình truyền thống không quân, ông Hải Đăng đã nuôi dưỡng khát vọng 
            đóng góp cho bầu trời Việt Nam. Ở tuổi 50, cùng với đội ngũ đồng sáng lập, ông đã khởi đầu hành trình đầy thách thức 
            với việc chế tạo TP-150, đặt viên gạch đầu tiên cho sự hiện diện của Việt Nam trên thị trường hàng không thế giới.
          </p>
        </section>
        <section className="my-8 w-full lg:w-3/5 mx-auto">
          <figure>
            <Image src={photo3} alt="Flying Legend Vietnam's TP-150 aircraft in assembly" />
            <figcaption className="text-center mt-2 text-sm italic">
              Đội ngũ đồng sáng lập Flying Legend Vietnam.
            </figcaption>
          </figure>
        </section>
        <section className="my-8">
          <h3 className="text-2xl font-semibold mb-4">Thành Tựu Của Chúng Tôi</h3>
          <p className="text-lg">
            Tại Triển lãm Quốc phòng Việt Nam 2024, Flying Legend Vietnam đã giới thiệu TP-150, loại máy bay huấn luyện sơ cấp 
            và tuần tra, được thiết kế hợp tác cùng các kỹ sư Ý và sản xuất tại nhà máy của chúng tôi ở Vĩnh Phúc, Việt Nam. 
            Với các linh kiện như động cơ và thiết bị điện tử được nhập khẩu từ các nước phương Tây, phần lớn cấu trúc thân, cánh 
            và phụ kiện của TP-150 đã được sản xuất hoàn toàn tại Việt Nam.
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
          <h3 className="text-2xl font-semibold mb-4">Tầm Nhìn Cho Tương Lai</h3>
          <p className="text-lg">
            TP-150 không chỉ là một chiếc máy bay, mà còn là biểu tượng của khát vọng công nghiệp của Việt Nam. 
            Chúng tôi mong muốn hiện đại hóa công tác đào tạo phi công và nâng cao năng lực quốc phòng của đất nước. 
            Đồng thời, Flying Legend Vietnam cam kết đồng hành cùng Luật Công nghiệp Quốc phòng, An ninh và Động viên Công nghiệp, 
            hướng tới mục tiêu trở thành doanh nghiệp tư nhân hàng đầu trong lĩnh vực quốc phòng, xuất khẩu những sản phẩm máy bay 
            chất lượng cao ra các thị trường Nam Mỹ, Bắc Phi và khu vực Châu Á - Thái Bình Dương.
          </p>
        </section>
        <section className="my-8 w-full lg:w-3/5 mx-auto">
          <figure>
            <Image src={photo5} alt="Flying Legend Vietnam team celebrating success" />
            <figcaption className="text-center mt-2 text-sm italic">
              Đội ngũ Flying Legend Vietnam và chiếc máy bay TP-150.
            </figcaption>
          </figure>
        </section>
      </div>
    </>
  );
}
