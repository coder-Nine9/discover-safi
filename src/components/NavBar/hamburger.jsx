import { Menu, X } from "lucide-react";
import Nav from "./Nav";
import NavButton from "./NavButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function HamBurger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: "90deg" }}
              transition={{ duration: 0.3 }}
            >
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: "-180deg" }}
              transition={{ duration: 0.3 }}
            >
              <Menu size={32} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white absolute top-8 right-0  bg-[#0F3B54] p-3.75 rounded-xl shadow-lg overflow-hidden w-64"
          >
            <Nav flex="column" />
            <div className="pt-5 flex justify-center ">
              <NavButton size={"100px"} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
