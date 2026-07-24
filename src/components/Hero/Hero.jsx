import safiHero from "../../assets/images/safiHero.png";

import HeroBackGround from "./HeroBackground";
import HeroContainer from "./HeroContainer";
import HeroStatistic from "./HeroStatistic/HeroStatistic";
import ScrollIcon from "./ScrollIcon";
export default function Hero() {
  return (
    <div>
      <HeroBackGround image={safiHero}>
        <HeroContainer />
        <HeroStatistic />
        <ScrollIcon />
      </HeroBackGround>
    </div>
  );
}
