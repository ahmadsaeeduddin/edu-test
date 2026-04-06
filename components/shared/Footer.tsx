import Link from 'next/link';
import { Mail, Phone, Globe, Linkedin, Instagram } from 'lucide-react';
import { FaqFooterLink } from '@/components/shared/FaqFooterLink';
import { FooterSubscribeButton } from '@/components/shared/FooterSubscribeButton';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-8">
      <div className="layout-container">
        {/* Newsletter Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="max-w-md mb-8 md:mb-0">
            <h2 className="font-general text-2xl md:text-4xl font-medium leading-tight">Subscribe for Insights</h2>
          </div>
          <div className="w-full md:w-auto flex items-center">
            <input
              className="w-full border-y border-l border-white border-r-0 bg-transparent px-4 py-3 text-white focus:border-y-amber-500 focus:border-l-amber-500 focus:outline-none md:w-80"
              placeholder="Enter email address"
              type="email"
            />
            <FooterSubscribeButton />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="font-medium font-general text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-md font-regular font-inter">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li>
                <Link href="/services" className="transition hover:text-white">
                  What We Offer
                </Link>
              </li>
              <li><Link href="/approach" className="hover:text-white transition">Our Approach</Link></li>
              <FaqFooterLink />
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium font-general text-lg mb-6">Our Programs</h4>
            <ul className="space-y-4 text-gray-400 text-md font-regular font-inter">
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Self-Paced Learning Programs
                </Link>
              </li>
              <li>
                <span className="text-gray-400">In-Person Learning Programs</span>
              </li>
              <li>
                <span className="text-gray-400">Innovation &amp; Community Spaces</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium font-general text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 text-md font-regular font-inter">
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium font-general text-lg mb-6">Stay Connected</h4>
            <ul className="space-y-4 text-gray-400 text-md font-regular font-inter">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>hr@edunautics.org</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+92 (329) 513-6439</span>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="w-4 h-4 mt-1" />
                <span>Working Globally</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Edunautics &bull; All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
