"use client";

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-4 max-lg:px-4 bg-white/90 backdrop-blur-sm sticky top-0 z-1 max-lg:mb-[83px]">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/logo.svg"
          alt="Brand Logo"
          width={144}
          height={52}
          className="max-lg:mx-auto"
        />
        <div className="flex gap-5 items-baseline">
          <Link href="https://taptam.com/terms-of-service/" aria-label="Telecharger Taptam" className="m-0 text-neutral-700">
            Mentions Légales
          </Link>
          <span className="m-0">-</span>
          <Link href="https://taptam.com/privacy-policy/" aria-label="Telecharger Taptam" className="m-0 text-neutral-700">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;