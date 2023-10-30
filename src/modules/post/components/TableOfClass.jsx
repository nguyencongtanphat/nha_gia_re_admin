import React from "react";
import { Row, Table } from 'antd';
import { useNavigate } from "react-router-dom";

function PostTable(props) {
    const navigate = useNavigate();
    return (
      <Row style={{ display: "flex" }}>
        <Table
          style={{ width: "90%" }}
          rowClassName="custom-row"
          dataSource={props.data}
          columns={props.columns}
          onRow={(record) => ({
            onClick: () => {
              console.log("record: ", record)
              navigate("/app/classes-semesters/" + record.idClassSemester);
            },
          })}
        />
      </Row>
    );
}

export default PostTable;