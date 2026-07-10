import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Journey", id: "journey" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-zinc-800 h-18 shadow-xl"
          : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <span className="text-white">Anuj</span>
          <span className="text-blue-500">.dev</span>
        </h1>

        <div className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                text-zinc-300
                hover:text-white
                transition
                relative
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                hover:after:w-full
                after:transition-all
              "
            >
              {item.name}
            </button>
          ))}

        </div>

        <div className="hidden lg:flex items-center gap-3">

          <a
            href="/resume.pdf"
            download
            className="
              flex
              items-center
              gap-2
              border
              border-zinc-700
              px-4
              py-2
              rounded-xl
              hover:border-blue-500
              transition
            "
          >
            <Download size={18} />
            Resume
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="
              bg-blue-600
              hover:bg-blue-500
              px-5
              py-2
              rounded-xl
              transition
            "
          >
            Hire Me
          </button>

        </div>

        <button
          className="lg:hidden"
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
              className="
                block
                w-full
                text-left
                px-6
                py-5
                border-b
                border-zinc-800
                hover:bg-zinc-900
              "
            >
              {item.name}
            </button>
          ))}

        </div>
      )}
    </nav>
  );
}