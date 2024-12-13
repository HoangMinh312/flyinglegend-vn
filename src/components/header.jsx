"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className={`flex lg:sticky top-0 z-50 transition-all duration-500 ease-in-out bg-[#232325] ${
        isScrolled ? "shadow-md lg:h-26 h-20" : "lg:h-40 h-24"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/flyinglegend-logo.png"
            alt="Flying Legend Vietnam"
            width={155}
            height={101}
            className={`transition-all duration-500 ease-in-out 
    ${
      isScrolled
        ? "w-20 lg:w-28 h-12 lg:h-18"
        : "w-20 sm:w-40 lg:w-32 h-12 sm:h-20 lg:h-24"
    }`}
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-white text-[#232325] focus:outline-none"
        >
          <span className="sr-only">Open Menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <Button variant="link" asChild>
                <Link
                  href="/products"
                  className="text-white hover:text-gray-200"
                >
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

      {/* Sidebar Navigation for Mobile */}
      <div
        className={`fixed inset-y-0 right-0 w-40 bg-white shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-[#232325]">Menu</h2>
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-8 h-8 text-[#232325] focus:outline-none"
          >
            <span className="sr-only">Close Menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                onClick={toggleMenu}
                href="/products"
                className="block text-[#232325] hover:text-gray-600"
              >
                Sản Phẩm
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/order"
                className="block text-[#232325] hover:text-gray-600"
              >
                Đặt Hàng
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/press"
                className="block text-[#232325] hover:text-gray-600"
              >
                Tin Tức
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/about-us"
                className="block text-[#232325] hover:text-gray-600"
              >
                Về Công Ty
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for Sidebar */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 left-0 bg-black bg-opacity-50 z-40 lg:hidden"
          style={{ width: "calc(100vw - 10rem)" }} // Adjust width for the sidebar
        />
      )}
    </header>
  );
}
