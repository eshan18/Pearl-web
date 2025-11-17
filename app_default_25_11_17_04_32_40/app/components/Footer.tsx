import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brandBg text-brandMuted border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading font-bold text-lg mb-3 text-brandText">
            PearlyGlow Innovations Pvt Ltd
          </h3>
          <p className="text-sm max-w-xs">
            High quality dental instruments ecommerce platform. Delivering
            excellence in dental care tools since 1998.
          </p>
          <p className="mt-4 text-sm">123 Dental Street, Mumbai, India</p>
          <p className="text-sm">Phone: +91 12345 67890</p>
          <p className="text-sm">Email: support@pearlyglow.com</p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-md mb-3 text-brandText">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/feedback"
                className="hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link
                href="/track-order"
                className="hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
              >
                Track Order
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-md mb-3 text-brandText">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/pearlyglow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-brandMuted hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/pearlyglow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-brandMuted hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com/pearlyglow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-brandMuted hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/pearlyglow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-brandMuted hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://youtube.com/pearlyglow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-brandMuted hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 text-center py-4 text-sm text-brandMuted">
        &copy; {new Date().getFullYear()} PearlyGlow Innovations Pvt Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}
