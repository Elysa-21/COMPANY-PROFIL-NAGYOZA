import { motion, useInView } from "motion/react";
import { Clock3, Instagram, Mail, MapPin, MessageCircle, Music2 } from "lucide-react";
import { useRef } from "react";
import AmbientLayer from "./AmbientLayer";

const contacts = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+62 812-3456-7890",
    subtitle: "Respon cepat untuk pemesanan dan konsultasi",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@nagyoza_",
    subtitle: "Konten brand, promo, dan update produk terbaru",
    href: "https://www.instagram.com/nagyoza_?igsh=MWE1Y3Rwcm4wZWhxMA==",
  },
  {
    icon: Music2,
    title: "TikTok",
    value: "@nagyoza.official",
    subtitle: "Short video promo dan aktivitas brand",
    href: "https://www.tiktok.com/@nagyoza.official",
  },
  {
    icon: Mail,
    title: "Email",
    value: "halo@nagyoza.id",
    subtitle: "Kolaborasi, pemesanan event, dan pertanyaan usaha",
    href: "mailto:halo@nagyoza.id",
  },
];

const details = [
  {
    icon: MapPin,
    title: "Lokasi Usaha",
    value: "Magetan, Jawa Timur, indonesia",
  },
  {
    icon: Clock3,
    title: "Jam Operasional",
    value: "Senin - Sabtu, 08.00 - 20.00 WIB",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="kontak"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9fb_0%,#ffe6ef_40%,#fdeef4_100%)] py-24"
    >
      <AmbientLayer variant="section" />
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute right-[-5%] top-1/3 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-32 w-32 rounded-full border border-pink-300/40 bg-white/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span
            className="mb-4 inline-flex rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Kontak
          </span>
          <h2
            className="mb-5 text-5xl font-bold text-[#54123b] md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kolaborasi & Pemesanan
          </h2>
          <p
            className="text-lg leading-8 text-[#7b4262]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hubungi tim NAGYOZA untuk pemesanan dan kolaborasi usaha.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="rounded-[32px] border border-white/60 bg-white/55 p-8 shadow-[0_35px_90px_rgba(236,72,153,0.14)] backdrop-blur-xl"
          >
            <div className="grid gap-5 md:grid-cols-2">
              {contacts.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.15 + index * 0.08 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group rounded-[28px] border border-pink-100 bg-white/80 p-6 shadow-[0_18px_50px_rgba(216,70,156,0.12)] transition-all duration-300 hover:shadow-[0_0_24px_rgba(236,72,153,0.14),0_26px_70px_rgba(216,70,156,0.18)]"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-300/40 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-pink-500"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.title}
                    </p>
                    <h3
                      className="mb-3 text-xl font-bold text-[#4b1736]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.value}
                    </h3>
                    <p
                      className="text-sm leading-7 text-[#7f5a70]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.subtitle}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="rounded-[32px] border border-[#ffd6e4] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,240,247,0.9))] p-8 shadow-[0_32px_90px_rgba(236,72,153,0.16)]"
          >
            <div className="mb-8 rounded-[28px] bg-gradient-to-br from-[#ff5a9f] via-[#ff8fc5] to-[#f4b4d3] p-8 text-white shadow-[0_25px_70px_rgba(236,72,153,0.28)]">
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                NAGYOZA siap tampil sebagai brand camilan premium yang menarik, berkualitas, dan siap dipasarkan.
              </h3>
            </div>

            <div className="space-y-4">
              {details.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.28 + index * 0.08 }}
                    className="rounded-[24px] border border-white/80 bg-white/85 p-5 shadow-[0_14px_40px_rgba(236,72,153,0.1)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p
                          className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="text-base leading-7 text-[#674156]"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
