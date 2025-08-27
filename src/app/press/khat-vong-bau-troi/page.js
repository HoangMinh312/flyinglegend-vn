/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const heroImage = "/conference-aug-2025/hero.jpg";

const section1 = "/conference-aug-2025/section1.jpg";
const section2 = "/conference-aug-2025/section2.jpg";
const section3 = "/conference-aug-2025/section3.jpg";

const gallery = [
  "/conference-aug-2025/gallery1.jpg",
  "/conference-aug-2025/gallery2.jpg",
  "/conference-aug-2025/gallery3.jpg",
  "/conference-aug-2025/gallery4.jpg",
  "/conference-aug-2025/gallery5.jpg",
  "/conference-aug-2025/gallery6.jpg",
  "/conference-aug-2025/gallery7.jpg",
  "/conference-aug-2025/gallery8.jpg",
  "/conference-aug-2025/gallery9.jpg",
  "/conference-aug-2025/gallery10.jpg",
  "/conference-aug-2025/gallery11.jpg",
  "/conference-aug-2025/gallery12.jpg",
  "/conference-aug-2025/gallery13.jpg",
  "/conference-aug-2025/gallery14.jpg",
  "/conference-aug-2025/gallery15.jpg",
  "/conference-aug-2025/gallery16.jpg",
];

