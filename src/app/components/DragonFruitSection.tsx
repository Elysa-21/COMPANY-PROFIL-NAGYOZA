import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Leaf, Award, Heart } from "lucide-react";

export default function DragonFruitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-24 bg-gradient-to-b from-purple-800 to-fuchsia-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Fun Fact Kulit Buah Naga
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Bukan sekadar gyoza biasa. NAGYOZA menghadirkan inovasi revolusioner dengan memanfaatkan kulit buah naga yang kaya akan nutrisi dan serat, menciptakan pengalaman kuliner yang sehat dan lezat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1635843110565-cb35d1c03d86?w=800"
              alt="Dragon Fruit"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border-4 border-white/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500/20 p-4 rounded-xl">
                  <Leaf className="w-8 h-8 text-pink-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Kaya Nutrisi</h3>
                  <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Kulit buah naga mengandung antioksidan tinggi, vitamin C, dan serat yang baik untuk pencernaan dan sistem kekebalan tubuh.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-fuchsia-500/20 p-4 rounded-xl">
                  <Award className="w-8 h-8 text-fuchsia-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Inovasi Berkelanjutan</h3>
                  <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Memanfaatkan limbah kulit buah naga yang biasanya terbuang, menjadi produk bernilai tinggi dan ramah lingkungan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-pink-400/20 p-4 rounded-xl">
                  <Heart className="w-8 h-8 text-pink-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Rasa yang Unik</h3>
                  <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Kombinasi sempurna antara tekstur kenyal kulit buah naga dengan kelezatan isian gyoza premium kami.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
