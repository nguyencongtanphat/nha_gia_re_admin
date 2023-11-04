import React from 'react';
import {Tabs, Card, Row, Col, Typography, Button, Select, Table, Space} from 'antd';
import Search from 'antd/es/input/Search';
import { useState, useRef, useEffect } from 'react';
import { useNavigate,  useLoaderData, useFetcher, Form, redirect } from 'react-router-dom';
import PostTable from '../components/TableOfClass';
import ApiService from '../../../service/ApiService';
import Breadcrumbs from '../../../globalComponents/BreadCrumb/BreadCrumb';



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

//function loader to call API
export async function loader() {
  const posts = await ApiService.get("posts?post_status[eq]='pending'");
  if (!posts) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { posts };
}

export async function approveAction({ request, params }) {
  try{
    const data = await request.formData()
    const id = data.get("id")
    const result =  await ApiService.post({url:`posts/approve?id=${id}`, data:{}});
    if(result.status == "success"){
      alert("approve success")
    }else{
      alert("error")
    }
    return redirect("/pending_post");
  }catch(e){
    console.log(e)
  }
}

function PendingPost(props) {
  const navigate = useNavigate()
  const { Title } = Typography;
  const {posts} = useLoaderData()
  console.log("data loader", posts)
 // const [pendingPosts, setPendingPosts] = useState([])

  
  const columns = [
    {
      title: "Tên",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Người đăng",
      dataIndex: "user",
      key: "user",
      render: user => user.first_name + " "+ user.last_name,
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
      dataIndex: "posted_date",
      key: "posted_date",
    },
    {
      title: "Loại bất động sản",
      dataIndex: "type_id",
      key: "type_id",
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
           <Form
            method="post"
            action="approve"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button 
              onClick={()=>{console.log("click")}} 
              type="submit"
              name="id"
              value={record.id}>
                Approve
            </button>
          </Form>
          {/* <a>Delete</a> */}
        </Space>
      ),
    },
  ];
  const tabs = [
    {
      key: '1',
      label: 'Cho thuê',
      children:<PostTable columns={columns} data={posts}/>,
    },
    {
      key: '2',
      label: 'Cần bán',
      children: <PostTable columns={columns} data={data2}/>,
    },
  ];
  return (
    <div>
      <Card>
      <Breadcrumbs></Breadcrumbs>
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