import React from "react";
import { Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";
const styles = {
  submitStyleInterface: {
    borderRadius: "5px",
    margin: "5px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    fontWeight: "600",
    textAlign: "center",
    position: "relative",
    top: "1.5rem",
    zIndex: "5",
    left: "43%",
  },
  pageViewStyle: {
    borderRadius: "5px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    fontWeight: "600",
    textAlign: "center",
    position: "relative",
    left: "1%",
    zIndex: "5",
  },
};

export const SaveButton = ({ onSave, fromPage }) => {
  return (
    <Button
      icon={<SaveOutlined />}
      style={
        fromPage === "pageView"
          ? styles.pageViewStyle
          : styles.submitStyleInterface
      }
      onClick={onSave}
    >
      {fromPage === "pageView"
        ? "SAVE PAGE"
        : fromPage === "interface"
        ? "SAVE"
        : fromPage === "saveDraft"
        ? "SAVE PAGE AS DRAFT"
        : ""}
    </Button>
  );
};

export default SaveButton;
