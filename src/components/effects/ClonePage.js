import React from "react";
import { Button } from "antd";
import { CopyOutlined} from "@ant-design/icons";

const ClonePage = ({ clone }) => {
  return (
    <Button
      style={{
        backgroundColor: "teal",
        color: "white",
        borderRadius: "5px",
        marginLeft: "1%",
        border: "none",
        fontWeight: "600",
      }}
      onClick={clone}
      icon={<CopyOutlined />}
    >
      CLONE PAGE
    </Button>
  );
};

export default ClonePage;
