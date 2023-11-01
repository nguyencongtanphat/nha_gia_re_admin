import React from 'react';
import {Tabs, Card, Row, Col, Typography, Button, Select, Table, Breadcrumb } from 'antd';
import Search from 'antd/es/input/Search';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchingClasses from '../components/SearchingClass';
import PostTable from '../components/TableOfClass';

const columns = [
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Người đăng",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Giá",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
    key: "price",
  },
  {
    title: "Diện tích",
    dataIndex: "area",
    sorter: (a, b) => a.area - b.area,
    key: "area",
  },
  {
    title: "Ngày đăng",
    dataIndex: "uploadDate",
    key: "uploadDate",
  },
  {
    title: "Loại bất động sản",
    dataIndex: "propertyType",
    key: "propertyType",
  },
];

const data1 = [
  {
    key: '1',
    name: 'Nhà sổ hồng riêng 5x15 ngã 3 Lý Thường Kiệt, Thủ Đức',
    author: 'Nguyễn Thành Trung',
    description: 'Mô tả 1',
    price: 1000000,
    area: 100,
    uploadDate: '01/01/2023',
    propertyType: 'Loại 1',
  },
  {
    key: '2',
    name: 'Nhà 2',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '3',
    name: 'Nhà 3',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '4',
    name: 'Nhà 4',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '5',
    name: 'Nhà 5',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '6',
    name: 'Nhà 6',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '7',
    name: 'Nhà 7',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '8',
    name: 'Nhà 8',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '9',
    name: 'Nhà 9',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '10',
    name: 'Nhà 10',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '11',
    name: 'Nhà 11',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '12',
    name: 'Nhà 12',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  // Thêm các dòng dữ liệu khác tại đây (nếu cần)
];

const data2 = [
  {
    key: '1',
    name: 'Nhà xr',
    author: 'Người 1',
    description: 'Mô tả 1',
    price: 2000000,
    area: 100,
    uploadDate: '01/01/2023',
    propertyType: 'Loại 1',
  },
  {
    key: '2',
    name: 'Nhà bahb',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '2',
    name: 'Nhà nfasjn',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '2',
    name: 'Nhà amkdkfma',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '2',
    name: 'Nhà njandjnf',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '1',
    name: 'Nhà xr',
    author: 'Người 1',
    description: 'Mô tả 1',
    price: 2000000,
    area: 100,
    uploadDate: '01/01/2023',
    propertyType: 'Loại 1',
  },
  {
    key: '2',
    name: 'Nhà bahb',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '2',
    name: 'Nhà nfasjn',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '2',
    name: 'Nhà amkdkfma',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '2',
    name: 'Nhà njandjnf',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '2',
    name: 'Nhà nfasjn',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '2',
    name: 'Nhà amkdkfma',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  {
    key: '2',
    name: 'Nhà njandjnf',
    author: 'Người 2',
    description: 'Mô tả 2',
    price: 2000000,
    area: 200,
    uploadDate: '02/01/2023',
    propertyType: 'Loại 2',
  },
  // Thêm các dòng dữ liệu khác tại đây (nếu cần)
];

const tabs = [
  {
    key: '1',
    label: 'Cho thuê',
    children:<PostTable columns={columns} data={data1} abc='cho thuê'/>,
  },
  {
    key: '2',
    label: 'Cần bán',
    children: <PostTable columns={columns} data={data2} abc='cần bán'/>,
  },
];
function PendingPost(props) {
  const navigate = useNavigate()
  const { Title } = Typography;

  return (
    <div>
      <Card>
      <Breadcrumb style={{marginBottom:"12px"}}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>DS Bài đăng chờ duyệt</Breadcrumb.Item>
      </Breadcrumb>
        <Row style={{marginBottom:"16px"}}>
          <Col>
            <Title level={3} style={{ margin: 0, padding: 0 }}>
              DS Bài đăng chờ duyệt
            </Title>
          </Col>
        </Row>
        <Row style={{marginBottom:"12px"}}>
          <Col>
              <Search
              placeholder="Nhập thông tin cần tìm..."
              style={{
                width: 500,
              }}
              onSearch={() => {}}
              enterButton
            />
            </Col>
        </Row>
    
        <Tabs defaultActiveKey="1" items={tabs}  />
      </Card>
      
    </div>
  );
}

export default PendingPost;