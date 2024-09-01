import React from "react";
import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
const styles = {
  submitStyleInterface: {
    borderRadius: "5px",
    margin: "5px",
    backgroundColor: "#449471",
    color: "white",
    border: "none",
    fontWeight: "600",
    textAlign: "center",
    position: "relative",
    top: "1.5rem",
    zIndex: "5",
    left: "43%",
  },
  submitButtonStyle: {
    borderRadius: "5px",
    margin: "5px",
    backgroundColor: "#449471",
    color: "white",
    border: "none",
    fontWeight: "600",
  },
};

export const SubmitButton = ({ submit, buttonFrom }) => {
  return (
    <Button
      icon={<SendOutlined />}
      type={"submit"}
      onClick={submit}
      style={
        buttonFrom === "interface"
          ? styles.submitStyleInterface
          : styles.submitButtonStyle
      }
    >
      {"SUBMIT"}
    </Button>
  );
};

export default SubmitButton;
