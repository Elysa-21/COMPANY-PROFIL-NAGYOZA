import { motion, useInView } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import AmbientLayer from "./AmbientLayer";

const showcaseCards = [
  {
    title: "Gyoza Premium",
    subtitle: "Tekstur lembut dan warna alami yang menggugah selera.",
    image: "/assets/foto-produk/close up premium.jpeg",
    accent: "from-[#fff7fa] via-[#ffd7e8] to-[#ff9ec4]",
  },
  {
    title: "Saus Signature",
    subtitle: "Saus khas kulit buah naga dengan cita rasa unik.",
    image: "/assets/foto-produk/saus signture.png",
    accent: "from-[#fffaf3] via-[#ffe7ef] to-[#ff8ab7]",
  },
  {
    title: "Premium Packaging",
    subtitle: "Kemasan modern yang siap dipasarkan secara profesional.",
    image: "/assets/foto-produk/packaging produk.jpeg",
    accent: "from-[#fff9f5] via-[#ffe8de] to-[#ffc1d8]",
  },
];

export default function ProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="produk"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf8_0%,#fff2f6_28%,#ffe4ef_58%,#fff5ee_100%)] py-24"
    >
      <AmbientLayer variant="section" />
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-12 h-72 w-72 rounded-full bg-pink-200/45 blur-3xl" />
        <div className="absolute right-[-5%] top-24 h-80 w-80 rounded-full bg-fuchsia-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-rose-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <span
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/70 px-5 py-2 text-sm font-semibold text-pink-700 shadow-[0_8px_24px_rgba(236,72,153,0.08)] backdrop-blur-md"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Sparkles className="h-4 w-4" />
            Produk NAGYOZA
          </span>
          <h2
            className="mx-auto mb-5 max-w-3xl text-4xl font-bold leading-tight text-[#5a193b] md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
             Signature Product 
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="mb-12 overflow-hidden rounded-[34px] border border-white/70 bg-white/45 shadow-[0_28px_90px_rgba(236,72,153,0.12)] backdrop-blur-xl"
        >
          <div className="grid gap-6 px-7 py-7 md:grid-cols-[1.15fr_0.85fr] md:px-9 md:py-9">
            <div>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#d05b8f]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Premium Food Showcase
              </p>
              <h3
                className="mb-4 max-w-xl text-3xl font-bold leading-tight text-[#571737] md:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                NAGYOZA
              </h3>
              <p
                className="max-w-2xl text-base leading-8 text-[#7b5967]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                NAGYOZA adalah gyoza premium berbahan kulit buah naga dengan warna alami tanpa pewarna buatan.
                Dipadukan dengan isian ayam gurih, keju lumer, dan saus khas kulit buah naga, produk ini menghadirkan cita rasa lezat, unik, dan bernilai sehat dalam satu sajian modern.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
              {[
                "Warna alami dari kulit buah naga",
                "Cita rasa gurih ayam dan keju",
                "Packaging modern siap dipasarkan",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,244,247,0.82))] px-5 py-4 shadow-[0_16px_36px_rgba(236,72,153,0.08)]"
                >
                  <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ff6aa7] via-[#ff92c1] to-[#ffd9e7]" />
                  <p
                    className="text-sm leading-7 text-[#6f4a5b]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-10 h-32 w-[75%] -translate-x-1/2 rounded-full bg-pink-200/30 blur-3xl" />
          <div className="grid gap-7 md:grid-cols-3">
            {showcaseCards.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.18 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/75 bg-white/55 p-3 shadow-[0_24px_70px_rgba(236,72,153,0.12)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_34px_90px_rgba(236,72,153,0.18)]"
              >
                <div
                  className={`absolute inset-x-6 top-4 h-24 rounded-full bg-gradient-to-r ${item.accent} opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative overflow-hidden rounded-[26px] shadow-[0_22px_55px_rgba(88,26,58,0.12)]">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(88,24,55,0.08)_58%,rgba(88,24,55,0.16)_100%)]" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-x-4 bottom-4 rounded-[20px] border border-white/45 bg-white/16 px-4 py-3 shadow-[0_10px_30px_rgba(77,19,50,0.14)] backdrop-blur-sm"
                  >
                    <h3
                      className="text-lg font-bold text-white md:text-xl"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 text-xs leading-6 text-white/90 md:text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.subtitle}
                    </p>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#kontak"
            className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#ff5a9f_0%,#ff7bb7_48%,#ffa3c8_100%)] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(236,72,153,0.24)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105 hover:shadow-[0_0_35px_rgba(236,72,153,0.26),0_26px_55px_rgba(236,72,153,0.32)]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Pesan Sekarang
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
