"use client";

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="py-4 max-lg:px-4 shadow-md bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <Image
          src="/logo.svg"
          alt="Brand Logo"
          width={144}
          height={52}
          className="max-lg:mx-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;