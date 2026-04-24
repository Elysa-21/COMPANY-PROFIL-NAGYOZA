import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const menuItems = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 md:px-7 ${
            isScrolled
              ? "border-white/55 bg-white/82 shadow-[0_25px_80px_rgba(219,39,119,0.18)] backdrop-blur-xl"
              : "border-white/45 bg-white/55 shadow-[0_20px_60px_rgba(168,85,247,0.12)] backdrop-blur-xl"
          }`}
        >
          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3"
          >
            <Logo className="h-12 w-auto md:h-14" />
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="group relative text-sm font-semibold text-[#7a2954] transition-colors hover:text-[#561437]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => scrollToSection("#kontak")}
              className="rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(219,39,119,0.35)] transition-transform duration-300 hover:scale-[1.03]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Pesan Sekarang
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="rounded-full bg-pink-50 p-2 text-pink-600 md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-x-4 top-[88px] z-50 rounded-[30px] border border-white/50 bg-white/90 p-6 shadow-[0_30px_80px_rgba(219,39,119,0.18)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="rounded-2xl bg-[#fff5fa] px-5 py-4 text-left text-base font-semibold text-[#7b2954] transition-colors hover:bg-pink-100"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToSection("#kontak")}
                className="rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-5 py-4 text-left text-base font-semibold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Pesan Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
