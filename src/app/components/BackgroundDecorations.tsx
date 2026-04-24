import { motion } from "motion/react";

export default function BackgroundDecorations() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -22, 0], x: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 top-24 h-72 w-72 rounded-full bg-gradient-to-br from-pink-300/35 to-fuchsia-300/25 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-300/25 to-purple-300/18 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-200/25 to-pink-200/20 blur-3xl"
      />

      {Array.from({ length: 9 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, index % 2 === 0 ? -16 : 16, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.35,
          }}
          className="absolute rounded-full bg-white/45 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          style={{
            width: `${10 + (index % 4) * 8}px`,
            height: `${10 + (index % 4) * 8}px`,
            left: `${6 + index * 10}%`,
            top: `${18 + (index % 5) * 12}%`,
          }}
        />
      ))}
    </>
  );
}
