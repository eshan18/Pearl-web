"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX, HiPhone, HiChatAlt2 } from "react-icons/hi";
import clsx from "clsx";

const productCategories = [
  {
    title: "Dental Handpieces",
    links: [
      { name: "High Speed", href: "/products?category=high-speed" },
      { name: "Low Speed", href: "/products?category=low-speed" },
      { name: "Surgical", href: "/products?category=surgical" },
      { name: "Air Turbines", href: "/products?category=air-turbines" },
    ],
  },
  {
    title: "Endodontics",
    links: [
      { name: "Files & Reamers", href: "/products?category=files-reamers" },
      { name: "Obturation", href: "/products?category=obturation" },
      { name: "Irrigation", href: "/products?category=irrigation" },
    ],
  },
  {
    title: "Orthodontics",
    links: [
      { name: "Brackets", href: "/products?category=brackets" },
      { name: "Wires", href: "/products?category=wires" },
      { name: "Bands", href: "/products?category=bands" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <Link
          href="/"
          className="text-brandBlueDark font-heading font-bold text-xl sm:text-2xl"
          aria-label="PearlyGlow Innovations Home"
        >
          PearlyGlow
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8" aria-label="Primary navigation">
          <Link
            href="/"
            className="text-brandText hover:text-brandBlueDark font-medium focus:outline-none focus:ring-2 focus:ring-brandBlue"
          >
            Home
          </Link>

          <div className="relative group">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={productsMenuOpen}
              onClick={() => setProductsMenuOpen(!productsMenuOpen)}
              onBlur={() => setProductsMenuOpen(false)}
              className="inline-flex items-center text-brandText hover:text-brandBlueDark font-medium focus:outline-none focus:ring-2 focus:ring-brandBlue"
            >
              Products
              <svg
                className="ml-1 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
              </svg>
            </button>

            <div
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => setProductsMenuOpen(false)}
              className={clsx(
                "absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50",
                productsMenuOpen && "opacity-100 visible"
              )}
              onFocus={() => setProductsMenuOpen(true)}
              onBlur={() => setProductsMenuOpen(false)}
            >
              <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {productCategories.map((category) => (
                  <div key={category.title}>
                    <h3 className="text-brandGold font-semibold mb-2 font-heading">
                      {category.title}
                    </h3>
                    <ul className="space-y-1">
                      {category.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block text-brandText hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-brandText hover:text-brandBlueDark font-medium focus:outline-none focus:ring-2 focus:ring-brandBlue"
          >
            Contact
          </Link>

          <Link
            href="/feedback"
            className="text-brandText hover:text-brandBlueDark font-medium focus:outline-none focus:ring-2 focus:ring-brandBlue"
          >
            Feedback
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center space-x-3">
          <a
            href="tel:+1234567890"
            aria-label="Call us"
            className="p-2 rounded-full bg-brandGreen text-white shadow-md hover:bg-brandGreen/90 focus:outline-none focus:ring-2 focus:ring-brandGreen"
          >
            <HiPhone size={20} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat"
            className="p-2 rounded-full bg-brandAqua text-white shadow-md hover:bg-brandAqua/90 focus:outline-none focus:ring-2 focus:ring-brandAqua"
          >
            <HiChatAlt2 size={20} />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brandBlue"
          >
            {menuOpen ? (
              <HiX size={26} aria-hidden="true" />
            ) : (
              <HiMenu size={26} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <Link
            href="/"
            className="text-brandBlueDark font-heading font-bold text-xl"
            onClick={() => setMenuOpen(false)}
          >
            PearlyGlow
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brandBlue"
          >
            <HiX size={26} aria-hidden="true" />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-6">
          <li>
            <Link
              href="/"
              className="text-brandText text-lg font-medium hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <details className="group">
              <summary
                className="cursor-pointer text-brandText text-lg font-medium hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </summary>
              <ul className="mt-2 ml-4 border-l border-gray-200 pl-4">
                {productCategories.map((category) => (
                  <li key={category.title} className="mb-4 last:mb-0">
                    <p className="text-brandGold font-semibold font-heading mb-2">
                      {category.title}
                    </p>
                    <ul className="space-y-1">
                      {category.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block text-brandText hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
                            onClick={() => setMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-brandText text-lg font-medium hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/feedback"
              className="text-brandText text-lg font-medium hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
              onClick={() => setMenuOpen(false)}
            >
              Feedback
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-8 left-6 flex space-x-4">
          <a
            href="tel:+1234567890"
            aria-label="Call us"
            className="p-3 rounded-full bg-brandGreen text-white shadow-md hover:bg-brandGreen/90 focus:outline-none focus:ring-2 focus:ring-brandGreen"
          >
            <HiPhone size={24} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat"
            className="p-3 rounded-full bg-brandAqua text-white shadow-md hover:bg-brandAqua/90 focus:outline-none focus:ring-2 focus:ring-brandAqua"
          >
            <HiChatAlt2 size={24} />
          </a>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          aria-hidden="true"
        />
      )}
    </header>
  );
}
