import React from 'react'
import { BellFilled, MailOutlined, CaretDownOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

import {
  Badge,
  Image,
  Avatar,
  Space,
  Divider
} from "antd";
import style from './Header.module.css';
import Search from 'antd/es/input/Search';
import logo from '../../../assets/Logo.png';

function Header() {
  
  return (
    <div className={style.AppHeader}>
        <img src={logo} alt="" />
      <div className={style.searchContainer}>
        <Search
          placeholder="input search text"
          style={{
            width: 500,
          }}
          onSearch={() => {}}
          enterButton
        />
      </div>

      <Space>
        <Badge count={3} dot>
          <BellFilled
            style={{ fontSize: 24 }}
          />
        </Badge>
        <Divider type="vertical" style={{ width: 3, height: 30 }} />
        <Avatar size={36} icon={<UserOutlined />} />
         user name
        <CaretDownOutlined />
      </Space>
    </div>
  );
}

export default Header