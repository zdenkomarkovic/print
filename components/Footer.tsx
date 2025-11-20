"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/android-chrome-192x192.png";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={Logo}
                alt="DESIGNER 02 STORE"
                width={120}
                height={120}
                className="rounded-2xl"
              />
            </Link>
            <h3 className="text-xl font-bold mb-4">DESIGNER 02 STORE</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Vaša destinacija za jedinstvene dizajnerske proizvode.
              Kvalitet, stil i funkcionalnost na jednom mestu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-300">
              Brzi linkovi
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/proizvodi"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Prodavnica
                </Link>
              </li>
              <li>
                <Link
                  href="/o-meni"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  O meni
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-300">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Email</p>
                  <a
                    href="mailto:sijaj.sa.tijanam@gmail.com"
                    className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                  >
                    sijaj.sa.tijanam@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">
                    WhatsApp (Srbija)
                  </p>
                  <a
                    href="https://wa.me/381645215667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    064/52-15-667
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-xs mb-1">Viber (BiH)</p>
                  <a
                    href="viber://chat?number=38765311833"
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    065/311-833
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Promo */}
          <div>
            <div className="mt-6 p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg">
              <p className="text-blue-300 font-semibold text-sm mb-1">
                Besplatna dostava!
              </p>
              <p className="text-gray-300 text-xs">Za sve porudžbine</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} DESIGNER 02 STORE. Sva prava
              zadržana.
            </p>
            <a
              href="https://www.manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              Izrada sajta:{" "}
              <span className="font-bold text-blue-300">
                ManikamWebSolutions
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
