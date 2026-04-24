import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Sparkles, Activity, Brain, Zap, Heart } from "lucide-react";

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Shield,
      title: "Antioksidan Tinggi",
      description: "Melindungi sel tubuh dari radikal bebas dan penuaan dini",
      color: "from-pink-500 to-fuchsia-500"
    },
    {
      icon: Activity,
      title: "Kaya Serat",
      description: "Membantu pencernaan dan menjaga kesehatan sistem metabolisme",
      color: "from-fuchsia-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Rendah Kalori",
      description: "Cocok untuk diet sehat tanpa mengorbankan kelezatan",
      color: "from-pink-600 to-pink-400"
    },
    {
      icon: Brain,
      title: "Vitamin C",
      description: "Meningkatkan daya tahan tubuh dan kesehatan kulit",
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Energi Alami",
      description: "Memberikan energi yang tahan lama untuk aktivitas harian",
      color: "from-purple-500 to-fuchsia-500"
    },
    {
      icon: Sparkles,
      title: "Nutrisi Lengkap",
      description: "Mengandung protein, vitamin, dan mineral esensial",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section ref={ref} id="benefits" className="py-24 bg-gradient-to-b from-purple-950 via-fuchsia-950 to-pink-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Manfaat & Kandungan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Setiap gigitan NAGYOZA memberikan nutrisi yang dibutuhkan tubuh Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all h-full">
                  <div className={`bg-gradient-to-br ${benefit.color} p-4 rounded-xl inline-block mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>{benefit.description}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 p-12 rounded-3xl text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            100% Bahan Alami
          </h3>
          <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Tanpa pengawet buatan, tanpa pewarna sintetis, hanya kebaikan alami dari buah naga dan bahan pilihan premium
          </p>
        </motion.div>
      </div>
    </section>
  );
}
