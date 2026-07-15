import Logo from "../NavBar/Logo";
import NavButton from "../NavBar/NavButton";
import Nav from "./Nav";
import HamBurger from "./hamburger";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (currentScroll) => {
    setScrolled(currentScroll > 50);
  });

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "#FBF7EFC7" : "rgba(11,46,66,0)",
        color: scrolled ? "black" : "white",
        boxShadow: scrolled
          ? "0 10px 30px rgba(0,0,0,0.15)"
          : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="py-5.5  flex justify-between px-6 items-center fixed top-0 left-0 right-0 z-100 "
      id="Home"
    >
      <Logo />

      <div className="hidden lg:block">
        <Nav />
      </div>
      <div className="hidden lg:block">
        <NavButton />
      </div>

      <div className="block lg:hidden relative">
        <HamBurger />
      </div>
    </motion.header>
  );
}
