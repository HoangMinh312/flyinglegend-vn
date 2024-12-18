import { SubHeader } from "@/components/subheader";

import { ProfileForm } from "./form";

// Create a form with shadcn components
// Use the SubHeader component

export default function OrderPage() {
  return (
    <>
      <SubHeader
        title="Đặt Hàng"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Đặt Hàng", href: "/order" },
        ]}
        backgroundImage="/sky-background.svg"
      />
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Đặt Hàng</h2>
        <ProfileForm />
      </div>
    </>
  );
}
