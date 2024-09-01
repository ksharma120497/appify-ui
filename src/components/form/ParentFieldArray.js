import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { currentPageNumberSelector } from "../../store/page/selector";
import { saveWidget } from "../../store/page/action";
import { FieldArray } from "react-final-form-arrays";
import DropdownInput from "../fields/Dropdown";
import { effects } from "../utils/helper";
import AddButton from "../effects/AddButton";
import RemoveButton from "../effects/RemoveButton";
import TextInput from "../fields/TextInput";
import ChildFieldArray from "./ChildFieldArray";
import { useForm } from "react-final-form";
import { get } from "lodash";
import { Collapse, message, Button } from "antd";
import CloneButton from "../effects/CloneButton";
import SuggestibleButton from "../effects/SuggestibleButton";
import tooltip from "../mock/tooltip.json";

const ParentFieldArray = ({ addPg, pageView, setTextIpValidated }) => {
  const [isSuggestible, setIsSuggestible] = useState(false);
  const [suggestibleIndex, setSuggestibleIndex] = useState([]);
  const { getState } = useForm();
  const pageNumber = useSelector(currentPageNumberSelector);

  useEffect(() => {
    if (
      getState().values.parentWidgets &&
      getState().values.parentWidgets.length > 0 &&
      getState().values.parentWidgets[0] !== undefined
    ) {
      saveWidget(pageNumber, getState().values);
    }
  }, [getState().values.parentWidgets]);

  useEffect(() => {
    console.log("check pageNumber", pageNumber);
    if (!pageView) {
      addPg && addPg();
    }
  }, [pageNumber]);

  const showSuggestible = (index) => {
    let keyArray = [...suggestibleIndex];
    if (index > -1) {
      if (suggestibleIndex.includes(index)) {
        keyArray = keyArray.filter((i) => i !== index);
      } else {
        keyArray.push(index);
      }
    }
    setSuggestibleIndex(keyArray);
  };

  return (
    <div>
      <FieldArray name={"parentWidgets"}>
        {({ fields }) =>
          fields.map((name, index) => {
            const widgetSelected = get(
              getState().values.parentWidgets[index],
              "parentDropdown",
              "Please Select"
            );
            return (
              <>
                <div
                  onMouseEnter={() => showSuggestible(index)}
                  onMouseLeave={() => setSuggestibleIndex([-1])}
                >
                  <Collapse
                    key={name}
                    style={{ marginTop: "3.5%", zIndex: "-1" }}
                    defaultActiveKey={["1"]}
                  >
                    <Collapse.Panel header={widgetSelected} key={"1"}>
                      <div style={{ display: "flex" }}>
                        <DropdownInput
                          dropdownType="widget"
                          style={{ borderRadius: "8px" }}
                          name={`${name}.parentDropdown`}
                          dropDownData={effects["parentWidgetDropdownData"]}
                        />
                        {effects["hasChild"](widgetSelected) && (
                          <AddButton
                            parentIndex={index}
                            parentName={name}
                            widgetSelected={widgetSelected}
                          />
                        )}
                        <CloneButton index={index} />
                        <RemoveButton
                          remove={() => {
                            fields.remove(index);
                            message.error("Widget removed!");
                          }}
                        />
                      </div>
                      {
                        <>
                          {effects["parentWidgetProperties"](
                            widgetSelected
                          ).map(
                            (m) =>
                              m !== "child" &&
                              ((tooltip[m]
                                ? tooltip[m].field
                                : tooltip[`${widgetSelected}.${m}`].field) ===
                              "text" ? (
                                <TextInput
                                  property={m}
                                  name={`${name}.parentProperties.${m}`}
                                  widgetSelected={widgetSelected}
                                  // setTextIpValidated={setTextIpValidated}
                                />
                              ) : (
                                <DropdownInput
                                  property={m}
                                  widgetSelected={widgetSelected}
                                  dropdownType="property"
                                  name={`${name}.parentProperties.${m}`}
                                  dropDownData={() =>
                                    effects["dropDownProperty"](
                                      tooltip[m].field
                                    )
                                  }
                                />
                              ))
                          )}
                        </>
                      }
                      {effects["hasChild"] && (
                        <ChildFieldArray
                          parentName={name}
                          widget={widgetSelected}
                          parentIndex={index}
                        />
                      )}
                      {suggestibleIndex.includes(index) ? (
                        <SuggestibleButton index={index} />
                      ) : (
                        <></>
                      )}
                    </Collapse.Panel>
                  </Collapse>
                </div>
              </>
            );
          })
        }
      </FieldArray>
    </div>
  );
};

export default ParentFieldArray;
