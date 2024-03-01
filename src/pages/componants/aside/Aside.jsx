import { useUi } from "../../../context/StateContext";
import LinkListItem from "./LinkListItem";
import Socials from "./Socials";
import { links } from "../../../helpers/links";

export default function Aside() {
  const { menuOpen, desktopMode } = useUi();
  return (
    <>
      {menuOpen && (
        <div
          className={` ${
            desktopMode
              ? "w-[50px] fixed z-30  border-r-[1px] border-dark top-0 left-0"
              : "fixed top-0 right-0 w-5/6 shadow-[-0px_0px_50px_10px_#0F0E0E] pt-16 z-40 bg-light"
          } h-screen flex flex-col justify-between bg-light`}
        >
          <ul
            className={`font-merriweather ${
              desktopMode
                ? "mt-6 h-1/2 flex justify-around flex-nowrap flex-col items-center"
                : "flex flex-col gap-6 p-8 text-xl font-light "
            } `}
          >
            {links.map((link) => {
              return (
                <LinkListItem
                  key={link.name}
                  name={link.name}
                  customWidth={link.customWidth}
                />
              );
            })}
          </ul>
          <Socials />
        </div>
      )}
    </>
  );
}
