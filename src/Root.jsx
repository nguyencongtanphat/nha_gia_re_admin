import React from "react";
import { Outlet } from "react-router";
import SideMenu from "./globalComponents/SideBar/SideBar";
import Header from "./globalComponents/Header/Header";
import SideBar1 from "./globalComponents/SideBar/SideBar1";
import { Button, ConfigProvider, Space } from 'antd';
const Root = ()=>{
    return (
        <ConfigProvider
        theme={{
        token: {
            // Seed Token
            colorPrimary: '#00b96b',
            borderRadius: 2,

            // Alias Token
            colorBgContainer: '#f6ffed',
        },
        }}
    >
        <div className="App">
       
       <Header />
       <div className="SideMenuAndPageContent">
         <SideBar1/>
         <div className="PageContent">
           <Outlet />
         </div>
       </div>
     </div>
    </ConfigProvider>
      
    );
}

export default Root;