"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Partners", href: "#partners" },
  { name: "Enterprise", href: "enterprise" },
  { name: "Plans", href: "plans" },
  { name: "Resources", href: "resources" },
];

export function Navbar() {
  const pathname = usePathname();
  // 🎨 Definí qué rutas usan qué color de texto
  const isHome = ["/",].includes(pathname); // ejemplo
  const borderColor = isHome
    ? "border border-transparent"
    : "border border-neutral-200";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const textColor = isHome
    ? "text-white hover:text-neutral-200"
    : "text-neutral-900 hover:text-neutral-700";

  return (
    <header className="sticky inset-x-0 top-0 z-50 lg:px-6 lg:py-6">
      <nav
        aria-label="Global"
        className={`flex items-center justify-between px-6 py-6 bg-neutral-50 rounded-b-2xl lg:rounded-[99px] lg:px-12 ${borderColor}`}
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

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
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
          <button className="rounded-full bg-white text-gray-900 px-5 py-2 font-medium text-sm hover:bg-gray-100">
            Talk to sales
          </button>
          <button className="rounded-full bg-primary-600 text-white px-5 py-2 font-medium text-sm hover:bg-primary-700">
            Start Creating
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
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-neutral-900 p-6">
          <div className="flex items-center justify-between">
            <Image
              src="/images/logo.svg"
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
            <button className="rounded-full bg-white text-gray-900 px-5 py-2 font-medium text-sm">
              Talk to sales
            </button>
            <button className="rounded-full bg-primary-600 text-white px-5 py-2 font-medium text-sm">
              Start Creating
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
