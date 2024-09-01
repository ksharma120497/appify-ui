import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  deletedPageNumbersSelector,
  pageDesignSelector,
} from "../../store/page/selector";
import { Button, Collapse, Input, message, Modal } from "antd";
import SubmitButton from "../effects/SubmitButton";
import { transformer } from "../utils/transformer";
import { service } from "../utils/service";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { PlusCircleOutlined } from "@ant-design/icons";
import ClonePage from "../effects/ClonePage";
import DeletePage from "../effects/DeletePage";
import ParentFieldArray from "../form/ParentFieldArray";
import SaveButton from "../effects/SaveButton";
import {
  decrementOnDeletePage,
  deletePage,
  incrementOnAddPage,
  savePageDesign,
  saveEditable,
  dragDrop
} from "../../store/page/action";
import { forIn } from "lodash";

const submitStyle = {
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
  bottom: "1rem",
  right: "1rem",
  marginRight: "3rem",
};
const styles = {
  addWidgetStyle: {
    borderRadius: "8px",
    backgroundColor: "#3ac15a",
    color: "#FFFFFF",
    border: "none",
    fontWeight: "600",
    marginLeft: "0.5rem",
  },
  container: {
    margin: "auto",
    width: "90%",
    border: "1px white solid",
    borderRadius: "10px",
    padding: "10px",
    height: "75vh",
    overflowY: "scroll",
    zIndex: "-1",
  },
  flexItems: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  editableText: {
    width: "20%",
    border: "0px",
    backgroundColor: "transparent",
    color: "white",
  },
};

const PageView = ({ handlePagination, pageView }) => {
  const pageDesign = useSelector(pageDesignSelector);
  const deletedPages = useSelector(deletedPageNumbersSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dragId, setDragId] = useState({});
  const [pageMain, setPageMain] = useState({})

  //Forcing the component to re render
  useEffect(() => {
    setPageMain(pageDesign)
  }, [pageDesign, pageMain])


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const submit = (val, i) => {
    message.success("Details have been saved successfully!");
    savePageDesign(val, i);
  };

  const handleAllSubmit = () => {
    const payload = [];
    forIn(pageDesign, (value, key) => {
      if (
        value.parentWidgets &&
        (value.parentWidgets.length === 0 ||
          value.parentWidgets[0] === undefined)
      ) {
        message.error("Please add a widget before submitting!");
      }
      const index = Number(key.substr(4));
      payload.push(transformer(value, index));
    });
    if (
      payload.every(
        (m) => m.widgets && m.widgets.length !== 0 && m.widgets[0] !== undefined
      )
    ) {
      service(payload);
    } else {
      message.error("Enter atleast one widget to continue!");
    }
    console.log("payload", payload);
  };

  const clone = (initialValues, i) => {
    incrementOnAddPage();
    handlePagination(10);
    savePageDesign(initialValues, Object.keys(pageDesign).length + 1);
    dragDrop(Object.keys(pageDesign).length + 1);
    console.log(pageDesign);
    message.success("Your Page Cloned Successfully");
  };

  const discard = (i) => {
    console.log(i);
    if (i === "Page1") {
      message.error("Can't delete Page 1!");
      setIsModalVisible(false);
    } else {
      let page = Number(i.substring(i.indexOf("e") + 1));
      console.log(page);
      decrementOnDeletePage();
      deletePage(page);
      setIsModalVisible(false);
    }
  };

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {

    const arrayOfObj = Object.entries(pageDesign).map((e) => ( { [e[0]]: e[1] } ));

    const dragBox = arrayOfObj.find((box) => Object.keys(box)[0] === dragId);
    const dropBox = arrayOfObj.find((box) => Object.keys(box)[0] === ev.currentTarget.id);

    
    const dragBoxOrder = dragBox[Object.keys(dragBox)[0]].order
    const dropBoxOrder = dropBox[Object.keys(dropBox)[0]].order


    const newBoxState = arrayOfObj.map((box) => {
      if (Object.keys(box)[0] === dragId) 
        box[Object.keys(box)[0]].order = dropBoxOrder;
      
      if (Object.keys(box)[0] === ev.currentTarget.id) 
        box[Object.keys(box)[0]].order = dragBoxOrder;
      
      return box;
    });

    let finalObject = {}
    for(let i in newBoxState){
      finalObject = {...newBoxState[i], ...finalObject}
    }
    //Updating the object so that the state re renders
    setPageMain(finalObject)
  };

  return (
    <>
      <div style={submitStyle}>
        <SubmitButton submit={handleAllSubmit} />
      </div>
      <div style={{ padding: "0 4rem" }}>
        {Object.keys(pageMain)
          .sort((a,b) => { return pageDesign[a]["order"] - pageDesign[b]["order"]})
          .filter(
            (m) => !deletedPages.includes(m.substring(m.indexOf("e") + 1))
          )
          .map((m, i) => {
            const initialValues = pageDesign && pageDesign[m];
            return (
              <Form
                initialValues={initialValues || {}}
                onSubmit={(val) => submit(val, i + 1)}
                mutators={{
                  ...arrayMutators,
                }}
              >
                {({
                  form: {
                    submit,
                    reset,
                    mutators: { push },
                  },
                }) => {
                  return (
                    <div
                      draggable={true}
                      id={m}
                      onDragOver={(ev) => ev.preventDefault()}
                      onDragStart={handleDrag}
                      onDrop={handleDrop}
                    >
                      <Collapse>
                        <Collapse.Panel
                          header={
                            <Input
                              style={styles.editableText}
                              placeholder={m + " (Click to edit)"}
                              onChange={(e) =>
                                saveEditable(e.target.value, i + 1)
                              }
                              value={initialValues.pageName}
                            />
                          }
                        >
                          <div style={styles.container}>
                            <div style={styles.flexItems}>
                              <Button
                                icon={<PlusCircleOutlined />}
                                style={styles.addWidgetStyle}
                                onClick={() => push(`parentWidgets`, undefined)}
                              >
                                {"ADD WIDGET"}
                              </Button>
                              <>
                                <ClonePage
                                  clone={() => clone(initialValues, i)}
                                />
                                <DeletePage discard={showModal} />
                                <Modal
                                  title="Alert!"
                                  visible={isModalVisible}
                                  onOk={() => discard(m)}
                                  onCancel={handleCancel}
                                >
                                  <p>You are about to delete this page!</p>
                                  <p>
                                    Click on OK to confirm deletion, else click
                                    on Cancel.
                                  </p>
                                </Modal>
                                <SaveButton
                                  fromPage="pageView"
                                  onSave={submit}
                                />
                              </>
                            </div>
                            <ParentFieldArray
                              addPg={reset}
                              pageView={pageView}
                              // setTextIpValidated={setTextIpValidated}
                            />
                          </div>
                          );
                        </Collapse.Panel>
                      </Collapse>
                    </div>
                  );
                }}
              </Form>
            );
          })}
      </div>
    </>
  );
};

export default PageView;
