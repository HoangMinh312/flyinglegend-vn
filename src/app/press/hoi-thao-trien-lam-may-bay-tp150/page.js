import Image from "next/image";

const heroImage = "/conferenceImages/heroImage.jpg";

const section1 = ["/conferenceImages/section1pic1.jpg", "/conferenceImages/section1pic2.jpg"];
const section2 = ["/conferenceImages/section2pic1.jpg", "/conferenceImages/section2pic2.jpg"];
const section3 = ["/conferenceImages/section3pic1.jpg", "/conferenceImages/section3pic2.jpg"];
const section4 = ["/conferenceImages/section4pic1.jpg", "/conferenceImages/section4pic2.jpg", "/conferenceImages/section4pic3.jpg", "/conferenceImages/section4pic4.jpg"];

const gallery = [
  "/conferenceImages/gallerypic1.jpg",
  "/conferenceImages/gallerypic2.jpg",
  "/conferenceImages/gallerypic3.jpg",
  "/conferenceImages/gallerypic4.jpg",
  "/conferenceImages/gallerypic5.jpg",
  "/conferenceImages/gallerypic6.jpg",
  "/conferenceImages/gallerypic7.jpg",
  "/conferenceImages/gallerypic8.jpg",
  "/conferenceImages/gallerypic9.jpg",
  "/conferenceImages/gallerypic10.jpg",
  "/conferenceImages/gallerypic11.jpg",
  "/conferenceImages/gallerypic12.jpg",
  "/conferenceImages/gallerypic13.jpg",
  "/conferenceImages/gallerypic14.jpg",
  "/conferenceImages/gallerypic15.jpg",
  "/conferenceImages/gallerypic16.jpg",
];

