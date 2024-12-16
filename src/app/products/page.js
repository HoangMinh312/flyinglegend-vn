import { SubHeader } from "@/components/subheader";

export default function Products() {
  return (
    <>
      <SubHeader
        title="Sản Phẩm"
        breadcrumbs={[
          { label: "Trang Chủ", href: "/" },
          { label: "Sản Phẩm", href: "/products" },
        ]}
        backgroundImage="/subheader-pic2.jpg"
      />
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Sản Phẩm</h2>
        <p className="mb-4">TP150 - Trainer and Patrol</p>
      </div>
    </>
  );
}
