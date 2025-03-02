import NavbarSimple from "./components/NavbarSimple";
import Hero from "./components/Hero";
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#131313] text-gray-900 dark:text-white">
      {/* Navbar */}
      <NavbarSimple />

      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Footer></Footer>

    </div>
  );
}

export default App;
