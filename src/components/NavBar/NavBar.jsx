import Logo from "../NavBar/Logo";
import NavButton from "../NavBar/NavButton";
export default function NavBar() {
  return (
    <header className="py-5.5  flex justify-around items-center fixed top-0 left-0 right-0 z-100 text-white">
      <Logo />
      <nav>
        <ul className="flex gap-6 font-bold text-white">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Beaches">Beaches</a>
          </li>
          <li>
            <a href="#Map">Map</a>
          </li>
          <li>
            <a href="#Activities">Activities</a>
          </li>
          <li>
            <a href="#galary">galary</a>
          </li>
          <li>
            <a href="#Restaurants">Restaurants</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <NavButton />
    </header>
  );
}
