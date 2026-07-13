import Logo from "../NavBar/Logo";
import NavButton from "../NavBar/NavButton";
export default function NavBar() {
  return (
    <header className="py-5.5  flex justify-around items-center fixed top-0 left-0 right-0 z-100 text-white">
      <Logo />
      <nav>
        <ul className="flex gap-6 font-bold text-white ">
          <li>
            <a className="link-hover" href="#About">
              About
            </a>
          </li>
          <li>
            <a className="link-hover" href="#Beaches">
              Beaches
            </a>
          </li>
          <li>
            <a className="link-hover" href="#Map">
              Map
            </a>
          </li>
          <li>
            <a className="link-hover" href="#Activities">
              Activities
            </a>
          </li>
          <li>
            <a className="link-hover" href="#Watch">
              Watch
            </a>
          </li>
          <li>
            <a className="link-hover" href="#Restaurants">
              Restaurants
            </a>
          </li>
          <li>
            <a className="link-hover" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <NavButton />
    </header>
  );
}
