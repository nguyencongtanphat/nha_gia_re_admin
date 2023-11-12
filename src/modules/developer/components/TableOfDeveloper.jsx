import React, { useState } from 'react';
import {
  Row,
  Table,
  Modal,
  Form,
  Input,
  Button,
  Col,
  Flex,
  Typography,
  Image,
} from 'antd';
const { Text, Link } = Typography;
const { TextArea } = Input;
import { useNavigate } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

function DeveloperTable(props) {
  const { Title } = Typography;
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const [item, setItem] = useState({});

  const onRowHandler = (record) => {
    setIsModalOpen(true);
    setItem(record);
  };

  const showModal1 = (props) => {
    handleCancel();
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Row style={{ display: 'flex' }}>
        <Table
          style={{ width: '100%' }}
          rowClassName="custom-row"
          dataSource={props.data}
          columns={props.columns}
          onRow={(record) => ({
            onClick: () => {
              onRowHandler(record);
            },
          })}
        />

        {Object.keys(item).length !== 0 && (
          <Modal
            title={item.title}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            // footer={(_, { OkBtn, CancelBtn }) => (
            //   <>
            //     <Button icon={<CheckOutlined/>} type="primary">Duyệt</Button>
            //     <Button type="primary" icon={<CloseOutlined/>} danger onClick={showModal1}>Từ chối</Button>
            //   </>
            // )}
          >
            {/* Form */}
            <Form
              style={{ marginTop: '24px' }}
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item label="Tên nhà đầu tư">
                <Input value={`${item.name}`} />
              </Form.Item>
              <Form.Item label="Mô tả">
                <TextArea rows={4} value={item.description} />
              </Form.Item>
              <Form.Item label="Ngày tạo">
                <Input rows={4} value={item.created_at} />
              </Form.Item>
              <Form.Item label="Trạng thái">
                {item.is_active == true ? (
                  <Text type="success">Active</Text>
                ) : (
                  <Text type="danger">Inactive</Text>
                )}
              </Form.Item>
              <Flex>
                {item.images.map((item) => (
                  <Image height={100} width={200} src={item} />
                ))}
              </Flex>
            </Form>
          </Modal>
        )}

        <Modal
          title="Vui lòng nhập lý do từ chối bài đăng này"
          open={isModalOpen1}
          onOk={handleOk1}
          onCancel={handleCancel1}
          footer={(_, { OkBtn1, CancelBtn1 }) => (
            <>
              <Button type="primary" icon={<CloseOutlined />} danger>
                Từ chối
              </Button>
            </>
          )}
        >
          <Form
            style={{ marginTop: '24px' }}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item label="Lý do từ chối">
              <Input placeholder="Nhập lý do từ chối..." />
            </Form.Item>
          </Form>
        </Modal>
      </Row>
    </div>
  );
}

export default DeveloperTable;
