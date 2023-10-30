import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  FormOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Menu } from 'antd';
import style from "./SideBar.module.css";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Bài đăng', 'post', <FormOutlined/>, [
    getItem('DS Bài đăng chờ duyệt', 'pending_post'),
    getItem('DS Bài đăng đã duyệt', 'approved_post'),
  ]),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const location = useLocation();
  // const [selectedKeys, setSelectedKeys] = useState("/");

  // useEffect(() => {
  //   const pathName = location.pathname;
  //   setSelectedKeys(pathName);
  // }, [location.pathname]);

  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
        className={style.SideMenu}
    >
      

      <Menu
       
        defaultOpenKeys={['post']}
        mode="inline"
        theme="light"
        
        inlineCollapsed={collapsed}
        items={items}
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
      />
      <Button
        type="primary"
        onClick={toggleCollapsed}
        className={style.ToggleButton}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  );
};
export default SideBar;