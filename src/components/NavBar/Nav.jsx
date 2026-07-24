import { motion } from "framer-motion";

export default function Nav({ flex = "row" }) {
  const links = [
    "About",
    "Beaches",
    "Map",
    "Activities",
    "Watch",
    "Restaurants",
    "Contact",
  ];
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ul
        className="flex gap-6 font-bold "
        style={{
          flexDirection: flex,
        }}
      >
        {links.map((link) => (
          <li key={link}>
            <a
              className="link-hover"
              href={`#${link}`}
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
