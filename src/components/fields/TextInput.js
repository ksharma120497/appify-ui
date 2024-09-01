import React from "react";
import { Input, Tooltip, Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import toolTip from "../mock/tooltip.json";
import { Field } from "react-final-form";
import validation from "../mock/validation.json";
import { isNaN, toNumber } from "lodash";

const required = (property, widgetSelected) => (value) => {
  const addBasicValidation = ["top", "left", "width", "height"];
  const isRequiredError =
    addBasicValidation.includes(property) ||
    (validation[widgetSelected] &&
      validation[widgetSelected].includes(property));
  return !value && isRequiredError;
};

const isTypeError = (property) => (value) => {
  if (toolTip[property] && toolTip[property].type === "string" && value)
    return !isNaN(toNumber(value));
  else if (toolTip[property] && toolTip[property].type === "number" && value)
    return isNaN(toNumber(value));
  else if (toolTip[property] && toolTip[property].type === "boolean" && value)
    return value !== "true" && value !== "false";
};

const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const style = {
  validated: {
    width: "30%",
    marginTop: "1%",
    marginLeft: "2%",
  },
  errorStyle: {
    width: "30%",
    marginTop: "1%",
    marginLeft: "2%",
    border: "2px solid red",
  },
  colorPicker: {
    marginRight: "8px",
    width: "25px",
    borderRadius: "100%",
  },
};
const allValidatingField = ["top", "left", "width", "height"];

const TextInput = ({ property, name, widgetSelected, setTextIpValidated }) => {
  return (
    <Field
      name={name}
      validate={composeValidators(
        required(property, widgetSelected),
        isTypeError(property)
      )}
    >
      {({ input, meta, ...rest }) => {
        return (
          <Popover
            content={
              toolTip[property] && toolTip[property].tooltip
                ? toolTip[property].tooltip
                : toolTip[`${widgetSelected}.${property}`].tooltip
            }
          >
            <Input
              name={name}
              addonBefore={
                (validation[widgetSelected] &&
                  validation[widgetSelected].includes(property)) ||
                allValidatingField.includes(property)
                  ? property + "*"
                  : property
              }
              placeholder={
                toolTip[property] && toolTip[property].placeholder
                  ? toolTip[property].placeholder
                  : toolTip[`${widgetSelected}.${property}`].placeholder
              }
              style={
                meta.error && meta.touched ? style.errorStyle : style.validated
              }
              suffix={
                <>
                  {toolTip[property] && toolTip[property].type === "color" && (
                    <input
                      value={input.value}
                      style={style.colorPicker}
                      type={"color"}
                      onChange={(e) => {
                        input.onChange(e.target.value);
                      }}
                    />
                  )}
                  <Tooltip
                    title={
                      toolTip[property] && toolTip[property].info
                        ? toolTip[property].info
                        : toolTip[`${widgetSelected}.${property}`].info
                    }
                  >
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                </>
              }
              onChange={(e, value) => input.onChange(value)}
              {...input}
              {...rest}
            />
          </Popover>
        );
      }}
    </Field>
  );
};

export default TextInput;
