import React from "react";
import { Outlet } from "react-router";
import Header from "./globalComponents/Header/Header";
import SideBar from "./globalComponents/SideBar/SideBar";
import { Button, ConfigProvider, Space } from 'antd';
import "./Root.css"
const Root = ()=>{
    return (
        <ConfigProvider
            theme={{
            token: {
                // Seed Token
                colorPrimary: '#00b96b',
                borderRadius: 2,
                // Alias Token
                colorBgContainer: ' #FFFFFF',
            },
            }}
        >
        <div className="App">
            <Header />
            <div className="SideMenuAndPageContent">
                <SideBar/>
                <div className="PageContent">
                    <Outlet />
                </div>
            </div>
      </div>
    </ConfigProvider>
      
    );
}

export default Root;