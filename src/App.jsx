import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import LoadingScreen from "./components/LoadingScreen";
import HUDOverlay from "./components/HUDOverlay";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500/30">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Cursor />
          <HUDOverlay />
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50 shadow-[0_0_10px_#00f0ff]"
            style={{ scaleX: scrollYProgress }}
          />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
