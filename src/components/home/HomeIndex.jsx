import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import HotRecipes from "./HotRecipes";
import Header from "./Header";

const HomeIndex = (props) => {
  return (
    <div>
      <div class="homeNav"></div>
      <Header token={props.token} />
      <HeroSection />
      <HotRecipes />
    </div>
  );
};

export default HomeIndex;
