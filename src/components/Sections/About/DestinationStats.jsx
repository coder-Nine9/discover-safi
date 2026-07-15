import Statistic from "../../Hero/HeroStatistic/Statistic";

export default function DestinationStats() {
  return (
    <div className=" mt-12 pt-10 flex gap-10 text-left border-t-2 border-gray-200">
      <Statistic
        NumbersSate={"800"}
        TextState={"Years of pottery heritage"}
        textSize={"40px"}
        paraSize={"13px"}
        textColor={"#1B5D8C"}
        tracking={"0.05em"}
        paraColor={"#6B7B83"}
      />
      <Statistic
        NumbersSate={"6"}
        TextState={"Beaches within 45 min"}
        textSize={"40px"}
        paraSize={"13px"}
        textColor={"#1B5D8C"}
        tracking={"0.05em"}
        paraColor={"#6B7B83"}
      />
      <Statistic
        NumbersSate={"120,000"}
        TextState={"Residents, still uncrowded"}
        textSize={"40px"}
        paraSize={"13px"}
        textColor={"#1B5D8C"}
        tracking={"0.05em"}
        paraColor={"#6B7B83"}
      />
    </div>
  );
}
