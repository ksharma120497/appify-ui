import { Button, message } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import ParentFieldArray from "../form/ParentFieldArray";
import { dragDrop, savePageDesign, savePayload } from "../../store/page/action";
import { useSelector } from "react-redux";
import {
  currentPageNumberSelector,
  deletedPageNumbersSelector,
  previousPagePayloadSelector,
  selectedWidget,
} from "../../store/page/selector";
import SubmitButton from "../effects/SubmitButton";
import { transformer } from "../utils/transformer";
import { service } from "../utils/service";
import SaveButton from "../effects/SaveButton";
import { effects } from "../utils/helper";
import { modal } from "../utils/modals";
import SuggestibleButton from "../effects/SuggestibleButton";
import DrawerButton from "../effects/DrawerButoon";
import VoiceCommandButton from "../effects/VoiceCommandButton";

const styles = {
  addWidgetStyle: {
    borderRadius: "8px",
    backgroundColor: "#3ac15a",
    color: "#FFFFFF",
    border: "none",
    marginLeft: "5%",
    marginBottom: "0.5%",
  },
  container: {
    margin: "auto",
    width: "94%",
    border: "1px white solid",
    borderRadius: "10px",
    padding: "10px",
    height: "77vh",
    overflowY: "scroll",
    zIndex: "-1",
  },
  flexItems: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
};

const Interface = ({
  enableSwitch,
  pageDesign,
  pageView,
  index,
  toggleAddPage,
  handlePagination,
  totalPages,
}) => {
  const pageNumber = useSelector(currentPageNumberSelector);
  const payload = useSelector(previousPagePayloadSelector);
  const deletedPages = useSelector(deletedPageNumbersSelector);
  const selWidgts = useSelector(selectedWidget);
  const initialValues = pageDesign && pageDesign[`Page${index}`];
  const onSave = (val, valid) => {
    if (!valid || !selWidgts) {
      message.error("Please enter mandatory fields!");
      return;
    }
    enableSwitch();
    toggleAddPage();
    savePageDesign(val, pageNumber);
    dragDrop(pageNumber);
    savePayload(transformer(val, pageNumber));
    message.success("Details have been saved successfully!");
  };

  const handleOnSubmit = (val) => {
    if (
      Object.keys(val).length === 0 ||
      !("parentWidgets" in val) ||
      val.parentWidgets[0] === undefined ||
      effects["checkChildMandatory"](val)
    ) {
      message.error("Please add at least one widget to continue.");
      return;
    }
    enableSwitch();
    toggleAddPage();
    savePageDesign(val, pageNumber);
    savePayload(transformer(val, pageNumber));
    service(payload);
    console.log("payload", payload);
  };
  return (
    <Form
      initialValues={initialValues || {}}
      onSubmit={handleOnSubmit}
      mutators={{
        ...arrayMutators,
      }}
    >
      {({
        form: {
          submit,
          reset,
          getState,
          change,
          mutators: { push },
        },
        valid,
      }) => {
        return deletedPages.includes(pageNumber) ? (
          modal("OOPS! This page was deleted in PageView", "error")
        ) : (
          <>
            <div style={styles.container}>
              <div style={styles.flexItems}>
                <div
                  style={{
                    position: "fixed",
                    width: "30%",
                    zIndex: "1",
                    marginLeft: "32%",
                    marginTop: "2%",
                    borderRadius: "10px",
                    paddingTop: "5px",
                  }}
                >
                  <DrawerButton
                    change={change}
                    handlePagination={handlePagination}
                    totalPages={totalPages}
                    selWidgts={selWidgts}
                  />
                  <Button
                    icon={<PlusCircleOutlined />}
                    style={styles.addWidgetStyle}
                    onClick={() => {
                      push("parentWidgets", undefined);
                      message.success("Widget added!");
                    }}
                  >
                    {"ADD WIDGET"}
                  </Button>
                  <VoiceCommandButton />
                </div>
              </div>

              <ParentFieldArray
                addPg={reset}
                pageView={pageView}
                // setTextIpValidated={setTextIpValidated}
              />
            </div>

            {!pageView ? (
              <div
                style={{
                  display: "flex",
                  marginTop: "-0.5%",
                }}
              >
                <SaveButton
                  fromPage="interface"
                  onSave={() => onSave(getState().values, valid)}
                />
                <SubmitButton buttonFrom="interface" submit={submit} />
              </div>
            ) : null}
          </>
        );
      }}
    </Form>
  );
};

export default Interface;