export default function ConferenceAugust2025() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-12 prose prose-lg">
      {/* Title */}
      <h1 className="text-3xl">
        <b>KHÁT VỌNG BẦU TRỜI – TỰ HÀO VIỆT NAM</b>
      </h1>
      {/* Published Date */}
      <p className="text-sm text-gray-500 mb-2">28/08/2025</p>
      {/* Excerpt */}
      <img
        src={heroImage}
        alt="Hội Nghị TP150"
        className="rounded-xl my-4"
        placeholder="blur"
      />
      {/* Hero Image */}
      <h2 className="text-xl">
        <b>
          <i>Tiếp nối giấc mơ</i>
        </b>
      </h2>
      <p>
        Kỷ niệm 80 năm Quốc khánh nước CHXHCN Việt Nam (1945 – 2025), từ ngày
        28/8 - 5/9/2025, Triển lãm &quot;80 năm HÀNH TRÌNH ĐỘC LẬP - TỰ DO -
        HẠNH PHÚC&quot; được tổ chức tại Trung tâm Triển lãm Quốc gia, Cổ Loa,
        Đông Anh, Hà Nội Đây là dịp tôn vinh, giới thiệu thành tựu nổi bật của
        đất nước và cũng là dịp để tất cả chúng ta nhìn lại chặng đường lịch sử
        vẻ vang của dân tộc, đồng thời khẳng định khát vọng phát triển trong
        tương lai.
      </p>
      <br />
      <p>
        Flying Legend Vietnam, ra đời năm 2023 đã{" "}
        <b>tiếp nối giấc mơ sản xuất máy bay tại Việt Nam</b> – một giấc mơ được
        khởi xướng từ gần 50 năm trước bởi thế hệ kỹ sư cha anh tiên phong thuộc
        Quân chủng Phòng không – Không quân, những người đã đặt nền móng cho tư
        duy kỹ thuật và niềm tin rằng người Việt có thể làm chủ công nghệ hàng
        không.
      </p>
      <br />
      <p>
        Với sự hỗ trợ công nghệ từ Ý, hợp tác với Flying Legend Italy, đội ngũ
        kỹ sư trẻ trong nước, và chiến lược phát triển bài bản, công ty đang
        từng bước{" "}
        <b>hiện thực hóa giấc mơ sản xuất, lắp ráp máy bay tại Việt Nam</b> –
        lần này với một nền tảng kỹ thuật vững chắc và tầm nhìn quốc tế.
      </p>
      <br />
      <p>
        Flying Legend Vietnam mang đến triển lãm sản phẩm máy bay Tucano-R do
        chính bàn tay, trí tuệ người Việt sản xuất, lắp ráp, hội tụ công nghệ
        quốc tế và khát vọng dân tộc.
      </p>
      <br />
      {/* Section 1 image */}
      <div className="my-4">
        <img
          src={section1}
          alt={`Section 1`}
          className="rounded-xl"
          placeholder="blur"
        />
        {/* Caption */}
        <p className="text-sm text-gray-500 text-right">
          Hai chiếc Tucano-R tại triển lãm &quot;80 năm HÀNH TRÌNH ĐỘC LẬP - TỰ DO - HẠNH PHÚC&quot; - Tác giả ảnh: Thành Thơi
        </p>
      </div>
      <h2 className="text-xl">
        <b>
          <i>Hai sản phẩm trưng bày – Hai thông điệp</i>
        </b>
      </h2>
      <br />
      <h3 className="text-lg indent-4 md:indent-8">
        <b>
          • Tucano-R màu Đỏ - Biểu tượng của lòng yêu nước, tự hào dân tộc và
          khát vọng
        </b>
      </h3>
      <p>
        Được bố trí đặt trên khung giá đỡ trang trọng, với thiết kế tích hợp có
        đế tròn trang trí hình ảnh Trống đồng Đông sơn, phần khung mô phỏng hình
        ảnh nỏ thần An Dương Vương với mũi tên bay về phía trước, tượng trưng
        cho hành trình dựng nước giữ nước, độc lập và phát triển từ Văn Lang, Âu
        Lạc, kết nối giữa quá khứ hào hùng và hiện tại phát triển.
      </p>
      {/* Section 2 images */}
      <div className="my-4">
        <img
          src={section2}
          alt={`Section 2`}
          className="rounded-xl"
          placeholder="blur"
        />
        {/* Caption */}
        <p className="text-sm text-gray-500 text-right">
          Chiếc máy bay Tucano-R màu Đỏ - Tác giả ảnh: Thành Thơi
        </p>
      </div>
      <h3 className="text-lg indent-4 md:indent-8">
        <b>
          • Tucano-R màu Xanh - Hiện đại, cởi mở, truyền cảm hứng và niềm tin
          bay cao vươn xa
        </b>
      </h3>
      <p>
        Được bố trí trưng bày tạo sự gần gũi với khách tham quan, máy bay được
        sơn xanh da trời mang ý nghĩa của sự tin tưởng, niềm tin khát vọng bay
        cao. Họa tiết trên máy bay là sự phối hợp ba dải màu cùng chụm lại hướng
        về phía trước. Đỏ của say mê, nhiệt huyết, đam mê sáng tạo. Vàng của
        tinh thần cầu tiến, học hỏi không ngừng, tiếp thu công nghệ. Xanh neon
        của khoa học và công nghệ tiên tiến.
      </p>
      {/* Section 3 images */}
      <div className="my-4">
        <img
          src={section3}
          alt={`Section 3`}
          className="rounded-xl"
          placeholder="blur"
        />
        {/* Caption */}
        <p className="text-sm text-gray-500 text-right">
          Chiếc máy bay Tucano-R màu Xanh - Tác giả ảnh: Thành Thơi
        </p>
      </div>
      <h2 className="text-xl">
        <b>
          <i>Tucano-R</i>
        </b>
        <br />
        <b>
          <i>Chiến binh thể thao trên bầu trời</i>
        </b>
      </h2>
      <p>
        Tucano-R là sản phẩm máy bay thể thao dân sự của Flying Legend Vietnam,
        được thiết kế dựa trên nguyên mẫu chiến đấu cơ Tucano của hãng Embraer
        bởi hai doanh nhân Ý, đồng sở hữu Flying Legend Italy. Đây là lựa chọn
        lý tưởng cho những phi công đam mê tốc độ, cảm giác mạnh và khả năng
        điều khiển linh hoạt như đang lái một chiến đấu cơ thực thụ.
      </p>
      <br />
      <h2 className="text-xl">
        <b>Hướng tới thế hệ trẻ - Bay lên cùng cá tính</b>
      </h2>
      <p>
        Máy bay được chế tạo từ hợp kim nhôm hàng không siêu bền, nhẹ, an toàn,
        trang bị Động cơ Rotax 915 iS (150 mã lực) – mạnh mẽ, tiết kiệm nhiên
        liệu, tầm bay đến 1.200 km, trần bay 7.000 m. Buồng lái hiện đại với hệ
        thống điện tử Dynon Skyview HDX, khả năng thực hiện nhiều động tác nhào
        lộn cơ bản, phù hợp cho cả hoạt động bay huấn luyện hay bay biểu diễn.
      </p>
      <br />
      <p>
        Tucano-R không chỉ là một phương tiện bay, mà còn là biểu tượng của đam
        mê và tự do trên bầu trời thể hiện phong cách sống hiện đại. Với thiết
        kế thể thao và khả năng tùy biến màu sắc sơn, Tucano-R đặc biệt thu hút
        giới trẻ yêu thích hàng không, mong muốn thể hiện cá tính riêng và chinh
        phục bầu trời theo cách của mình. Tucano-R là mẫu máy bay dành cho những
        người trẻ đam mê tốc độ, kỹ thuật và trải nghiệm bay như phi công chiến
        đấu, là lựa chọn lý tưởng cho các câu lạc bộ hàng không, trường đào tạo
        phi công, hoặc cá nhân muốn sở hữu máy bay riêng, góp phần tạo nên xu
        hướng mới: <b>bay không chỉ là kỹ năng – mà là phong cách sống.</b>
      </p>
      <br />
      <h2 className="text-xl">
        <b>Khát vọng Việt Nam</b>
      </h2>
      <p>
        Đến với Triển lãm “80 năm Hành trình Độc lập – Tự do – Hạnh phúc” Flying
        Legend Vietnam không chỉ giới thiệu sản phẩm, mà còn kể một câu chuyện
        về tiếp nối một giấc mơ, về khát vọng, về sáng tạo, và về niềm tin vào
        tương lai Việt Nam bay cao vươn xa.{" "}
      </p>

      {/* Gallery section 16 images, 4 wide x 4 long grid for desktop and tablet, 2 x 8 grid for mobile */}
      {/* Gallery Grid */}
      <h3 className="mt-12 font-semibold">
        Hình ảnh sự kiện (Tác giả ảnh: Thành Thơi)
      </h3>
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
