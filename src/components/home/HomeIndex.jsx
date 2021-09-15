import React from 'react';
import HeroSection from './HeroSection';
import HotRecipes from './HotRecipes';
import MainContentContainer from '../common/MainContentContainer';

const HomeIndex = (props) => {
    return (
        <MainContentContainer noPadding>
            <HeroSection />
            <HotRecipes />
        </MainContentContainer>
    );
};

export default HomeIndex;
