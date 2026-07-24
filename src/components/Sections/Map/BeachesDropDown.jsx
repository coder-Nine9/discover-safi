import { useState } from "react";
import { contentList } from "../../Data/Beaches";
import { motion, AnimatePresence } from "framer-motion";
import downIcon from "../../../assets/icons/down.png";
import { LuMoveRight } from "react-icons/lu";
export default function BeachesDropDown({ handleDestination }) {
  const [option, setOption] = useState("Select Beach");
  const [isSelected, setIsSelected] = useState(false);

  const optionList = contentList.map((list) => {
    return (
      <button
        onClick={() => {
          setOption(list.title);
          setIsSelected(false);
          handleDestination({ lat: list.lat, lng: list.lng });
        }}
        key={list.id}
        className={`group w-full flex items-center justify-between p-3 text-left transition-colors duration-200 border-b border-white/5 last:border-none ${
          option === list.title
            ? "bg-[#0F3B54] text-[#E8D9BC]"
            : "hover:bg-[#0F3B54]"
        }`}
      >
        <span className="flex flex-col font-['Helvetica_Neue',Arial,sans-serif]">
          <h3 className="text-[14px] font-semibold tracking-wide transition-all duration-300 ease-in-out group-hover:text-[#E8D9BC] group-hover:translate-x-1 text-[#FFFFFF] ">
            {list.title}
          </h3>
          <p className="text-[12px] text-[#b0c2d1] mt-0.5 group-hover:text-blue-100">
            {list.distance} - ~{list.duration}
          </p>
        </span>

        <span className=" text-[18px] text-[#E2A87A] inline-block ">
          <LuMoveRight className="transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
        </span>
      </button>
    );
  });

  return (
    <div className=" w-full text-white font-sans select-none">
      <div
        onClick={() => setIsSelected(!isSelected)}
        className="w-full rounded-xl text-white p-3 bg-[#FFFFFF14] outline-none text-left border border-[#FFFFFF24] font-bold tracking-widest cursor-pointer flex justify-between items-center"
      >
        <span className="text-[14px] font-medium tracking-wide">{option}</span>
        <span className={`bg-white rounded-full p-1 `}>
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: isSelected ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            src={downIcon}
            alt="downIcon"
            width={"16px"}
          />
        </span>
      </div>

      {/* Dropdown Menu Options */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0 }}
            className="mt-1.5 max-h-50 rounded-lg bg-[#0F3B5430] border border-white/10 overflow-y-auto"
          >
            {optionList}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
