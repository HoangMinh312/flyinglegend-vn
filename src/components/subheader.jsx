import Image from "next/image";
import React from "react";

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
    <div className="relative h-48 overflow-hidden lg:pl-20">
      <Image
        src={backgroundImage}
        alt="Page header background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" /> {/* Dark overlay */}
      <div className="relative z-10 flex h-full flex-col items-center lg:items-start justify-center px-4">
        <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-white text-center lg:text-left lg:pl-2">
          {title}
        </h1>
        <Breadcrumb className="hidden lg:block">
          <BreadcrumbList>
            {breadcrumbs.map((item, index) =>
              index < breadcrumbs.length - 1 ? (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.href} className="text-white hover:text-gray-500">
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </React.Fragment>
              ) : (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="text-white">{item.label}</BreadcrumbPage>
                </BreadcrumbItem>
              )
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
