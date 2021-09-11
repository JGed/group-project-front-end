import React from "react";
import HeroSection from "./HeroSection";
import HotRecipes from "./HotRecipes";
import Header from './Header';

const HomeIndex = (props) => {
  return (
    <div>
      <Header />  
      <HeroSection />
      <HotRecipes />
    </div>
  );
};

export default HomeIndex;
