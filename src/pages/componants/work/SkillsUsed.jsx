import React from "react";
import { useUi } from "../../../context/StateContext";

export default function SkillsUsed() {
  const { clickedWork } = useUi();
  return (
    <ul className="flex flex-wrap gap-2 items-center justify-center ">
      {clickedWork?.skillsUsed.map((item) => {
        return (
          <li key={item}>
            <p className=" font-oswald px-2 bg-color text-light text-2xl">
              {item}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
