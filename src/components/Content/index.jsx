import React from "react";
import Listings from "./Listings";
import Features from "./Features";
import Partners from "./Partners";
import Registration from "./Registration";
const Content = () => {
  return (
    <main className="ia-content w-full h-full">
      <Listings/>
      <Features/>
      <Partners/>
      <Registration/>
    </main>
  );
};

export default Content;
