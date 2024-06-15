import React from "react";
import { Link as RouteLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col gap-20 items-center justify-center bg-[#11112A]">
      <p className="text-3xl font-bold text-white">
        Ooops! Page under construction
      </p>
      <p className="text-6xl mt-3">🚧👷🏾‍♂️</p>
      <button className="px-5 py-2 bg-white text-[#11112A] font-semibold rounded-md transition hover:bg-[#036cd5] hover:text-white">
        <RouteLink to={"/"}>Go Back</RouteLink>
      </button>
    </div>
  );
}

export default ErrorPage;
