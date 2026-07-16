import ActionButton from "./ActionButton";

export default function HeroAction() {
  return (
    <div className="flex gap-4 flex-wrap flex-col lg:flex-row w-fit ">
      <ActionButton action={"Explore Beaches ↗"} bgColor={"#C1663F"} id={"#"} />
      <ActionButton
        action={"View Interactive Map"}
        bgColor={"#FFFFFF24"}
        id={"#"}
      />
    </div>
  );
}
