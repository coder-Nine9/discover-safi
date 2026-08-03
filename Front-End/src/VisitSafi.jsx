import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Sections from "./components/Sections/Sections";
import Footer from "./components/Footer/Footer";
import safiHero from "./assets/images/safiHero.png";
export default function VistSafi() {
  return (
    <>
      <div
        className="fixed inset-0 bg-center bg-cover  z-1"
        style={{ backgroundImage: `url(${safiHero})` }}
      ></div>
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Sections />
        <Footer />
      </div>
    </>
  );
}
