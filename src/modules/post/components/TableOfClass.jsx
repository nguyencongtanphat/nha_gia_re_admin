import React, { useState } from "react";
import { Row, Table, Modal, Form, Input, Button, Col, Flex, Typography, Image } from 'antd';
const { TextArea } = Input;
import { useNavigate } from "react-router-dom";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Column from "antd/es/table/Column";
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
};

function PostTable(props) {
    const { Title } = Typography;
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const [item, setItem] = useState({});

    const showModal = (props) => {
      //pre-process 
      
      console.log("model data here address popup",  props.address)
      // const address = props.address.detail;
      // props.address = address
      setIsModalOpen(true);
     
      setItem(props);
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
        <Flex gap="middle" justify="space-between" align="center">
          <Title level={4}>DS Bài đăng {props.abc} chờ duyệt</Title>
          <Flex gap = "small">
            <Button type="primary" size="middle" icon={<CheckOutlined/>} >
              Duyệt
            </Button>
            <Button type="primary" size="middle" danger={true} icon={<CloseOutlined/>} onClick={showModal1}>
              Từ chối
            </Button>
          </Flex>
        </Flex>
        <Row style={{ display: "flex" }}>
          <Table rowSelection
            style={{ width: "100%" }}
            rowClassName="custom-row"
            dataSource={props.data}
            columns={props.columns}
            onRow={(record) => ({
              onClick: () => {
                showModal(record)
              },
            })}
          />

          {/* POP-UP */}
          {/* <Modal title={item.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}> */}
          {
            Object.keys(item).length !== 0 && <Modal title={item.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
            footer={(_, { OkBtn, CancelBtn }) => (
              <>
                <Button icon={<CheckOutlined/>} type="primary">Duyệt</Button>
                <Button type="primary" icon={<CloseOutlined/>} danger onClick={showModal1}>Từ chối</Button>
              </>
          )}>

            {/* Form */}
            <Form
              style={{marginTop:"24px"}}
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item label="Người đăng" >
                <Input value={`${item.user.first_name} ${item.user.last_name}`} />
              </Form.Item>

              <Form.Item label="Ngày đăng">
                <Input value={item.posted_date}/>
              </Form.Item>
                
              <Form.Item label="Địa chỉ">
                <TextArea rows={2} value={item.address_detail}/>
              </Form.Item>
              
              <Form.Item label="Giá">
                <Input value={item.price}/>
              </Form.Item>

              <Form.Item label="Diện tích">
                <Input value={item.area}/>
              </Form.Item>

              <Form.Item label="Loại BĐS">
                <Input value={item.type_id}/>
              </Form.Item>
              {/* {Object.entries(item.features).map(([key, value]) => {
                const translatedObj = {
                  water_price : "Gía nước",
                  electric_price: "Gía điện",
                  furniture_status: "Tình trạng nội thất"
                }
                return <Form.Item key={key} label={translatedObj.key}>
                          <Input value={value} />
                        </Form.Item>
              })} */}
              <Form.Item label="Số phòng ngủ">
                <Input value="3"/>
              </Form.Item>

              <Form.Item label="Tổng số tầng">
                <Input value="5"/>
              </Form.Item>

              <Form.Item label="Giấy tờ pháp lý">
                <Input value="Đã có sổ hồng"/>
              </Form.Item>

              <Form.Item label="Loại hình nhà ở">
                <Input value="Căn hộ/Chung cư"/>
              </Form.Item>

              <Form.Item label="Mô tả">
                <TextArea rows={4} value={item.description}/>
              </Form.Item>

              <Flex>
                {item.images.map(item => <Image height={100} width={200} src={item}/>)}
              </Flex>
            </Form>
          </Modal>
          }
          

          <Modal title="Vui lòng nhập lý do từ chối bài đăng này" open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}
            footer={(_, { OkBtn1, CancelBtn1 }) => (
              <>
                <Button type="primary" icon={<CloseOutlined/>} danger>Từ chối</Button>
              </>
          )}>
          <Form
          style={{marginTop:"24px"}}
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          >
     
              <Form.Item label="Lý do từ chối">
                <Input placeholder="Nhập lý do từ chối..."/>
              </Form.Item>
        
          </Form>
            </Modal>
        </Row>
      </div>
      
    );
}

export default PostTable;