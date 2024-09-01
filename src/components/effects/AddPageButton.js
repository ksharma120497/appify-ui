import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const addPageStyle = {
  borderRadius: "5px",
  margin: "5px",
  right: "3%",
  backgroundColor: "#1678c2",
  color: "white",
  border: "none",
  fontWeight: "600",
};

export const AddPageButton = ({ disabled, addPage }) => {
  return (
    <Button
      disabled={disabled}
      style={addPageStyle}
      onClick={addPage}
      icon={<PlusCircleOutlined />}
    >
      {"ADD PAGE"}
    </Button>
  );
};

export default AddPageButton;
