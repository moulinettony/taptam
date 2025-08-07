import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="py-4 max-lg:px-4 shadow-md bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <Link href="/" className="" aria-label="Back to homepage">
          <Image
            src="/logo.svg" 
            alt="Brand Logo"
            width={144}
            height={52}
            className=""
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;