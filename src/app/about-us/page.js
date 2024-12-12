import { SubHeader } from "@/components/subheader";

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
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Câu Chuyện Flying Legend Việt Nam</h2>
        <p className="mb-4">
          Flying Legend Vietnam is dedicated to preserving the rich aviation history of Vietnam and inspiring future generations of pilots and aviation enthusiasts.
        </p>
        <p>
          Founded in 2020, our mission is to showcase the incredible stories of Vietnamese aviators and their contributions to the field of aviation.
        </p>
      </div>
    </>
  );
}
