import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function SubHeader({ title, breadcrumbs, backgroundImage }) {
  return (
    <div className="relative h-48 overflow-hidden pl-20">
      <Image
        src={backgroundImage}
        alt="Page header background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-4">
        <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-white pl-2">
          {title}
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) =>
              index < breadcrumbs.length - 1 ? (
                <>
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink href={item.href}>
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                </BreadcrumbItem>
              )
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
