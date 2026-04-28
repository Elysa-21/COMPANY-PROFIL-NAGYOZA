import { useState } from "react";

const logoCandidates = [
  "/assets/foto-produk/logo.png",
];

export default function Logo({
  className = "h-12",
}: {
  className?: string;
}) {
  const [logoIndex, setLogoIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  const handleError = () => {
    if (logoIndex < logoCandidates.length - 1) {
      setLogoIndex((current) => current + 1);
      return;
    }

    setShowFallback(true);
  };

  if (showFallback) {
    return (
      <div className="flex items-center">
        <div className="rounded-[22px] border border-pink-200/70 bg-white/70 px-4 py-3 text-center shadow-[0_12px_30px_rgba(236,72,153,0.12)] backdrop-blur-md">
          <p
            className="text-sm font-semibold uppercase tracking-[0.36em] text-[#b94174]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            NAGYOZA
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <img
        src={logoCandidates[logoIndex]}
        alt="Nagyoza Logo"
        className={className}
        onError={handleError}
      />
    </div>
  );
}
