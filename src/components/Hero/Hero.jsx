import safiHero from "../../assets/images/safiHero.png";

import HeroBackGround from "./HeroBackground";
import HeroContainer from "./HeroContainer";
import HeroState from "./HeroState/HeroState";
export default function Hero() {
  return (
    <HeroBackGround image={safiHero}>
      <HeroContainer />
      <HeroState />
    </HeroBackGround>
  );
}
