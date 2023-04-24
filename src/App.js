import React, {useState } from 'react';
import  Header from "./components/Header";
import Overview from "./components/Overview";
import HistoryTub from "./components/HistoryTub";
import NavBar from "./components/NavBar/NavBar";
import {CommonStyles} from "./styles";

const App = () => {
    const [activeTab, setActiveTab] = useState(0);
//
    return (
        <CommonStyles>
            <Header />
            <NavBar activeTab={activeTab} setActiveTab={setActiveTab}/>
            {activeTab === 0 && <Overview /> }
            {activeTab === 1 && <HistoryTub />}
        </CommonStyles>
    );
};

export default App;
