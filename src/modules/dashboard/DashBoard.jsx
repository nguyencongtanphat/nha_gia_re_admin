import React from 'react'
import './DashBoard.module.css'
import { Col, Divider, Row } from 'antd';
import AppCircleChart from '../dashboard/AppCircleChart';
import DoubleLineChart from '../dashboard/DoubleLineChart';
import FiveBarChart from '../dashboard/FiveBarChart';
import ListUser from '../dashboard/ListUser';


const style = {
  background: '#FFFFFF',
  padding: '24px 24px 48px 24px',
  border: '8px solid #F0F2F5'
};

export default function DashBoard() {
  return (
    <Row gutter={[16, 12]} style={{backgroundColor:"#F0F2F5", padding: "24px 12px"}}>
      <Col className="gutter-row" span={6} style={style}>
        <div style={{color:"#8C8C8C", fontSize:"14px", marginBottom:"20px"}}>Số bài đăng chờ duyệt</div>
        <div style={{fontSize:"30px", fontWeight:"600"}}>126.060</div>
        <Divider/>
        <div>Tổng số bài đăng đã duyệt: 230.000</div>
      </Col>

      <Col className="gutter-row" span={6} style={style}>
        <div style={{color:"#8C8C8C", fontSize:"14px", marginBottom:"20px"}}>Tổng số người dùng</div>
        <div style={{fontSize:"30px", fontWeight:"600"}}>8.846</div>
        <Divider/>
        <div>Số người dùng đã xác thực: 12.324</div>
      </Col>

      <Col className="gutter-row" span={6} style={style}>
        <div style={{color:"#8C8C8C", fontSize:"14px", marginBottom:"20px"}}>Số tố cáo chờ duyệt</div>
        <div style={{fontSize:"30px", fontWeight:"600"}}>34.201</div>
        <Divider/>
        <div>Số báo cáo đã duyệt: 232.100 </div>
      </Col>


      <Col className="gutter-row" span={6} style={style}>
        <div style={{color:"#8C8C8C", fontSize:"14px", marginBottom:"20px"}}>Số bài blog đã đăng</div>
        <div style={{fontSize:"30px", fontWeight:"600"}}>1.360</div>
      </Col>


      {/* BIEU DO DUONG */}
      <Col className="gutter-row" span={24}>
        <div style={style}>
          <div>
          <div style={{fontSize:"16px", fontWeight:"600"}}>Số lượng bài đăng bán / cho thuê trong năm 2023</div>
            <Divider/>
            <div style={{display:"flex", alignItems: "flex-start", gap:"24px"}}>
              <div style={{width:"75%"}}>
                <DoubleLineChart/>
              </div>

              <div style={{fontSize:"14px", fontWeight:"400"}}>
                Top người dùng có nhiều bài đăng nhất
                <ListUser/>
              </div>
              </div>
            </div>
          </div>
      </Col>

{/* BIỂU ĐỒ CỘT */}
<Col className="gutter-row" span={12}>
        <div style={style}>
        <div style={{fontSize:"16px", fontWeight:"600"}}>Top gói dịch vụ được sử dụng nhiều nhất</div>
          <Divider/>
          <FiveBarChart/>
          </div>
      </Col>

      {/* BIEU DO TRON */}
      <Col className="gutter-row" span={12}>
        <div style={style}>
        <div style={{fontSize:"16px", fontWeight:"600"}}>Tỉ lệ các loại bất động sản trong các bài đăng</div>
          <Divider/>
          <AppCircleChart/>
          </div>
      </Col>
    </Row>
  )
}
