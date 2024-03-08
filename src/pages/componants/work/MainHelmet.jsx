import React from "react";
import { Helmet } from "react-helmet";
import { useUi } from "../../../context/StateContext";

export default function MainHelmet() {
  const { clickedWork } = useUi();
  return (
    <Helmet>
      <title>{clickedWork.name} - Jack Morrell Portfolio</title>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/Logo-coloured.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}