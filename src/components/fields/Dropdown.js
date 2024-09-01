import React, { useState } from "react";
import { Select } from "antd";
import "antd/dist/antd.css";
import { Field } from "react-final-form";
import validation from "../mock/validation.json";

const styles = {
  widgetDropdown: {
    width: 200,
    borderRadius: "8px",
  },
  propertyDropdownLabel: {
    height: "37px",
    width: "30%",
    marginTop: "0.45%",
    marginLeft: "0.65%",
  },
  propertyDropdown: {
    height: "90%",
    width: "90%",
    marginLeft: "0.7%",
  },
};

const DropdownInput = ({
  name,
  dropDownData,
  dropdownType,
  property,
  widgetSelected,
}) => {
  return (
    <Field name={name}>
      {({ input, ...rest }) =>
        dropdownType === "property" ? (
          <div className="inlineLabel" style={styles.propertyDropdownLabel}>
            <div
              style={{
                margin: "0.5rem",
                marginTop: "0.4rem",
                width: "280px",
                textAlign: "center",
              }}
            >
              {validation[widgetSelected] &&
              validation[widgetSelected].includes(property)
                ? property + "*"
                : property}
            </div>
            <Select
              showSearch
              placeholder="Select Widget"
              onChange={(e, value) => input.onChange(e)}
              name={name}
              style={
                dropdownType === "widget"
                  ? styles.widgetDropdown
                  : styles.propertyDropdown
              }
              {...input}
              {...rest}
            >
              {dropDownData().map((data) => (
                <Select.Option key={data}>{data}</Select.Option>
              ))}
            </Select>
          </div>
        ) : (
          <Select
            showSearch
            placeholder="Select Widget"
            onChange={(e, value) => input.onChange(e)}
            name={name}
            style={
              dropdownType === "widget"
                ? styles.widgetDropdown
                : styles.propertyDropdown
            }
            {...input}
            {...rest}
          >
            {dropDownData().map((data) => (
              <Select.Option key={data}>{data}</Select.Option>
            ))}
          </Select>
        )
      }
    </Field>
  );
};

export default DropdownInput;
