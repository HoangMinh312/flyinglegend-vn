"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`flex sticky top-0 z-50 transition-all duration-500 ease-in-out bg-[#0675E1] ${
        isScrolled ? " shadow-md h-26" : "h-40"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between transition-all duration-500 ease-in-out px-4 py-6">
        <Link href="/">
          <Image
            src="/flyinglegend-logo.png"
            alt="Flying Legend Vietnam"
            width={isScrolled ? 80 : 150}
            height={isScrolled ? 80 : 150}
            className="transition-all duration-300 ease-in-out"
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="link" asChild>
                <Link href="/products" className="text-white hover:text-gray-200">
                  Sản Phẩm
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="/order" className="text-white hover:text-gray-200">
                  Đặt Hàng
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="/press" className="text-white hover:text-gray-200">
                  Tin Tức
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link
                  href="/about-us"
                  className="text-white hover:text-gray-200"
                >
                  Về Công Ty
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
