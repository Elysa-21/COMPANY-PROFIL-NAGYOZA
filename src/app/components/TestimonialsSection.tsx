import { motion, useInView } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Alya Ramadhani",
    role: "Mahasiswa & Pembeli",
    quote: "Rasanya enak dan tampilannya premium.",
    initials: "AR",
  },
  {
    name: "Rizky Maulana",
    role: "Pecinta Kuliner",
    quote: "Unik, gurih, dan beda dari yang lain.",
    initials: "RM",
  },
  {
    name: "Nadia Putri",
    role: "Pengunjung Booth",
    quote: "Tampilan menarik dan rasanya bikin nagih.",
    initials: "NP",
  },
  {
    name: "Dimas Pratama",
    role: "Pembeli Pertama",
    quote: "Kemasan rapi dan rasanya langsung berkesan.",
    initials: "DP",
  },
  {
    name: "Citra Lestari",
    role: "Mahasiswa",
    quote: "Warnanya cantik, rasanya gurih, dan unik.",
    initials: "CL",
  },
  {
    name: "Fajar Nugroho",
    role: "Pecinta Camilan",
    quote: "Sausnya khas dan produk terasa berbeda.",
    initials: "FN",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="testimoni"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9fb_0%,#fff0f6_34%,#fde4f3_68%,#fff7ef_100%)] py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-4%] top-16 h-80 w-80 rounded-full bg-pink-300/24 blur-3xl" />
        <div className="absolute right-[-6%] top-24 h-96 w-96 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-rose-200/28 blur-3xl" />
        <div className="absolute left-[10%] top-[22%] h-10 w-10 rounded-full border border-white/45 bg-white/20 backdrop-blur-sm" />
        <div className="absolute right-[14%] top-[58%] h-16 w-16 rounded-full border border-pink-200/70 bg-white/15 backdrop-blur-sm" />
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
            Pengalaman Pelanggan
          </h2>
          <p
            className="text-lg leading-8 text-[#765160]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Pendapat pelanggan yang merasakan langsung kualitas NAGYOZA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="relative"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <p
              className="text-sm font-medium text-[#8a6375]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Geser ke samping untuk melihat lebih banyak testimoni pelanggan.
            </p>
            <div className="hidden rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-pink-500 shadow-sm backdrop-blur-sm md:inline-flex">
              Swipe Horizontal
            </div>
          </div>

          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative min-w-[290px] snap-start overflow-hidden rounded-[32px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,243,248,0.7))] p-7 shadow-[0_20px_60px_rgba(236,72,153,0.11)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_28px_80px_rgba(236,72,153,0.16)] md:min-w-[340px]"
              >
                <div className="absolute inset-x-8 top-3 h-20 rounded-full bg-gradient-to-r from-pink-200/60 via-fuchsia-200/55 to-violet-200/45 opacity-80 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ff69ab] via-[#ff8fc2] to-[#b37cff] text-sm font-bold text-white shadow-[0_12px_30px_rgba(236,72,153,0.22)]">
                        {item.initials}
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold text-[#4f1835]"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {item.name}
                        </h3>
                        <p
                          className="text-xs uppercase tracking-[0.22em] text-pink-500"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/70 bg-white/55 p-3 text-pink-300 shadow-[0_10px_25px_rgba(236,72,153,0.08)] backdrop-blur-sm">
                      <Quote className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-[#ffb545] text-[#ffb545]" />
                    ))}
                  </div>

                  <p
                    className="text-lg leading-8 text-[#6f4d5c]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    "{item.quote}"
                  </p>
                </div>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="relative flex min-w-[290px] snap-start items-center justify-center overflow-hidden rounded-[34px] border border-white/75 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(255,236,245,0.82),rgba(245,226,255,0.78))] px-10 py-9 text-center shadow-[0_24px_80px_rgba(236,72,153,0.16)] backdrop-blur-xl md:min-w-[340px]"
            >
              <div className="absolute left-1/2 top-1/2 h-32 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-300/35 via-fuchsia-300/30 to-violet-300/30 blur-3xl" />
              <div className="relative">
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-pink-500"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Rating Pelanggan
                </p>
                <p
                  className="bg-gradient-to-r from-[#ff5ea2] via-[#d946ef] to-[#8b5cf6] bg-clip-text text-6xl font-bold text-transparent md:text-7xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  4.9/5
                </p>
                <div className="mt-4 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 fill-[#ffb545] text-[#ffb545]" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
