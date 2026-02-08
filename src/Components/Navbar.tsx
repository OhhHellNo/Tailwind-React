import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const dummyLinks = [
    { name: "Home", url: "https://example.com/home" },
    { name: "About", url: "https://example.com/about" },
    { name: "Services", url: "https://example.com/services" },
    { name: "Contact", url: "https://example.com/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto mt-4 max-w-4xl rounded-md border border-neutral-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <img
          src="https://ui.aceternity.com/logo.png"
          width={50}
          height={50}
          alt="Logo"
          className="rounded-full"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            {dummyLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="transition-colors hover:text-neutral-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
              size={24}
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
              size={24}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {dummyLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="block py-2 transition-colors hover:text-neutral-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