export default function ConferenceMarch2025() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-12 prose prose-lg">
      {/* Title */}
      <h1 className="text-3xl">
        <b>HỘI THẢO MÁY BAY TP-150</b>
      </h1>
      {/* Published Date */}
      <p className="text-sm text-gray-500 mb-2">28/03/2025</p>
      {/* Excerpt */}
      <p className="mb-12 italic">
        Tiếp theo sự kiện giới thiệu máy bay TP-150 ra công chúng tại Triển lãm
        Quốc phòng Quốc tế Việt Nam 2024, ngày 14/03/2025 vừa qua, tại Trung tâm
        sự kiện Trống Đồng Palace Cảnh Hồ, Flying Legend Vietnam đã tổ chức buổi
        Hội thảo về dòng máy bay này, với mong muốn được cung cấp những thông
        tin chuyên sâu, trao đổi, giải đáp những vấn đề chuyên môn với các
        chuyên gia trong nước, các đơn vị trong và ngoài quân đội, hướng tới
        việc hiện thực hóa khả năng khai thác dòng máy bay này tại Việt Nam.{" "}
      </p>

      <img
        src={heroImage}
        alt="Hội Nghị TP150"
        className="rounded-xl my-4"
        placeholder="blur"
      />
      {/* Hero Image */}

      <p>
        Tại buổi Hội Thảo, Flying Legend Vietnam được hân hạnh đón tiếp, Đại sứ
        Đặc mệnh Toàn quyền Cộng hòa Italia tại Việt Nam, Ngài Marco Della Seta,
        Trung tướng Phi công Nguyễn Kim Cách, nguyên Chủ nhiệm Chính trị, Phó
        Chính ủy Quân chủng Phòng không – Không quân, PGS TS Thiếu tướng Lê Kỳ
        Nam, Phó Chủ tịch kiêm Tổng Thư ký Hiệp hội Doanh nghiệp Cơ khí Việt Nam
        (VAMI), nguyên Phó Hiệu trưởng Học viện Kỹ thuật Quân sự, ông Hồ Minh
        Tấn, Phó Cục trưởng Cục Hàng không Việt nam, cùng đại diện các cơ quan
        đơn vị thuộc Tổng cục Công nghiệp Quốc phòng, Cục Hàng không Việt Nam,
        Quân chủng Phòng không Không quân, Quân chủng Hải quân, Cảnh sát Biển
        Việt Nam, Trung đoàn Không quân Công an nhân dân, các tổ chức hàng không
        chung tại Việt Nam như Công ty CP Đào tạo Bay Việt, Công ty CP Hàng
        không Hải Âu, Công ty CP Hàng không BlueSky…đặc biệt là sự tham dự của
        thế hệ các kỹ sư hàng không kỳ cựu thuộc Viện Kỹ thuật Không quân – Bộ
        Quốc phòng, những người đã thiết kế và chế tạo chiếc máy bay Việt nam
        đầu tiên mang tên TL1.
      </p>
      {/* Section 1 images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {section1.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Section 1 - ${i + 1}`}
            className="rounded-xl"
            placeholder="blur"
          />
        ))}
      </div>

      <p>
        Tại sự kiện, khách mời tham dự đã có cơ hội trải nghiệm và khám phá
        chiếc máy bay TP-150 được Flying Legend Vietnam mang đến khán phòng,
        trải nghiệm thực tế buồng lái với thiết kế tối ưu hóa khả năng quan sát
        và điều khiển cùng các thiết bị điện tử hàng không hiên đại. Các chi
        tiết, bộ phận của máy bay được gia công và sản xuất tại Việt Nam, khung
        treo động cơ, cánh quạt và nhiều linh kiện quan trọng khác cũng được
        trưng bày, giúp khách mời có cái nhìn trực quan về quy trình sản xuất và
        cấu trúc của TP-150.
      </p>

      {/* Section 2 images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {section2.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Section 2 - ${i + 1}`}
            className="rounded-xl"
            placeholder="blur"
          />
        ))}
      </div>

      <p>
        Qua các nội dung thuyết trình của mình, ông Trần Hải Đăng, Chủ tịch HĐQT
        Flying Legend Vietnam đã mang đến cho toàn thể khách mời tại buổi Hội
        thảo một cái nhìn hết sức cụ thể, chi tiết và trực quan đối với máy bay
        TP-150, từ quá trình thiết kế, tiêu chuẩn thiết kế, đến việc gia công
        sản xuất các chi tiết máy bay, quá trình lắp ráp hoàn thiện, các tính
        năng nổi bật và ứng dụng của dòng máy bay này cùng các thông tin liên
        quan đến chi phí đầu tư, chi phí khai thác bảo trì, bảo dưỡng, công tác
        huấn luyện đào tạo chuyển loại cho phi công và nhân viên kỹ thuật, đặc
        biệt là khả năng cung ứng vật tư và hỗ trợ kỹ thuật 24/7 của Flying
        Legend Vietnam.
      </p>

      {/* Section 3 images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {section3.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Section 3 - ${i + 1}`}
            className="rounded-xl"
            placeholder="blur"
          />
        ))}
      </div>

      <p>
        Phần tọa đàm trao đổi tại buổi Hội thảo thu hút được nhiều sự quan tâm,
        bên cạnh các vấn đề liên quan đến quá trình tiếp nhận chuyển giao công
        nghệ, tỷ trọng nội địa hóa, năng lực sản xuất của nhà máy, các vấn đề
        chưa có tiền lệ tại Việt Nam như khung pháp lý phê chuẩn máy bay, công
        tác bay kiểm tra sau xuất xưởng cũng đã được nêu ra bàn thảo và nhận
        được nhiều ý kiến đóng góp trao đổi có giá trị.
      </p>

      {/* Section 4 images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {section4.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Section 4 - ${i + 1}`}
            className="rounded-xl"
            placeholder="blur"
          />
        ))}
      </div>

      <p>
        Hội thảo đã khép lại, bên cạnh sự phấn khởi và kỳ vọng của các nhà
        chuyên môn, các chuyên gia trong lĩnh vực công nghiệp hàng không, công
        nghiệp quốc phòng, những người trăn trở về một sản phẩm máy bay “Made in
        Vietnam”, vẫn còn đó những khó khăn và thách thức đang đặt ra cho doanh
        nghiệp và những nhà làm chính sách trên con đường hiện thực hóa, đưa sản
        phẩm TP-150 vào các hoạt động khai thác hàng không tại Việt Nam.
      </p>
      <br />
      <p>
        Bằng tri thức cộng với niềm đam mê vô hạn với công nghiệp hàng không,
        Flying Legend Vietnam với đội ngũ lãnh đạo và tập thể kỹ sư giỏi chuyên
        môn, tràn đầy nhiệt huyết cùng khát vọng vươn lên trong kỷ nguyên vươn
        mình của đất nước, hiện thực máy bay TP150, được sản xuất và lắp ráp bởi
        những con người Việt Nam cất cánh bay trên vùng trời Việt Nam có lẽ
        không còn là một giấc mơ quá xa vời.
      </p>
      <br />
      <h2>
        <b>Flying Legend Vietnam và TP150</b>
      </h2>
      <p className="italic">
        Flying Legend Vietnam thành lập tháng 11/2023 trên cơ sở hợp tác giữa
        Flying Legend Italy, nhà sản xuất máy bay đến từ Italia và các đối tác
        tại Việt nam.
      </p>
      <br />
      <p>
        TP-150 là dòng máy bay huấn luyện quân sự, được trang bị động cơ Rotax
        915 iS, công suất 150HP, sử dụng nhiên liệu xăng thông thường A95, càng
        đáp thu thả, chịu lực cao cho phép máy bay hoạt động linh hoạt trên
        nhiều bề mặt đường cất hạ cánh khác nhau. Máy bay được trang bị hệ thống
        điện tử hàng không hiện đại, đáp ứng các nhu cầu khai thác đa dạng từ
        huấn luyện sơ cấp đến hoạt động bay thể thao, tuần thám.
      </p>
      <br />
      <p>
        TP-150 là phiên bản quân sự được nâng cấp từ phiên bản dân sự Tucano-R,
        sản phẩm chủ đạo của Flying Legend. Phiên bản Tucano-R đang được khai
        thác với hơn 90 máy bay trên toàn thế giới, tích lũy tổng số hơn 10.000
        giờ bay an toàn. Phiên bản quân sự TP-150 đang được biên chế trong lực
        lượng Không quân Cộng hòa Dominica với tên gọi TP75 DULUS.
      </p>

      {/* Gallery section 16 images, 4 wide x 4 long grid for desktop and tablet, 2 x 8 grid for mobile */}
      {/* Gallery Grid */}
      <h3 className="mt-12 font-semibold">Hình ảnh sự kiện</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            className="rounded shadow-sm"
            placeholder="blur"
          />
        ))}
      </div>
    </article>
  );
}
