import { Button, message } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { useState } from "react";
import { useForm } from "react-final-form";
import { get } from "lodash";

const SuggestibleButton = ({ index }) => {
  const testDummy = {
    Card: ["Text", "Icon", "CheckBox", "ListView", "TextField", "RaisedButton"],
    Icon: ["Text", "TextField", "CheckBox", "Flatbutton"],
    TextField: [
      "Flatbutton",
      "RaisedButton",
      "OutlineButton",
      "Icon",
      "CheckBox",
    ],
    TimePicker: ["DatePicker", "Text"],
    DatePicker: ["TimePicker", "Text"],
    CheckBox: ["Text", "Icon"],
    Switch: ["Text"],
    Slider: ["Text", "Icon"],
    Flatbutton: [
      "RaisedButton",
      "OutlineButton",
      "FloatingActionButton",
      "IconButton",
    ],
    RaisedButton: [
      "Flatbutton",
      "OutlineButton",
      "FloatingActionButton",
      "IconButton",
    ],
    OutlineButton: [
      "RaisedButton",
      "Flatbutton",
      "FloatingActionButton",
      "IconButton",
    ],
    FloatingActionButton: [
      "RaisedButton",
      "OutlineButton",
      "Flatbutton",
      "IconButton",
    ],
    IconButton: [
      "RaisedButton",
      "OutlineButton",
      "FloatingActionButton",
      "Flatbutton",
    ],
    Container: [
      "Row",
      "Column",
      "TextField",
      "Icon",
      "FlatButton",
      "Card",
      "ListView",
    ],
    Row: ["COlumn"],
    Column: ["Row"],
    AppBar: ["TabBar", "BottomNavigationBar"],
    TabBar: ["AppBar", "BottomNavigationBar", "Card"],
    BottomNavigationBar: ["TabBar", "AppBar"],
    PopupMenuButton: ["DropdownButton", "Text", "Icon"],
    DropdownButton: ["PopupMenuButton", "Text", "Icon"],
    Text: ["RichText", "Icon", "Card", "Flatbutton", "SelectableText"],
    RichText: ["Text", "Icon", "SelectableText"],
    SelectableText: ["Icon", "RichText"],
    RangeSlider: ["Text", "Icon", "FlatButton"],
    Divider: ["Text"],
    ListView: ["Card", "Listtile"],
    ToolTip: ["Text"],
    SimpleDialog: ["Text"],
    SnackBar: ["SimpleDialog"],
    SizedBox: ["Container", "Row", "Column"],
  };
  const { change, getState } = useForm();
  const [suggestibleReset, setSuggestibleReset] = useState(false);
  const length =
    getState().values.parentWidgets && getState().values.parentWidgets.length;

  const widgetSelected =
    getState().values.parentWidgets &&
    get(
      getState().values.parentWidgets[index],
      "parentDropdown",
      "Please Select"
    );

  return (
    <div style={{ marginBottom: "-1%", display: "flex", marginTop: "1%" }}>
      {widgetSelected !== "Please Select" &&
        widgetSelected !== undefined &&
        testDummy[widgetSelected] && (
          <h4 style={{ color: "white", marginTop: "0.5%", marginRight: "1%" }}>
            Commonly paired with
          </h4>
        )}
      {widgetSelected &&
        widgetSelected !== "Please Select" &&
        testDummy[widgetSelected] &&
        testDummy[widgetSelected].map((i) => {
          return (
            <>
              <Button
                ghost
                onClick={() => {
                  getState().values.parentWidgets &&
                    change(
                      `parentWidgets[${
                        getState().values.parentWidgets.length
                      }].parentDropdown`,
                      i
                    );
                  setSuggestibleReset(false);
                }}
                style={{
                  marginRight: "0.5%",
                  borderRadius: "16px",
                }}
              >
                <b>{i}</b>
              </Button>
            </>
          );
        })}
      ;
    </div>
  );
};

export default SuggestibleButton;
