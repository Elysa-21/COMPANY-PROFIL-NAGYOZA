import { motion, useInView } from "motion/react";
import {
  BadgeCheck,
  CircleDollarSign,
  HeartPulse,
  Leaf,
  MessageCircleHeart,
  PackageCheck,
  QrCode,
  ShieldCheck,
  Sparkles,
  Soup,
  Stars,
  Trees,
} from "lucide-react";
import { useRef } from "react";

const advantages = [
  {
    icon: Sparkles,
    title: "Warna alami tanpa pewarna buatan",
    description: "Tampilan pink khas buah naga hadir secara natural dan memperkuat identitas produk.",
  },
  {
    icon: Leaf,
    title: "Tinggi serat",
    description: "Kulit buah naga memberi nilai tambah serat untuk mendukung pola makan yang lebih baik.",
  },
  {
    icon: ShieldCheck,
    title: "Kaya antioksidan",
    description: "Mengandung senyawa yang membantu melindungi tubuh dari radikal bebas.",
  },
  {
    icon: BadgeCheck,
    title: "Mengandung vitamin C",
    description: "Menjadi salah satu nilai nutrisi tambahan yang relevan bagi daya tahan tubuh.",
  },
  {
    icon: HeartPulse,
    title: "Baik untuk pencernaan",
    description: "Serat dari kulit buah naga membantu mendukung sistem pencernaan secara alami.",
  },
  {
    icon: Stars,
    title: "Mendukung daya tahan tubuh",
    description: "Inovasi produk menggabungkan rasa lezat dengan manfaat kesehatan tambahan.",
  },
  {
    icon: Soup,
    title: "Saus khas berbahan kulit buah naga",
    description: "Memberi karakter rasa yang unik dan menjadi pembeda kuat dibanding produk serupa.",
  },
  {
    icon: Trees,
    title: "Ramah lingkungan",
    description: "Memanfaatkan bahan yang kerap terbuang untuk mendukung konsep usaha berkelanjutan.",
  },
  {
    icon: Sparkles,
    title: "Inovasi unik dan berbeda",
    description: "NAGYOZA tampil dengan cerita produk yang kuat, visual menarik, dan positioning premium.",
  },
  {
    icon: CircleDollarSign,
    title: "Harga terjangkau",
    description: "Menawarkan pengalaman produk yang premium dengan harga yang tetap bersahabat.",
  },
  {
    icon: QrCode,
    title: "Kemasan premium dengan QR Code",
    description: "Mendukung branding modern, akses informasi produk, dan pengalaman pelanggan yang rapi.",
  },
  {
    icon: MessageCircleHeart,
    title: "Sistem feedback pelanggan",
    description: "Brand dibangun dengan ruang evaluasi agar produk terus berkembang bersama konsumen.",
  },
];

export default function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="keunggulan"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff7fb_0%,#ffe7f1_35%,#f8ddf7_78%,#fff7ef_100%)] py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-10 h-96 w-96 rounded-full bg-pink-300/28 blur-3xl" />
        <div className="absolute right-[-5%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span
            className="mb-4 inline-flex rounded-full border border-pink-200 bg-white/85 px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Keunggulan
          </span>
          <h2
            className="mb-5 text-5xl font-bold text-[#54153a] md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kombinasi Nilai Produk dan Manfaat Kulit Buah Naga dalam Satu Brand
          </h2>
          <p
            className="text-lg leading-8 text-[#765161]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Keunggulan NAGYOZA dirancang untuk menunjukkan diferensiasi yang jelas: enak, sehat,
            menarik secara visual, ramah lingkungan, dan siap dibawa ke pasar dengan positioning
            premium.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="rounded-[30px] border border-white/75 bg-white/68 p-7 shadow-[0_20px_60px_rgba(236,72,153,0.12)] backdrop-blur-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 text-white shadow-[0_14px_35px_rgba(219,39,119,0.28)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className="mb-3 text-2xl font-bold text-[#4f1734]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base leading-7 text-[#745263]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="mt-10 rounded-[34px] border border-white/75 bg-gradient-to-r from-[#ff5ca1] via-[#ff81bf] to-[#ffefe7] p-8 shadow-[0_28px_75px_rgba(236,72,153,0.18)]"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p
                className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Why It Matters
              </p>
              <h3
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                NAGYOZA bukan hanya makanan, tetapi ide usaha yang kuat untuk di-branding.
              </h3>
            </div>
            <p
              className="text-lg leading-8 text-white/92"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Produk ini menyatukan cerita keberlanjutan, inovasi bahan baku, manfaat kesehatan,
              harga yang tetap terjangkau, dan pengalaman konsumen yang modern melalui kemasan
              premium serta sistem feedback yang terbuka.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
