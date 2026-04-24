import { motion, useInView } from "motion/react";
import { Box, PlayCircle, Sparkles } from "lucide-react";
import { useRef } from "react";

const productCards = [
  {
    title: "Gyoza Kulit Buah Naga",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    description:
      "Kulit gyoza dengan sentuhan olahan kulit buah naga menghadirkan warna alami yang cantik, tekstur lembut, dan tampilan premium tanpa pewarna buatan.",
  },
  {
    title: "Saus Kulit Buah Naga",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    description:
      "Saus khas NAGYOZA memberikan aksen rasa yang unik, segar, dan berbeda, sekaligus memperkuat identitas produk sebagai camilan inovatif.",
  },
];

const gallery = [
  {
    title: "Foto Produk Premium",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Foto Close Up Produk",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kemasan Produk",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="produk"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff0f6_0%,#ffe3ef_35%,#f7ddf7_75%,#fff6ef_100%)] py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-pink-300/35 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="absolute bottom-12 left-1/3 h-56 w-56 rounded-full bg-amber-100/35 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span
            className="mb-4 inline-flex rounded-full border border-pink-200 bg-white/85 px-4 py-2 text-sm font-semibold text-pink-700 shadow-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Produk
          </span>
          <h2
            className="mb-5 text-5xl font-bold text-[#59173d] md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Signature Product yang Siap Tampil Sebagai Brand Premium
          </h2>
          <p
            className="text-lg leading-8 text-[#775162]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Produk NAGYOZA merupakan camilan inovatif berupa gyoza dengan tambahan olahan kulit
            buah naga pada adonan kulitnya sehingga menghasilkan warna alami khas yang menarik
            tanpa pewarna buatan. Dipadukan dengan isian ayam gurih, tekstur lembut, rasa creamy
            dari keju, serta saus khas berbahan kulit buah naga yang memberikan cita rasa unik dan
            berbeda dari gyoza pada umumnya.
          </p>
          <p
            className="mt-5 text-lg leading-8 text-[#775162]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Produk ini tidak hanya menghadirkan rasa yang lezat, tetapi juga memberikan manfaat
            kesehatan melalui kandungan nutrisi tambahan dari kulit buah naga yang kaya serat dan
            antioksidan.
          </p>
          <div className="mt-8 inline-flex rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-6 py-3 text-lg font-semibold text-white shadow-[0_18px_45px_rgba(219,39,119,0.28)]">
            Rp15.000 / porsi
          </div>
        </motion.div>

        <div className="mb-10 grid gap-6 lg:grid-cols-2">
          {productCards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[34px] border border-white/70 bg-white/65 p-3 shadow-[0_24px_80px_rgba(236,72,153,0.14)] backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-[28px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(76,15,53,0.08),rgba(76,15,53,0.58))]" />
                <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/30 bg-white/15 p-5 backdrop-blur-md">
                  <h3
                    className="mb-3 text-3xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base leading-7 text-white/90"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-10 rounded-[36px] border border-white/75 bg-white/60 p-4 shadow-[0_28px_85px_rgba(236,72,153,0.16)] backdrop-blur-xl"
        >
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1600&q=80"
                alt="Video promosi produk NAGYOZA"
                className="h-full min-h-[360px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(90,17,61,0.28),rgba(90,17,61,0.68))]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md">
                  <PlayCircle className="h-12 w-12 fill-white/30" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,244,249,0.92))] p-8">
              <div>
                <p
                  className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-600"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <Sparkles className="h-4 w-4" />
                  Video Produk Promosi
                </p>
                <h3
                  className="mb-4 text-3xl font-bold text-[#571738]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Konsep visual promosi dibuat seperti startup food brand premium.
                </h3>
                <p
                  className="text-base leading-8 text-[#755263]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Area ini menampilkan hero reel produk untuk kebutuhan branding. Desain player
                  dibuat sinematik agar website terasa hidup, modern, dan layak dipresentasikan.
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-[24px] border border-pink-100 bg-[#fff8fb]">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/ScMzIvxBSi4?rel=0"
                  title="Video Produk Promosi NAGYOZA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[32px] border border-white/70 bg-white/65 p-3 shadow-[0_20px_65px_rgba(236,72,153,0.13)] backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-[24px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(88,18,61,0.02),rgba(88,18,61,0.58))]" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/18 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  <Box className="h-4 w-4" />
                  {item.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
