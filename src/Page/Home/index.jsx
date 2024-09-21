import React from "react";
import ProfilInfo from "./ProfilInfo";
import NamaComponent from "./NamaComponent";
import ImageSection from "./ImageSection";

export default function Homeindex() {
  return <div className="items-center text-center relative">
    <ProfilInfo/>
    <NamaComponent/>
    <ImageSection/>
  </div>;
}
