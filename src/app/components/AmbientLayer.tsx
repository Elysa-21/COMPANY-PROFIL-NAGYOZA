import { motion, useScroll, useTransform } from "motion/react";

type AmbientVariant = "page" | "hero" | "section" | "footer";

const bubbles = {
  page: [
    { size: 140, left: "4%", top: "10%", color: "bg-pink-200/25", duration: 16, delay: 0 },
    { size: 96, left: "84%", top: "14%", color: "bg-fuchsia-200/22", duration: 18, delay: 0.3 },
    { size: 72, left: "18%", top: "72%", color: "bg-white/20", duration: 14, delay: 0.6 },
    { size: 120, left: "76%", top: "68%", color: "bg-violet-200/20", duration: 20, delay: 0.9 },
  ],
  hero: [
    { size: 90, left: "10%", top: "18%", color: "bg-white/24", duration: 12, delay: 0 },
    { size: 54, left: "78%", top: "24%", color: "bg-pink-200/30", duration: 10, delay: 0.4 },
    { size: 130, left: "68%", top: "66%", color: "bg-fuchsia-200/22", duration: 16, delay: 0.8 },
    { size: 64, left: "24%", top: "78%", color: "bg-white/18", duration: 11, delay: 1.1 },
    { size: 82, left: "88%", top: "76%", color: "bg-violet-200/20", duration: 14, delay: 1.4 },
  ],
  section: [
    { size: 52, left: "8%", top: "16%", color: "bg-white/18", duration: 9, delay: 0 },
    { size: 86, left: "84%", top: "24%", color: "bg-pink-200/25", duration: 13, delay: 0.35 },
    { size: 64, left: "16%", top: "76%", color: "bg-fuchsia-200/20", duration: 11, delay: 0.7 },
    { size: 108, left: "72%", top: "74%", color: "bg-white/16", duration: 15, delay: 1.05 },
  ],
  footer: [
    { size: 74, left: "12%", top: "22%", color: "bg-white/10", duration: 12, delay: 0 },
    { size: 118, left: "80%", top: "16%", color: "bg-pink-300/14", duration: 15, delay: 0.4 },
    { size: 68, left: "62%", top: "72%", color: "bg-fuchsia-300/10", duration: 13, delay: 0.8 },
  ],
} satisfies Record<AmbientVariant, Array<{
  size: number;
  left: string;
  top: string;
  color: string;
  duration: number;
  delay: number;
}>>;

const blobs = {
  page: [
    "absolute left-[-8%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,192,203,0.26),rgba(255,192,203,0)_70%)] blur-3xl",
    "absolute right-[-10%] top-[24%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(224,170,255,0.22),rgba(224,170,255,0)_72%)] blur-3xl",
  ],
  hero: [
    "absolute left-[-6%] top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,192,203,0.32),rgba(255,192,203,0)_70%)] blur-3xl",
    "absolute right-[-8%] top-24 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(224,170,255,0.26),rgba(224,170,255,0)_72%)] blur-3xl",
    "absolute bottom-[-8%] left-[28%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.24),rgba(255,255,255,0)_72%)] blur-3xl",
  ],
  section: [
    "absolute left-[-8%] top-14 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,192,203,0.24),rgba(255,192,203,0)_70%)] blur-3xl",
    "absolute right-[-8%] top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(224,170,255,0.2),rgba(224,170,255,0)_72%)] blur-3xl",
    "absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),rgba(255,255,255,0)_74%)] blur-3xl",
  ],
  footer: [
    "absolute left-[-4%] top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,192,203,0.16),rgba(255,192,203,0)_72%)] blur-3xl",
    "absolute right-[-6%] top-12 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(224,170,255,0.14),rgba(224,170,255,0)_74%)] blur-3xl",
  ],
} satisfies Record<AmbientVariant, string[]>;

export default function AmbientLayer({
  variant = "section",
  className = "",
}: {
  variant?: AmbientVariant;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const slowY = useTransform(scrollY, [0, 2000], [0, -36]);
  const mediumY = useTransform(scrollY, [0, 2000], [0, -64]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={{ y: slowY }}
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,192,203,0.08)_0%,rgba(224,170,255,0.08)_46%,rgba(255,255,255,0.05)_100%)]"
      />

      {blobs[variant].map((blob, index) => (
        <motion.div
          key={`${variant}-blob-${index}`}
          style={{ y: index % 2 === 0 ? slowY : mediumY }}
          animate={{ x: [0, index % 2 === 0 ? 18 : -14, 0], y: [0, -10, 0] }}
          transition={{ duration: 18 + index * 3, repeat: Infinity, ease: "easeInOut" }}
          className={blob}
        />
      ))}

      {bubbles[variant].map((bubble, index) => (
        <motion.div
          key={`${variant}-bubble-${index}`}
          style={{
            left: bubble.left,
            top: bubble.top,
            width: bubble.size,
            height: bubble.size,
            y: index % 2 === 0 ? slowY : mediumY,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -20 : 22, 0],
            x: [0, index % 3 === 0 ? 10 : -10, 0],
            opacity: [0.2, 0.38, 0.2],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
          className={`absolute rounded-full ${bubble.color} blur-[28px]`}
        />
      ))}

      {Array.from({ length: variant === "hero" ? 10 : 6 }).map((_, index) => (
        <motion.div
          key={`${variant}-particle-${index}`}
          style={{
            left: `${8 + index * (variant === "hero" ? 8 : 14)}%`,
            top: `${14 + (index % 4) * 16}%`,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -18 : 18, 0],
            opacity: [0.12, 0.34, 0.12],
          }}
          transition={{
            duration: 9 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.22,
          }}
          className="absolute h-2 w-2 rounded-full bg-white/55 shadow-[0_0_18px_rgba(255,255,255,0.25)]"
        />
      ))}
    </div>
  );
}
