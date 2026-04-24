import { motion, useInView } from "motion/react";
import { Check, Lightbulb, Rocket, Target } from "lucide-react";
import { useRef } from "react";

const missions = [
  "Menghadirkan camilan sehat yang unik, lezat, dan bernilai gizi tambahan.",
  "Mengoptimalkan pemanfaatan kulit buah naga untuk mengurangi food waste.",
  "Membangun brand usaha mahasiswa yang profesional, berkelanjutan, dan layak dikembangkan.",
  "Mendorong gaya hidup sehat melalui inovasi pangan yang menarik bagi pasar muda.",
];

const highlights = [
  {
    icon: Target,
    title: "Visi",
    description:
      "Menjadi brand camilan sehat inovatif yang dikenal karena kualitas premium, tampilan menarik, dan kontribusinya terhadap pengurangan limbah pangan.",
  },
  {
    icon: Rocket,
    title: "Misi",
    description:
      "Mengubah potensi limbah kulit buah naga menjadi produk yang bernilai ekonomi tinggi, relevan bagi pasar, dan siap menjadi usaha nyata.",
  },
  {
    icon: Lightbulb,
    title: "Noble Purpose",
    description:
      "Menyatukan kesehatan, kreativitas, dan keberlanjutan dalam satu produk yang memberi manfaat bagi konsumen sekaligus lingkungan.",
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
            Dari Limbah yang Sering Diabaikan, Menjadi Produk yang Punya Nilai Tinggi
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
                Selama ini banyak orang hanya menikmati daging buah naga, sementara kulitnya
                langsung dibuang dan dianggap sebagai limbah yang tidak bernilai. Padahal, kulit
                buah naga masih memiliki kandungan nutrisi tinggi seperti serat, vitamin C,
                antioksidan, betasianin, flavonoid, dan senyawa fenolik yang sangat bermanfaat
                bagi kesehatan tubuh.
              </p>
              <p>
                Kurangnya pemanfaatan limbah pangan ini menjadi peluang inovasi yang bernilai
                ekonomi sekaligus mendukung pengurangan food waste di masyarakat.
              </p>
              <p>
                <span className="font-semibold text-[#c33478]">NAGYOZA</span> hadir sebagai solusi
                inovatif di bidang food and beverage dengan menghadirkan gyoza berbahan tambahan
                kulit buah naga pada adonan kulit serta saus pelengkapnya. Produk ini menawarkan
                camilan sehat yang unik, lezat, memiliki warna alami tanpa pewarna buatan, serta
                nilai gizi tambahan yang tidak dimiliki gyoza biasa.
              </p>
              <p>
                Usaha ini dikembangkan oleh tim mahasiswa sebagai bentuk kreativitas, inovasi,
                kewirausahaan berkelanjutan, serta dukungan terhadap gaya hidup sehat dan ramah
                lingkungan.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {missions.map((mission, index) => (
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
