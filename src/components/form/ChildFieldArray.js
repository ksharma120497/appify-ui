import React, { useState } from "react";
import { FieldArray } from "react-final-form-arrays";
import DropdownInput from "../fields/Dropdown";
import RemoveButton from "../effects/RemoveButton";
import TextInput from "../fields/TextInput";
import { effects } from "../utils/helper";
import { useForm } from "react-final-form";
import { get } from "lodash";

const ChildFieldArray = ({ parentIndex, parentName, widget }) => {
  const { getState } = useForm();
  return (
    <FieldArray name={`${parentName}.childWidgets`}>
      {({ fields }) =>
        fields.map((name, index) => {
          const widgetSelected = get(
            getState().values.parentWidgets[index],
            "parentDropdown",
            "Please Select"
          );
          const childWidgetSelected = get(
            getState().values.parentWidgets[parentIndex].childWidgets[index],
            "childDropdown",
            []
          );
          return (
            <div style={{ marginLeft: "50px" }}>
              <div
                style={{ color: "white", marginBottom: "-1%", marginTop: "1%" }}
              >
                {childWidgetSelected === "TabBarView" &&
                  "(Ensure the no. of Child Tabs match the no. of Pages entered in pageName)"}
              </div>
              <div key={name} style={{ display: "flex", marginTop: "2%" }}>
                <DropdownInput
                  dropdownType="widget"
                  name={`${name}.childDropdown`}
                  dropDownData={() =>
                    effects["childWidgetDropdownData"](widget)
                  }
                />
                {childWidgetSelected === "TabBarView" ||
                widgetSelected === "SnackBar" ||
                widgetSelected === "SizedBox" ? null : (
                  <RemoveButton
                    remove={() => {
                      fields.remove(index);
                    }}
                  />
                )}
              </div>
              {effects["childWidgetProperties"](childWidgetSelected).map(
                (m) => (
                  <TextInput
                    property={m}
                    name={`${name}.childProperties.${m}`}
                    widgetSelected={childWidgetSelected}
                  />
                )
              )}
            </div>
          );
        })
      }
    </FieldArray>
  );
};

export default ChildFieldArray;
