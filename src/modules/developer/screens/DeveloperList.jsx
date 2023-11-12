import React from 'react';
import {
  Tabs,
  Card,
  Row,
  Col,
  Typography,
  Button,
  Select,
  Table,
  Space,
  Input,
  Flex,
} from 'antd';
import Search from 'antd/es/input/Search';
import { useState, useRef, useEffect } from 'react';
import {
  useNavigate,
  useLoaderData,
  useFetcher,
  Form,
  redirect,
} from 'react-router-dom';
const { Text, Link } = Typography;
import DeveloperTable from '../components/TableOfDeveloper';
import ApiService from '../../../service/ApiService';
import Breadcrumbs from '../../../globalComponents/BreadCrumb/BreadCrumb';

//function loader to call API
export async function loader() {
  const developers = await ApiService.get('developers');
  if (!developers) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  //   const postLease = posts.filter((post) => post.is_lease === true);
  //   const postNoLease = posts.filter((post) => post.is_lease === false);
  //   console.log('lease', postLease);
  //   console.log('no lease', postNoLease);
  return { developers };
}

function Developer(props) {
  const navigate = useNavigate();
  const { Title } = Typography;
  const { developers } = useLoaderData();
  const fetcher = useFetcher();

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (_, record) =>
        record.is_active == true ? (
          <Text type="success">Active</Text>
        ) : (
          <Text type="danger">Inactive</Text>
        ),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <fetcher.Form method="patch">
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="primary"
              danger
              htmlType="submit"
              name="id"
              value={record.id}
            >
              Xóa
            </Button>
            <input type="hidden" name="type" value="delete" />
          </fetcher.Form>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Card>
        <Breadcrumbs></Breadcrumbs>
        <Row style={{ marginBottom: '16px' }}>
          <Col>
            <Title level={3} style={{ margin: 0, padding: 0 }}>
              Danh Sách Nhà Đầu Tư
            </Title>
          </Col>
        </Row>
        <Flex style={{ marginBottom: '12px' }} justify="space-between">
          <Search
            placeholder="Nhập thông tin cần tìm..."
            style={{
              width: 500,
            }}
            onSearch={() => {}}
            enterButton
          />

          <Button type="primary">Thêm mới</Button>
        </Flex>

        <DeveloperTable columns={columns} data={developers} />
      </Card>
    </div>
  );
}

export default Developer;
