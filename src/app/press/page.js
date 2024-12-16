import { SubHeader } from "@/components/subheader";

export default function PressPage() {
    return (
        <>
            <SubHeader
                title="Tin Tức"
                breadcrumbs={[
                    { label: "Trang Chủ", href: "/" },
                    { label: "Tin Tức", href: "/press" },
                ]}
                backgroundImage="/subheader-pic1.jpg"
            />
            <div className="container mx-auto px-4 py-16">
                <h2 className="mb-8 text-3xl font-bold">Press</h2>
                <p className="mb-4">
                    Press page
                </p>
                <p>
                    Press page
                </p>
            </div>
        </>
    )
    }