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
    <nav>
      <ul
        className="flex gap-6 font-bold "
        style={{
          flexDirection: flex,
        }}
      >
        {links.map((link) => (
          <li key={link}>
            <a className="link-hover" href={`#${link}`}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
