import React from 'react';
import {NavBarContainer, NavButton} from "./styles";

const NavBar = ({ activeTab, setActiveTab } ) => {
    //I admit, this is not a very good solution, it might have been worth implementing this through React router, I was just in a hurry
    return (
        <NavBarContainer>
            <NavButton isActive={activeTab === 0} onClick={() => setActiveTab(0)}>History</NavButton>
            <NavButton isActive={activeTab === 1} onClick={() => setActiveTab(1)}>Overview</NavButton>
        </NavBarContainer>
    );
};

export default NavBar;
