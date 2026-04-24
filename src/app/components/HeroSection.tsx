import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "./Navbar";
import BackgroundDecorations from "./BackgroundDecorations";
import Logo from "./Logo";

const heroStats = [
  { label: "Warna Produk", value: "100% Alami" },
  { label: "Harga Mulai", value: "Rp 15.000" },
  { label: "Nilai Produk", value: "Sehat + Premium" },
];

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#fff8fb_0%,#ffe5f1_18%,#ffd5ee_37%,#f7d7f9_57%,#fef4eb_100%)]"
    >
      <Navbar />
      <BackgroundDecorations />

      <div className="absolute inset-0 opacity-90">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-pink-300/35 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-emerald-200/25 blur-3xl" />
      </div>

      <div className="absolute inset-0">
        {Array.from({ length: 14 }).map((_, index) => (
          <motion.div
            key={`ring-${index}`}
            animate={{
              y: [0, index % 2 === 0 ? -20 : 18, 0],
              opacity: [0.12, 0.28, 0.12],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.18,
            }}
            className="absolute rounded-full border border-white/30"
            style={{
              width: `${38 + (index % 4) * 26}px`,
              height: `${38 + (index % 4) * 26}px`,
              left: `${4 + index * 7}%`,
              top: `${10 + (index % 6) * 12}%`,
            }}
          />
        ))}
      </div>

      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, index % 2 === 0 ? -24 : 24, 0],
            x: [0, index % 3 === 0 ? 18 : -14, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
          className="absolute rounded-full border border-white/40 bg-white/25 backdrop-blur-sm"
          style={{
            width: `${24 + (index % 4) * 18}px`,
            height: `${24 + (index % 4) * 18}px`,
            left: `${8 + index * 7}%`,
            top: `${14 + (index % 5) * 14}%`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-36">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/65 px-5 py-2 shadow-[0_12px_35px_rgba(236,72,153,0.14)] backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-pink-600" />
              <span
                className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Premium Student Food Brand
              </span>
            </div>

            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_22px_60px_rgba(236,72,153,0.12)] backdrop-blur-xl">
                <Logo className="h-20 w-auto md:h-24" />
              </div>
              <div>
                <p
                  className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b94174]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  NAGYOZA
                </p>
                <p
                  className="text-base text-[#7c4c63]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Inovasi gyoza dan saus berbahan kulit buah naga
                </p>
              </div>
            </div>

            <h1
              className="mb-4 text-6xl font-bold leading-[0.95] text-[#4f1235] md:text-8xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              NAGYOZA
            </h1>
            <h2
              className="mb-6 text-2xl font-semibold text-[#8a2f61] md:text-4xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Gyoza Sehat dari Kulit Buah Naga
            </h2>
            <p
              className="max-w-2xl text-lg leading-8 text-[#6d4b5d] md:text-xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Inovasi camilan sehat, lezat, bergizi, dan ramah lingkungan dari
              pemanfaatan kulit buah naga yang selama ini sering terbuang sia-sia.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("#kontak")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_20px_55px_rgba(219,39,119,0.32)] transition-transform duration-300 hover:scale-[1.02]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Pesan Sekarang
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("#produk")}
                className="rounded-full border border-white/65 bg-white/60 px-8 py-4 text-lg font-semibold text-[#792451] shadow-[0_18px_45px_rgba(236,72,153,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/80"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Lihat Produk
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.12 }}
                  className="rounded-[28px] border border-white/60 bg-white/58 p-5 shadow-[0_18px_50px_rgba(236,72,153,0.12)] backdrop-blur-xl"
                >
                  <p
                    className="mb-1 text-sm uppercase tracking-[0.24em] text-pink-500"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-2xl font-bold text-[#59153c]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -right-10 top-8 hidden h-32 w-32 rounded-full border border-white/50 bg-white/25 lg:block" />
            <div className="absolute -left-12 bottom-20 hidden h-24 w-24 rounded-full bg-emerald-200/40 blur-xl lg:block" />

            <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[36px] border border-white/55 bg-white/50 p-3 shadow-[0_30px_90px_rgba(236,72,153,0.18)] backdrop-blur-2xl"
              >
                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80"
                    alt="Premium gyoza NAGYOZA"
                    className="h-[470px] w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(71,18,53,0.06),rgba(71,18,53,0.62))]" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/30 bg-white/18 p-5 backdrop-blur-md">
                    <p
                      className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-pink-100"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Signature Product
                    </p>
                    <h3
                      className="text-3xl font-bold text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Gyoza premium dengan tampilan natural pink yang mencuri perhatian.
                    </h3>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col gap-5">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-[32px] border border-white/60 bg-white/60 p-3 shadow-[0_22px_70px_rgba(236,72,153,0.16)] backdrop-blur-xl"
                >
                  <div className="relative overflow-hidden rounded-[24px]">
                    <img
                      src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1000&q=80"
                      alt="Buah naga premium"
                      className="h-[226px] w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(83,18,60,0.04),rgba(83,18,60,0.5))]" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[32px] border border-white/55 bg-white/70 p-7 shadow-[0_18px_60px_rgba(236,72,153,0.14)] backdrop-blur-xl"
                >
                  <p
                    className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-pink-500"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Inovasi Produk
                  </p>
                  <p
                    className="text-lg leading-8 text-[#6a4257]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    NAGYOZA memadukan gyoza lezat, saus khas kulit buah naga, tampilan warna
                    alami, dan konsep ramah lingkungan dalam satu produk yang modern dan
                    berkarakter.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
