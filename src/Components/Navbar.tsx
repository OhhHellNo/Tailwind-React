
const Navbar = () => {
  const dummyLinks = [
    { name: "Home", url: "https://example.com/home" },
    { name: "About", url: "https://example.com/about" },
    { name: "services", url: "https://example.com/services" },
    { name: "contact", url: "https://example.com/contact" },
  ];

  return (
    <div className="mx-auto mt-4 flex max-w-4xl items-center justify-between rounded-md border border-neutral-200 p-4">
      <img
        src="https://ui.aceternity.com/logo.png"
        width={50}
        height={50}
        className="rounded-full"
      ></img>
      <nav className="flex">
        <ul className="flex gap-3">
          {dummyLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>

      </div>
    </div>
  );
};

export default Navbar;
