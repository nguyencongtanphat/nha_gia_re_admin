import React from 'react';
import ImgCrop from 'antd-img-crop';
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
  Modal,
  Flex,
  Upload,
  Form as AntForm,
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
import TextArea from 'antd/es/input/TextArea';
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
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const showAddNewModal = () => {
    setIsModalOpen(true);
  };
  const handleOkAddNewModal = () => {
    setIsModalOpen(false);
  };
  const handleCancelAddNewModal = () => {
    setIsModalOpen(false);
  };

  const [formDataAddNew] = AntForm.useForm();
  const onFinish = async (values) => {
    console.log('Received values:', values);
    values['images'] = [];
    const res = await ApiService.post({ url: 'developers', data: values });
    console.log('response:', res);
  };

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

          <Button type="primary" onClick={showAddNewModal}>
            Thêm mới
          </Button>
        </Flex>

        <DeveloperTable columns={columns} data={developers} />
      </Card>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        footer={null}
        // onOk={handleOkAddNewModal}
        // onCancel={handleCancelAddNewModal}
      >
        {/* <AntForm
          form={formDataAddNew}
          onFinish={onFinish}
          style={{ marginTop: '24px' }}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <AntForm.Item
            name="name"
            label="Tên nhà đầu tư"
            rules={[
              { required: true, message: 'Please input the developer name!' },
            ]}
          >
            <Input />
          </AntForm.Item>
          <AntForm.Item
            name="description"
            label="Mô tả về nhà đầu từ"
            rules={[
              {
                required: true,
                message: 'Please input the developer description!',
              },
            ]}
          >
            <TextArea rows={4} />
          </AntForm.Item>
          <AntForm.Item label="Mô tả về nhà đầu từ">
            <ImgCrop rotationSlider>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </AntForm.Item>
          <AntForm.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </AntForm.Item>
        </AntForm> */}
        <Form method="post" id="contact-form">
          <p>
            <span>Tên nhà đầu tư</span>
            <Input name="name" />
          </p>
          <p>
            <span>Mô tả đầu tư</span>
            <TextArea name="description" rows={4} />
          </p>
          <p>
            <ImgCrop rotationSlider>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </p>
          <Flex justify="flex-end">
            <Space>
              <Button danger type="primary" onClick={handleCancelAddNewModal}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              {/* <button type="submit">submit</button> */}
            </Space>
          </Flex>
        </Form>
      </Modal>
    </div>
  );
}

export default Developer;
