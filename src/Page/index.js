import React from "react";
import Homeindex from "./Home";
import About from "./About/About";
import CartProject from "./Project/CartProject";
import Skill from "./Skill/Skill";
import HubungiKami from "./HubungiKami";

export default function LendingPage() {
  return (
    <>
      <div className="bg-[#262626] dark:bg-[#f5f5ff] rounded-2xl md:rounded-3xl">
        <Homeindex />
        <About />
        <Skill />
        <CartProject />
        <HubungiKami/>
      </div>
    </>
  );
}
