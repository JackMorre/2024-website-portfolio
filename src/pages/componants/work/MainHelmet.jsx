import React from "react";
import { Helmet } from "react-helmet";
import { useUi } from "../../../context/StateContext";

export default function MainHelmet() {
  const { clickedWork } = useUi();
  return (
    <Helmet>
      <title>{clickedWork.name} - Jack Morrell Portfolio</title>
    </Helmet>
  );
}
