"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";


export function Navbar() {
  const t = useTranslations("navbar");
  const navigation = [
    { name: t('partners'), href: "#partners" },
    { name: t('enterprise'), href: "enterprise" },
    { name: t('plans'), href: "plans" },
    { name: t('resources'), href: "resources" },
  ];
  const pathname = usePathname();
  const isHome = ["/"].includes(pathname); // ejemplo
  const borderColor = isHome
    ? "border border-transparent"
    : "border border-transparent lg:border-neutral-200";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const textColor = isHome
    ? "text-white hover:text-neutral-200"
    : "text-neutral-900 hover:text-neutral-700";

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const navbarHeight = document.querySelector("header")?.offsetHeight || 0;

    const handleScroll = () => {
      setIsSticky(window.scrollY > navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isSticky
          ? "fixed top-0 opacity-100 translate-y-0"
          : "absolute top-0 opacity-100 translate-y-0"
      } inset-x-0 z-50 lg:px-6 lg:py-6 bg-transparent transition-all duration-700 ease-in-out`}
    >
      <nav
        aria-label="Global"
        className={`flex items-center justify-between px-6 py-6 bg-white/10 backdrop-blur-xl rounded-b-2xl lg:rounded-[99px] lg:px-12 ${borderColor}`}
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="logo_green.svg"
              alt="Laburen"
              width={36}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Tablet buttons + Mobile menu button */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Tablet buttons - only visible on tablet (md) */}
          <div className="hidden md:flex md:gap-3">
            <button onClick={() => window.location.href = '/resources'} className="rounded-full bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              {t('talkToSales')}
            </button>
            <button onClick={() => window.location.href = '/resources'} className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 transition-colors">
              {t('startCreating')}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-300 hover:text-white"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium ${textColor} transition-colors`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <button onClick={() => window.location.href = '/resources'} className="rounded-full bg-neutral-50 text-neutral-900 px-5 py-2 font-medium text-sm hover:bg-neutral-100">
            {t('talkToSales')}
          </button>
          <button className="rounded-full bg-neutral-800 text-neutral-50 border border-neutral-700 px-5 py-2 font-medium text-sm hover:bg-primary-700">
            {t('startCreating')}
          </button>
        </div>
      </nav>

      {/* Mobile dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-0 z-50 w-full bg-neutral-900 p-6">

          <div className="flex items-center justify-between">
            <Image
              src="/logo_green.svg"
              alt="Laburen"
              width={36}
              height={36}
              className="h-8 w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-300 hover:text-white"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-gray-200 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <button onClick={() => window.location.href = '/resources'} className="rounded-full bg-white text-gray-900 px-5 py-2 font-medium text-sm">
              {t('talkToSales')}
            </button>
            <button onClick={() => window.location.href = '/resources'} className="rounded-full bg-primary-600 text-white px-5 py-2 font-medium text-sm">
              {t('startCreating')}
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
