'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react'
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
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-[#0675E1] ${
        isScrolled ? ' shadow-md' : ''
      }`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <Link href="/" className="text-2xl font-bold text-white">
          <Image
            src="/flyinglegend-logo.png"
            alt="Flying Legend Vietnam"
            width={150}
            height={150}
            
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="link" asChild>
                <Link href="/" className="text-white hover:text-gray-200">
                  Military
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="/about" className="text-white hover:text-gray-200">
                  Aircraft
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-200"
                >
                  Our kits
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="/" className="text-white hover:text-gray-200">
                  Download
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link href="/about" className="text-white hover:text-gray-200">
                  Order a kit
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-200"
                >
                  Press
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-200"
                >
                  Get in touch
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-200"
                >
                  Reserved area
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
