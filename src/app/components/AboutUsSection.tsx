import { motion, useInView } from "motion/react";
import { Check, Lightbulb, Rocket, Target } from "lucide-react";
import { useRef } from "react";

const highlightPoints = [
  "Mengurangi limbah pangan",
  "Camilan sehat dan inovatif",
  "Warna alami tanpa pewarna buatan",
  "Mendukung gaya hidup sehat",
];

const highlights = [
  {
    icon: Target,
    title: "Visi",
    description:
      "Menjadi brand camilan sehat berbahan inovatif yang bernilai ekonomi tinggi dan ramah lingkungan.",
  },
  {
    icon: Rocket,
    title: "Misi",
    description:
      "Mengolah kulit buah naga menjadi produk pangan inovatif, sehat, dan menarik bagi masyarakat modern.",
  },
  {
    icon: Lightbulb,
    title: "Noble Purpose",
    description:
      "Menciptakan usaha berkelanjutan yang memberi manfaat bagi konsumen sekaligus lingkungan.",
  },
];

export default function AboutUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="tentang-kami"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9fb_0%,#fff0f5_35%,#fef5ec_100%)] py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-6%] top-24 h-80 w-80 rounded-full bg-pink-200/45 blur-3xl" />
        <div className="absolute right-[-10%] top-32 h-96 w-96 rounded-full bg-fuchsia-200/35 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl" />
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, index % 2 === 0 ? -14 : 16, 0],
              opacity: [0.14, 0.32, 0.14],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.25,
            }}
            className="absolute rounded-full border border-white/35 bg-white/18 backdrop-blur-sm"
            style={{
              width: `${18 + (index % 4) * 16}px`,
              height: `${18 + (index % 4) * 16}px`,
              left: `${6 + index * 9}%`,
              top: `${12 + (index % 5) * 14}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span
            className="mb-4 inline-flex rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Tentang Kami
          </span>
          <h2
            className="mb-5 text-5xl font-bold text-[#551438] md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tentang Kami
          </h2>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[36px] border border-white/65 bg-white/58 p-8 shadow-[0_32px_90px_rgba(236,72,153,0.12)] backdrop-blur-xl md:p-10"
          >
            <div
              className="space-y-6 text-lg leading-8 text-[#6c4a5e]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <p>
                Selama ini banyak orang hanya memanfaatkan daging buah naga, sementara kulitnya
                sering dianggap limbah dan langsung dibuang. Padahal, kulit buah naga memiliki
                kandungan serat, vitamin C, antioksidan, dan senyawa alami yang bermanfaat bagi
                kesehatan.
              </p>
              <p>
                <span className="font-semibold text-[#c33478]">NAGYOZA</span> hadir sebagai
                inovasi camilan sehat berupa gyoza dan saus berbahan kulit buah naga,
                menghadirkan produk yang lezat, bernilai gizi, ramah lingkungan, dan memiliki
                nilai ekonomi tinggi.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="mb-1">
                <p
                  className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-500"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Highlight Point
                </p>
              </div>
              {highlightPoints.map((mission, index) => (
                <motion.div
                  key={mission}
                  initial={{ opacity: 0, x: -18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.18 + index * 0.08 }}
                  className="flex items-start gap-4 rounded-[24px] border border-pink-100 bg-[#fff7fb] px-5 py-4"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white">
                    <Check className="h-4 w-4" />
                  </div>
                  <p
                    className="text-base leading-7 text-[#744860]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {mission}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[32px] border border-white/65 bg-white/60 p-3 shadow-[0_24px_70px_rgba(236,72,153,0.14)] backdrop-blur-xl sm:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1615485925873-3c6c4f4c52f0?auto=format&fit=crop&w=1200&q=80"
                  alt="Bahan premium NAGYOZA"
                  className="h-[320px] w-full rounded-[24px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="rounded-[32px] border border-white/65 bg-white/70 p-7 shadow-[0_18px_50px_rgba(236,72,153,0.12)] backdrop-blur-xl">
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-pink-500"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Sustainability
                </p>
                <p
                  className="text-lg leading-8 text-[#6b475a]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Mengangkat nilai kulit buah naga menjadi bahan inovasi yang layak dikembangkan
                  sebagai produk pangan modern.
                </p>
              </div>
              <div className="rounded-[32px] border border-white/65 bg-gradient-to-br from-[#ff5b9d] via-[#ff8ac2] to-[#ffefe6] p-7 text-white shadow-[0_18px_55px_rgba(236,72,153,0.2)]">
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/80"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Business Value
                </p>
                <p
                  className="text-lg leading-8"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Produk yang menarik secara visual, kuat secara cerita, dan relevan untuk pasar
                  yang peduli kesehatan dan inovasi.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.25 + index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-[30px] border border-white/70 bg-white/68 p-7 shadow-[0_20px_55px_rgba(236,72,153,0.12)] backdrop-blur-xl"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white shadow-lg shadow-pink-300/35">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3
                      className="mb-3 text-2xl font-bold text-[#4f1735]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-base leading-7 text-[#715066]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.description}
                    </p>
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
