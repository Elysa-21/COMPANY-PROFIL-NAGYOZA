import { motion, useInView } from "motion/react";
import {
  BadgeDollarSign,
  Droplets,
  FlaskConical,
  HeartPulse,
  Leaf,
  ShieldPlus,
  Sparkles,
  Stars,
} from "lucide-react";
import { useRef } from "react";

const productAdvantages = [
  {
    icon: Droplets,
    title: "Warna Alami",
    description:
      "Menggunakan warna alami dari kulit buah naga tanpa tambahan pewarna buatan.",
  },
  {
    icon: FlaskConical,
    title: "Inovasi Unik",
    description:
      "Produk inovatif yang memanfaatkan limbah kulit buah naga menjadi camilan bernilai tinggi.",
  },
  {
    icon: Sparkles,
    title: "Saus Khas",
    description:
      "Dilengkapi saus spesial berbahan kulit buah naga yang memberikan cita rasa unik dan berbeda.",
  },
  {
    icon: BadgeDollarSign,
    title: "Harga Terjangkau",
    description:
      "Produk berkualitas dengan harga yang ramah di kantong sehingga dapat dinikmati berbagai kalangan.",
  },
];

const nutrients = [
  {
    icon: ShieldPlus,
    title: "Vitamin C",
    description:
      "Membantu meningkatkan daya tahan tubuh dan menjaga kesehatan secara menyeluruh.",
  },
  {
    icon: Stars,
    title: "Antioksidan",
    description:
      "Melindungi sel tubuh dari radikal bebas dan membantu menjaga kesehatan kulit.",
  },
  {
    icon: Leaf,
    title: "Serat",
    description:
      "Membantu melancarkan pencernaan dan menjaga kesehatan sistem pencernaan.",
  },
  {
    icon: HeartPulse,
    title: "Betasianin",
    description:
      "Pigmen alami yang memberikan warna merah keunguan serta kaya manfaat bagi tubuh.",
  },
];

function SectionCardGrid({
  items,
  isInView,
  delayOffset,
}: {
  items: typeof productAdvantages;
  isInView: boolean;
  delayOffset: number;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: delayOffset + index * 0.08 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,244,249,0.72))] p-6 shadow-[0_20px_55px_rgba(236,72,153,0.1)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_28px_75px_rgba(236,72,153,0.16)]"
          >
            <div className="absolute inset-x-6 top-3 h-20 rounded-full bg-gradient-to-r from-pink-200/65 via-fuchsia-200/55 to-purple-200/45 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff5fa5] via-[#ff84bf] to-[#a96bff] text-white shadow-[0_14px_35px_rgba(219,39,119,0.22)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3
                className="mb-3 text-2xl font-bold text-[#53173a]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-7 text-[#745264] md:text-[15px]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.description}
              </p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export default function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="keunggulan"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9fb_0%,#ffe9f2_32%,#f7e3fb_72%,#fff8f1_100%)] py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-6%] top-10 h-96 w-96 rounded-full bg-pink-300/25 blur-3xl" />
        <div className="absolute right-[-8%] top-1/4 h-[30rem] w-[30rem] rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-violet-200/20 blur-3xl" />
        <div className="absolute left-[8%] top-[18%] h-10 w-10 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm" />
        <div className="absolute right-[12%] top-[56%] h-16 w-16 rounded-full border border-pink-200/60 bg-white/15 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-16 max-w-3xl text-center"
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
            Keunggulan & Kandungan Nutrisi
          </h2>
          <p
            className="text-lg leading-8 text-[#765161]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            NAGYOZA menghadirkan keunggulan produk yang dipadukan dengan kandungan nutrisi alami
            dari kulit buah naga.
          </p>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-[36px] border border-white/75 bg-white/45 p-7 shadow-[0_28px_85px_rgba(236,72,153,0.12)] backdrop-blur-xl md:p-9"
          >
            <div className="mb-8 flex flex-col gap-4 border-b border-pink-100/70 pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                <h3
                  className="text-3xl font-bold text-[#571739] md:text-4xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Keunggulan Produk
                </h3>
              </div>
            </div>

            <SectionCardGrid items={productAdvantages} isInView={isInView} delayOffset={0.14} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="rounded-[36px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,241,247,0.72))] p-7 shadow-[0_28px_85px_rgba(168,85,247,0.1)] backdrop-blur-xl md:p-9"
          >
            <div className="mb-8 flex flex-col gap-4 border-b border-pink-100/70 pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                 <h3
                  className="text-3xl font-bold text-[#571739] md:text-4xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Kandungan Nutrisi
                </h3>
              </div>
            </div>

            <SectionCardGrid items={nutrients} isInView={isInView} delayOffset={0.24} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
