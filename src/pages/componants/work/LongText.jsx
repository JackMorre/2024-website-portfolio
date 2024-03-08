import React from "react";
import { useUi } from "../../../context/StateContext";

export default function LongText() {
  const { clickedWork } = useUi();
  return (
    <ul className="flex flex-col gap-4 font-merriweather max-w-4xl">
      {clickedWork?.longText.map((text, i) => {
        return (
          <li key={i}>
            <p className="text-center">{text}</p>
          </li>
        );
      })}
    </ul>
  );
}
