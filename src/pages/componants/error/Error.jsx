import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex justify-center h-screen items-center bg-light flex-col text-center gap-4">
      <div className="bg-color py-4">
        <h1 className="text-4xl text-light">
          Hmm.... Couldn't find that page.
        </h1>
      </div>
      <p>
        Let try going{" "}
        <button className="text-color hover:underline">
          <Link to="/">home.</Link>
        </button>
      </p>
    </div>
  );
}
