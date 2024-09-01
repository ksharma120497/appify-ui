import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const RemoveButton = ({ remove }) => {
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
      icon={<DeleteOutlined />}
      onClick={remove}
    >
      REMOVE WIDGET
    </Button>
  );
};

export default RemoveButton;
