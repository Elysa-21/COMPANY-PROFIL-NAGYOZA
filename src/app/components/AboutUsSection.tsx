import { motion, useInView } from "motion/react";
import { Check } from "lucide-react";
import { useRef } from "react";
import AmbientLayer from "./AmbientLayer";

const highlightPoints = [
  "Mengurangi limbah pangan",
  "Camilan sehat dan inovatif",
  "Warna alami tanpa pewarna buatan",
  "Mendukung gaya hidup sehat",
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
      <AmbientLayer variant="section" />
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

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl"
          >
            <div
              className="space-y-6 text-lg leading-8 text-[#6c4a5e] text-justify"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <p>
                Selama ini banyak orang hanya memanfaatkan daging buah naga, sementara kulitnya
                sering dianggap limbah dan langsung dibuang. Padahal, kulit buah naga memiliki
                kandungan serat, vitamin C, dan antioksidan yang bermanfaat bagi kesehatan.
              </p>
              <p>
                NAGYOZA hadir sebagai inovasi camilan sehat dengan memanfaatkan kulit buah naga
                menjadi gyoza dan saus yang lezat, bernilai gizi, serta ramah lingkungan.
              </p>
              <p className="text-base leading-7 text-[#856474]">
                 Bukan sekadar camilan, tetapi inovasi pangan bernilai tinggi yang menggabungkan kesehatan, keberlanjutan, dan cita rasa premium.
              </p>
            </div>

            <div className="mt-10 grid gap-3.5">
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
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="flex items-center gap-4 rounded-[22px] border border-pink-100/70 bg-white/65 px-5 py-4 shadow-[0_12px_32px_rgba(236,72,153,0.06)] backdrop-blur-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/90 text-white">
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
            whileHover={{ y: -8, scale: 1.01 }}
            className="relative"
          >
            <div className="absolute -right-6 -top-6 hidden h-28 w-28 rounded-full bg-pink-200/35 blur-3xl lg:block" />
            <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white/60 p-4 shadow-[0_30px_90px_rgba(236,72,153,0.14)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[26px]">
                <img
                  src="/assets/foto-produk/foto kulit buah.png"
                  alt="Kulit buah naga estetik"
                  className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 rounded-[34px] border border-white/75 bg-white/64 p-8 shadow-[0_24px_70px_rgba(236,72,153,0.1)] backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-pink-500"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Visi
              </p>
              <p
                className="text-base leading-8 text-[#6e4b5f]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Menjadi brand camilan sehat berbahan inovatif yang bernilai ekonomi tinggi dan
                ramah lingkungan.
              </p>
            </div>
            <div>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-pink-500"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Misi
              </p>
              <p
                className="text-base leading-8 text-[#6e4b5f]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Mengolah kulit buah naga menjadi produk pangan inovatif, sehat, dan menarik bagi
                masyarakat modern.
              </p>
            </div>
            <div>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-pink-500"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Noble Purpose
              </p>
              <p
                className="text-base leading-8 text-[#6e4b5f]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Menciptakan usaha berkelanjutan yang memberi manfaat bagi konsumen sekaligus
                lingkungan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
