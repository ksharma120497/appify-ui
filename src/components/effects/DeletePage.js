import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const DeletePage = ({ discard }) => {
  return (
    <Button
      style={{
        backgroundColor: "#d40000",
        color: "white",
        borderRadius: "5px",
        marginLeft: "1%",
        border: "none",
        fontWeight: "600",
      }}
      onClick={discard}
      icon={<DeleteOutlined />}
    >
      DELETE PAGE
    </Button>
  );
};

export default DeletePage;
