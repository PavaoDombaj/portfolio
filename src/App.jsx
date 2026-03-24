import { useState, useCallback } from "react";
import NavbarSimple from "./components/NavbarSimple";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";
import About from "./components/About";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoaded = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onFinished={handleLoaded} />}
      <div className={`flex flex-col items-center w-full min-h-screen bg-[#131313] text-gray-900 dark:text-white overflow-x-hidden${loading ? " opacity-0" : ""}`}>
        {/* Navbar */}
        <NavbarSimple />

        <div className="w-full">
          <Hero />
          <Projects />
          <Services />
          <CallToAction />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
