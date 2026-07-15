import About from "./About/About";
import Beaches from "./Beaches/Beaches";
import Map from "./Map/Map";
import Activities from "./Activities/Activities";
import Video from "./Watch/Video";
import Restaurants from "./Restaurant/Restaurants";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";
export default function Sections() {
  return (
    <main>
      <About />
      <Beaches />
      <Map />
      <Activities />
      <Video />
      <Restaurants />
      <Reviews />
      <Contact />
    </main>
  );
}
