import { useState } from "react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/playfair-display/700.css";
import SplashPage from "./pages/SplashPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashPage onComplete={() => setShowSplash(false)} />;
  }

  return <HomePage />;
}
