import Content from "./Content";
import Container from "./Container";
import map from "../../../assets/images/map.png";
export default function Map() {
  return (
    <div className="py-30">
      <div className="px-8 max-w-[81.5%] m-auto">
        <Content />
        <div className=" flex justify-evenly">
          <img
            className=" border-8 border-[#0F3B54] rounded-xl"
            width="500px"
            src={map}
            alt=""
          />
          <Container />
        </div>
      </div>
    </div>
  );
}
