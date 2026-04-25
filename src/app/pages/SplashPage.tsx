import { motion } from "motion/react";
import { useEffect } from "react";

export default function SplashPage({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 h-full w-full overflow-hidden bg-[linear-gradient(135deg,#fff4fa_0%,#ffcae5_30%,#f2b7f1_58%,#6d2452_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.28),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(236,72,153,0.24),transparent_32%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.12),transparent_40%)]" />

      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: [0, 1.5, 1], rotate: 0 }}
        transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute right-20 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-pink-400/30 to-fuchsia-500/30 blur-3xl"
      />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: [0, 1.5, 1], rotate: 0 }}
        transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
        className="absolute bottom-20 left-20 h-60 w-60 rounded-full bg-gradient-to-br from-fuchsia-400/30 to-purple-500/30 blur-3xl"
      />

      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, index % 2 === 0 ? -24 : 24, 0],
            opacity: [0.12, 0.4, 0.12],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.22,
          }}
          className="absolute rounded-full border border-white/35 bg-white/15 backdrop-blur-sm"
          style={{
            width: `${16 + (index % 4) * 12}px`,
            height: `${16 + (index % 4) * 12}px`,
            left: `${5 + index * 9}%`,
            top: `${10 + (index % 5) * 14}%`,
          }}
        />
      ))}

      <div className="relative z-10 flex h-full items-center justify-center pt-16">
        <div className="text-center px-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.3
            }}
            className="mb-10"
          >
            <div className="relative inline-block rounded-[40px] border border-white/20 bg-white/10 px-10 py-8 shadow-[0_25px_80px_rgba(109,36,82,0.18)] backdrop-blur-xl">
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500 opacity-20 blur-2xl"
              />

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "backOut" }}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img src="/logo.png" alt="Nagyoza Logo" className="h-72 w-72 object-contain drop-shadow-2xl" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-8 -right-8"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="h-24 w-24 rounded-full bg-gradient-to-br from-pink-300 to-fuchsia-400 opacity-80 blur-sm"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -bottom-6 -left-6"
              >
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="h-20 w-20 rounded-full bg-gradient-to-br from-fuchsia-300 to-purple-400 opacity-80 blur-sm"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-4 text-7xl font-bold tracking-tight text-white drop-shadow-2xl md:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            NAGYOZA
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mb-3 text-2xl font-semibold text-white/95 md:text-3xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Gyoza dan Saus dari Kulit Buah Naga
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
            className="mb-12 text-xl font-medium text-white/90 md:text-2xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Premium Healthy Snack
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="flex items-center justify-center gap-3"
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-4 w-4 rounded-full bg-white shadow-lg"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
              className="h-4 w-4 rounded-full bg-white/90 shadow-lg"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
              className="h-4 w-4 rounded-full bg-white/80 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
