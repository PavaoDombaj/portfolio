import NavbarSimple from "./components/NavbarSimple";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#131313] text-gray-900 dark:text-white overflow-x-hidden">
      {/* Navbar */}
      <NavbarSimple />

      <div className="w-full max-w-7xl px-6">
        <Hero />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
