import React from 'react';
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import {
  Tabs,
  Card,
  Row,
  Col,
  Typography,
  Button,
  Select,
  Flex,
  Table,
  Modal,
  Form,
  Input,
} from 'antd';
import Search from 'antd/es/input/Search';
import Breadcrumbs from '../../../globalComponents/BreadCrumb/BreadCrumb';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import ApiService from '../../../service/ApiService';

//function loader to call API
export async function loader() {
  const blogs = await ApiService.get('blogs?page=1');
  console.log('blogs', blogs);
  if (!blogs) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return { blogs };
}

export default function Blog() {
  const { blogs } = useLoaderData();
  const data = Array.from({ length: 23 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  }));

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [item, setItem] = useState({});

  return (
    <div>
      <Card>
        <Breadcrumbs />
        <Row style={{ marginBottom: '16px' }}>
          <Col>
            <Title level={3} style={{ margin: 0, padding: 0 }}>
              Blog
            </Title>
          </Col>
        </Row>
        <Row style={{ marginBottom: '12px' }}>
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
        <Flex gap="middle" justify="end" align="center">
          <Button
            type="primary"
            size="middle"
            icon={<PlusOutlined />}
            style={{
              backgroundColor: '#1890FF',
              marginLeft: '12px',
              marginTop: '16px',
            }}
            onClick={() => {
              navigate('/blogs/add');
            }}
          >
            Thêm
          </Button>
        </Flex>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={blogs}
          // khi onclick co the navigate sang trang khac
          renderItem={(item) => (
            <List.Item
              onClick={() => {
                navigate(`/blogs/1`);
              }}
              key={item.id}
              actions={[
                <Button type="primary" size="middle" icon={<EditOutlined />}>
                  Sửa
                </Button>,
                <Button
                  type="primary"
                  size="middle"
                  danger={true}
                  icon={<DeleteOutlined />}
                >
                  Xóa
                </Button>,
              ]}
              extra={<img width={272} alt="logo" src={item.thumbnail} />}
            >
              <List.Item.Meta
                //avatar={<Avatar src={item.avatar} />}

                title={<a href={item.href}>{item.title}</a>}
                description={item.short_description}
              />
              {/* {item.content} */}
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}
