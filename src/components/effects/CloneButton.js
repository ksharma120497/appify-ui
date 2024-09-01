import React from "react";
import { Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useForm } from "react-final-form";
import { get } from "lodash";

const CloneButton = ({ index }) => {
  const { change, getState } = useForm();

  const widgetSelected = get(
    getState().values.parentWidgets[index],
    "parentDropdown",
    "Please Select"
  );
  const parentProperties = get(
    getState().values.parentWidgets[index],
    "parentProperties",
    "Please Select"
  );
  const childWidgets = get(
    getState().values.parentWidgets[index],
    "childWidgets",
    false
  );
  const handleChange = () => {
    const length = getState().values.parentWidgets.length;
    change(`parentWidgets[${length}].parentDropdown`, widgetSelected);
    change(`parentWidgets[${length}].parentProperties`, parentProperties);
    childWidgets &&
      childWidgets.map((m, i) => {
        change(
          `parentWidgets[${length}].childWidgets[${i}].childDropdown`,
          m.childDropdown
        );
        change(
          `parentWidgets[${length}].childWidgets[${i}].childProperties`,
          m.childProperties
        );
      });
    message.success("Widget cloned successfully!");
  };
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
      icon={<CopyOutlined />}
      onClick={handleChange}
    >
      CLONE WIDGET
    </Button>
  );
};

export default CloneButton;
