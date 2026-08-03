import Logo from "../NavBar/Logo";
import SocialLinks from "../../UI/SocialLinks";
import { LuMoveRight } from "react-icons/lu";
export default function Footer() {
  return (
    <footer className=" pt-20 pb-7.5 bg-[linear-gradient(160deg,#1B5D8C,#123F5E)] text-[16px] font-[Inter,sans-serif] text-[#FFFFFFB3]">
      <div className="px-4 lg:px-8 w-[81.5%] m-auto">
        <div className="grid grid-cols-2 grid-row-2 gap-10 lg:grid-cols-4 lg:grid-rows-1 pb-14">
          <div>
            <Logo />
            <p className="text-[14px] max-w-70">
              An independent guide to Safi, Morocco — its pottery heritage, its
              Atlantic beaches, and everything in between.
            </p>
          </div>
          <List
            title="EXPLORE"
            List={["About", "Beaches", "Activities", "Watch"]}
          />
          <List
            title="PLAN"
            List={["Map", "Restaurants", "Contact", "Travel Guide (PDF)"]}
          />

          <div>
            <b className="mb-5 uppercase tracking-widest text-white text-[13px] font-['Space_Mono',monospace]">
              Newsletter
            </b>
            <p className="mb-3.5 text-[14px] ">
              Get seasonal travel tips for the Safi coast.
            </p>
            <div className="flex flex-wrap  gap-2">
              <input
                type="Email"
                placeholder="Email address"
                className="py-2.75 px-3.5 bg-[#FFFFFF0F] rounded-xl max-w-40 "
              />
              <button className="group text-[13px] bg-[#C1663F] py-2.75 px-4 text-white rounded-full shadow-amber-600 cursor-pointer flex justify-center items-center">
                <span className="transition-transform duration-300 group-hover:translate-x-2 inline-block">
                  <LuMoveRight size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-10 pt-6.5 text-[13px] border-t border-gray-400">
          <span>© 2026 Visit Safi. A conceptual tourism project.</span>
          <div className="flex gap-3">
            <SocialLinks
              social={[
                { name: "IG", link: "https://www.instagram.com/?hl=ar" },
                { name: "FB", link: "https://www.facebook.com/?locale=ar_AR" },
                { name: "X", link: "https://www.instagram.com/?hl=ar" },
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function List({ title, List }) {
  const newList = List.map((list) => {
    return (
      <li className=" font-semibold text-[14.5px] font-['Inter',sans_serif]  list-none  transition-all duration-300 hover:scale-[1.1]">
        <a href={`#${list}`}>{list}</a>
      </li>
    );
  });
  return (
    <div>
      <b className="mb-5 tracking-widest text-white text-[13px] font-['Space_Mono',monospace]">
        {title}
      </b>
      <ul className="flex flex-col gap-2">{newList}</ul>
    </div>
  );
}
