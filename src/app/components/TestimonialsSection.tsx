import { motion, useInView } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Alya Ramadhani",
    role: "Mahasiswa & Pembeli",
    comment:
      "Rasanya enak, tampilannya cantik, dan sausnya benar-benar beda. Buat presentasi usaha pun produk ini kelihatan sudah matang dan premium.",
    taste: "4.9/5",
    packaging: "4.8/5",
    buying: "Fast response dan mudah dipesan",
  },
  {
    name: "Rizky Maulana",
    role: "Pecinta Kuliner",
    comment:
      "Saya suka karena konsepnya unik. Warna gyozanya natural, rasanya gurih-creamy, dan ada nilai sehat yang terasa relevan, bukan gimmick.",
    taste: "4.8/5",
    packaging: "4.9/5",
    buying: "Packaging rapi dan terlihat profesional",
  },
  {
    name: "Nadia Putri",
    role: "Pengunjung Booth Kampus",
    comment:
      "Begitu lihat tampilannya langsung tertarik. Setelah coba, ternyata teksturnya lembut, sausnya khas, dan keseluruhan experience-nya berkelas.",
    taste: "5/5",
    packaging: "4.8/5",
    buying: "Pengalaman beli menyenangkan",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="testimoni"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9fb_0%,#ffeef5_32%,#fde1f1_70%,#fff6ee_100%)] py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-8 top-16 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute right-[-6%] top-20 h-96 w-96 rounded-full bg-fuchsia-300/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-amber-100/30 blur-3xl" />
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
            Testimoni
          </span>
          <h2
            className="mb-5 text-5xl font-bold text-[#541338] md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pengalaman Pelanggan yang Menguatkan Citra Brand
          </h2>
          <p
            className="text-lg leading-8 text-[#765160]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Review dirancang tampil elegan seperti brand besar, menonjolkan kepuasan rasa,
            kemasan, dan pengalaman membeli secara keseluruhan.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-[32px] border border-white/75 bg-white/68 p-8 shadow-[0_22px_70px_rgba(236,72,153,0.12)] backdrop-blur-xl"
            >
              <div className="absolute right-7 top-7 text-pink-200">
                <Quote className="h-12 w-12" />
              </div>

              <div className="mb-6">
                <h3
                  className="text-2xl font-bold text-[#4f1835]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-sm uppercase tracking-[0.2em] text-pink-500"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.role}
                </p>
              </div>

              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-5 w-5 fill-[#ffb545] text-[#ffb545]"
                  />
                ))}
              </div>

              <p
                className="mb-7 text-base leading-8 text-[#72505f]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                "{item.comment}"
              </p>

              <div className="grid gap-3">
                <div className="rounded-[20px] bg-[#fff6fa] px-4 py-3">
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Kepuasan Rasa
                  </p>
                  <p
                    className="text-base text-[#5f2747]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.taste}
                  </p>
                </div>
                <div className="rounded-[20px] bg-[#fff6fa] px-4 py-3">
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Kepuasan Kemasan
                  </p>
                  <p
                    className="text-base text-[#5f2747]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.packaging}
                  </p>
                </div>
                <div className="rounded-[20px] bg-[#fff6fa] px-4 py-3">
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-500"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Pengalaman Membeli
                  </p>
                  <p
                    className="text-base text-[#5f2747]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.buying}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="mt-10 rounded-[34px] border border-white/75 bg-gradient-to-r from-[#ff5ea2] via-[#ff87c1] to-[#f7d9ec] p-8 shadow-[0_24px_75px_rgba(236,72,153,0.16)]"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p
                className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/80"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Brand Trust
              </p>
              <p
                className="text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                4.9/5
              </p>
            </div>
            <p
              className="text-lg leading-8 text-white/92"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Pelanggan menyukai kombinasi rasa gurih, tampilan premium, dan cerita produk yang
              kuat.
            </p>
            <p
              className="text-lg leading-8 text-white/92"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Kemasan dan pengalaman membeli membantu NAGYOZA tampil lebih profesional dan siap
              membangun loyalitas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
