import { useState } from "react";
import { contentList } from "../../Data/Beaches";

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
        className="group flex items-center justify-between p-3 text-left hover:bg-[#0F3B54] transition-colors duration-150 border-b border-white/5 last:border-none"
      >
        <span className="flex flex-col font-['Helvetica_Neue',Arial,sans-serif]">
          <h3 className="text-[14px] font-semibold tracking-wide group-hover:text-[#E8D9BC] text-[#0F3B54] ">
            {list.title}
          </h3>
          <p className="text-[12px] text-[#6B7C8A] mt-0.5 group-hover:text-blue-100">
            {list.distance} - ~{list.duration}
          </p>
        </span>

        <span className=" text-[12.5px] text-[#E2A87A] inline-block transition-all duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    );
  });

  return (
    <div className="relative w-full text-white font-sans select-none">
      <div
        onClick={() => setIsSelected(!isSelected)}
        className="w-full rounded-xl text-white p-3 bg-[#FFFFFF14] outline-none text-left border border-[#FFFFFF24] font-bold tracking-widest cursor-pointer flex justify-between"
      >
        <span className="text-[14px] font-medium tracking-wide">{option}</span>
        <span
          className={`text-[10px] text-[#E8D9BC] transition-transform duration-200 `}
        >
          ▼
        </span>
      </div>

      {/* Dropdown Menu Options */}
      {isSelected && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-10 flex flex-col rounded-lg border border-white/10 bg-[#0F3B5430] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 max-h-72 pr-3 overflow-y-auto pt-2.5">
          {optionList}
        </div>
      )}
    </div>
  );
}
