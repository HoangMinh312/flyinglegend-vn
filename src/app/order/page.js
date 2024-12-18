import { SubHeader } from "@/components/subheader";

import { ProfileForm } from "./form";
import Image from "next/image";

import subheaderimage from "./(assets)/subheader-pic1.jpg";

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
        backgroundImage={subheaderimage}
      />
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Đặt Hàng</h2>
        <ProfileForm />
      </div>
    </>
  );
}
