import LocationLabel from "./LocationLabel";
import HeroContent from "./HeroContent";
import HeroAction from "./HeroAction/HeroAction";
export default function HeroContainer() {
  return (
    <div className="text-left px-8">
      <LocationLabel text={"ATLANTIC COAST · MOROCCO"} />
      <HeroContent />
      <HeroAction />
    </div>
  );
}
