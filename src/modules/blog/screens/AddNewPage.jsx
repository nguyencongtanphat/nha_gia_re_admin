import React, { useState } from 'react';
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
  Input,
  Space,
} from 'antd';
import { Form } from 'react-router-dom';
const { TextArea } = Input;
const { Title } = Typography;
import Breadcrumbs from '../../../globalComponents/BreadCrumb/BreadCrumb';
import HtmlContent from '../components/HtmlContent';
function AddNewPage() {
  const [html, setHtml] = useState('');
  const containerStyle = {
    height: '450px',
    overflow: 'auto',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    boxSizing: 'border-box',
  };
  const titleStyle = {
    textAlign: 'center',
  };
  return (
    <div>
      {/* <Card>
        <Breadcrumbs />
        <Flex justify="flex-end">
          <Form method="post" id="create-form">
            <input type="hidden" name="type" value="create" />
            <input type="hidden" name="content" value={html} />
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form>
        </Flex>

        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Title level={5}>Thêm nội dung bài đăng</Title>
            <TextArea
              rows={10}
              onChange={(e) => {
                setHtml(e.target.value);
              }}
              placeholder="Thêm nội dung bài đăng ở đây"
            />
          </Col>
          <Col span={16}>
            <Flex vertical justify="center">
              <Title level={4} style={titleStyle}>
                Xem trước nội dung bài đăng
              </Title>
              <div style={containerStyle}>
                <HtmlContent html={html} />
              </div>
            </Flex>
          </Col>
        </Row>
      </Card> */}
      <Card>
        <Title level={3} style={titleStyle}>
          Tạo bài Blog
        </Title>
        <Form method="post" id="contact-form">
          <input type="hidden" name="type" value="create" />
          <p>
            <span>Tiêu đề</span>
            <Input name="title" placeholder="Nhập tiêu đề" />
          </p>
          <p>
            <span>Mô tả ngắn</span>
            <TextArea name="description" rows={4} placeholder="Nhập mô tả" />
          </p>
          <p>
            <span>Tác giả</span>
            <Input name="author" placeholder="Nhập tên tác giả" />
          </p>
          <p>
            <span>Thumbnail</span>
            <Input name="thumbnail" placeholder="Nhập link ảnh thumbnail" />
          </p>
          <p>
            <span>Nội dung</span>
            <TextArea name="content" rows={4} placeholder="Nhập nội dung" />
          </p>
          <Flex justify="flex-end">
            <Space>
              <Button type="primary" danger>
                Hủy
              </Button>
              <Button type="primary">Xem trước</Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </Space>
          </Flex>
        </Form>
      </Card>
    </div>
  );
}

export default AddNewPage;
