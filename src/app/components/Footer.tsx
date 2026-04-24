import { motion } from "motion/react";
import { Instagram, Mail, MessageCircle, Music2 } from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

const socials = [
  {
    icon: MessageCircle,
    href: "https://wa.me/6281234567890",
    label: "WhatsApp",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/nagyoza_?igsh=MWE1Y3Rwcm4wZWhxMA==",
    label: "Instagram",
  },
  {
    icon: Music2,
    href: "https://www.tiktok.com/@nagyoza.official",
    label: "TikTok",
  },
  {
    icon: Mail,
    href: "mailto:halo@nagyoza.id",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#62204a_0%,#351122_58%,#17070f_100%)] py-16 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-5 rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <Logo className="h-20 w-auto" />
            </div>
            <h3
              className="mb-3 text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              NAGYOZA
            </h3>
            <p
              className="max-w-md text-base leading-8 text-white/75"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Gyoza sehat dari kulit buah naga dengan karakter visual premium, rasa unik, dan
              semangat usaha mahasiswa yang siap tumbuh menjadi brand nyata.
            </p>
            <p
              className="mt-4 text-sm uppercase tracking-[0.28em] text-pink-200"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Unik warnanya, premium pengalamannya.
            </p>
          </div>

          <div>
            <h4
              className="mb-5 text-xl font-bold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Quick Links
            </h4>
            <div className="grid gap-3">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/70 transition-colors hover:text-pink-200"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="mb-5 text-xl font-bold"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Social Media
            </h4>
            <div className="mb-5 flex flex-wrap gap-3">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85 backdrop-blur-md transition-colors hover:bg-white/20"
                    aria-label={item.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
            <p
              className="text-base leading-8 text-white/70"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Company profile ini dirancang untuk presentasi PMW, proposal bisnis, dan kebutuhan
              branding usaha yang siap launching.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p
              className="text-sm text-white/55"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              © 2026 NAGYOZA. All rights reserved.
            </p>
            <p
              className="text-sm text-white/55"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Premium food innovation from student entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
