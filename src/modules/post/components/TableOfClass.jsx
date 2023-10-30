import React from "react";
import { Row, Table, Col, Flex, Typography } from 'antd';

import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
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
    return (
      <div>
        <Flex gap="middle" justify="space-between" align="center">
          <Title level={4}>DS Bài đăng cho thuê chờ duyệt</Title>
          <Flex gap = "small">
            <Button type="primary" size="middle">
              Duyệt
            </Button>
            <Button type="primary" size="middle" danger={true}>
              Từ chối
            </Button>
          </Flex>
        </Flex>
        <Row style={{ display: "flex" }}>
          <Table
            style={{ width: "100%" }}
            rowClassName="custom-row"
            dataSource={props.data}
            columns={props.columns}
            rowSelection={ rowSelection }
            // onRow={(record) => ({
            //   onClick: () => {
            //     console.log("record: ", record)
            //     navigate("/app/classes-semesters/" + record.idClassSemester);
            //   },
            // })}
          />
        </Row>
      </div>
    );
}

export default PostTable;