import React, { useState } from "react";
import Interface from "./views/Interface";
import { message, Pagination, Switch } from "antd";
import {
  incrementOnAddPage,
  updatePageNumber,
  savePageDesign,
  dragDrop,
} from "../store/page/action";
import { useSelector } from "react-redux";
import {
  currentPageNumberSelector,
  pageDesignSelector,
  selectedWidget,
} from "../store/page/selector";
import PageView from "./views/PageView";
import AddPageButton from "./effects/AddPageButton";
import DrawerButton from "./effects/DrawerButoon";
import { get } from "lodash";

const headerStyle = {
  textAlign: "center",
  position: "relative",
  bottom: "1rem",
  display: "flex",
  alignItems: "center",
};
const switchStyle = {
  backgroundColor: "#5a008b",
  position: "relative",
  zIndex: "1",
  top: "1rem",
  left: "3%",
  width: "125px",
};
const paginationStyle = {
  textAlign: "right",
  marginRight: "3%",
  position: "relative",
  bottom: "0.6rem",
  color: "white",
};

const MainContainer = () => {
  const [totalPages, setTotalPages] = useState(10);
  const [toggle, setToggle] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [addPageButton, setAddPageButton] = useState(true);
  const pageNumber = useSelector(currentPageNumberSelector);
  const pageDesign = useSelector(pageDesignSelector);
  const selWidgts = useSelector(selectedWidget);

  const addPage = () => {
    const widgets = get(selWidgts, "widArr.parentWidgets", []);
    if (widgets.length === 0) {
      message.error("Please add atleast one widget to continue.");
      return;
    }
    console.log("check selWidgets.widArr", selWidgts.widArr);
    // updatePageNumber(Object.keys(pageDesign).length);
    setAddPageButton(true);
    incrementOnAddPage();
    handlePagination(10);
    setDisabled(false);
    savePageDesign(selWidgts.widArr, pageNumber);
    dragDrop(pageNumber);
    message.success("New page added");
  };
  const handlePagination = (x, y) =>
    y === "Template" ? setTotalPages(10 + x) : setTotalPages(totalPages + x);

  const handleOnPageChange = (number) => updatePageNumber(number);

  const handleOnSwitch = (val) => setToggle(val);

  return (
    <>
      <Switch
        style={switchStyle}
        disabled={disabled}
        defaultChecked
        onChange={handleOnSwitch}
        checkedChildren={"Standalone View"}
        unCheckedChildren={"Page View"}
      />
      {toggle && (
        <>
          <div style={headerStyle}>
            <h2
              style={{
                color: "white",
                margin: "auto",
                marginLeft: "43%",
                fontFamily: "sans-serif",
                fontWeight: "600",
              }}
            >
              <i>
                {/* Create Interface :{" "}
              {(pageDesign &&
                pageDesign[`Page${pageNumber}`] &&
                pageDesign[`Page${pageNumber}`].pageName) ||
                `Page ${pageNumber}`} */}
                Appify Interface
              </i>
            </h2>
            <AddPageButton disabled={addPageButton} addPage={addPage} />
          </div>
          <Interface
            index={pageNumber}
            enableSwitch={() => setDisabled(false)}
            toggleSwitch={() => setToggle(true)}
            pageDesign={pageDesign}
            pageView={false}
            toggleAddPage={() => setAddPageButton(false)}
            handlePagination={handlePagination}
            totalPages={totalPages}
          />
          <Pagination
            simple
            defaultCurrent={1}
            total={totalPages}
            onChange={handleOnPageChange}
            style={paginationStyle}
          />
        </>
      )}
      {!toggle && (
        <PageView
          addPage={addPage}
          pageView={true}
          toggleSwitch={(bool) => setToggle(bool)}
          handlePagination={handlePagination}
        />
      )}
    </>
  );
};

export default MainContainer;
