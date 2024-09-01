import { childDropdownData, parentDropdownData } from "./variables";
import validation from "../mock/validation.json";

export const effects = {
  hasChild: (widgetSelected) => {
    const widget = parentDropdownData.find((m) => m.text === widgetSelected);
    return widget && widget.details.child;
  },
  parentWidgetProperties: (widgetSelected) => {
    const selectedWidget = parentDropdownData.find(
      (m) => m.text === widgetSelected
    );
    return (selectedWidget && Object.keys(selectedWidget.details)) || [];
  },
  childWidgetProperties: (widgetSelected) => {
    if (widgetSelected === "TabBarView") return ["pageName"];
    const extractedWidget = parentDropdownData.find((m) => {
      return (
        m.details.child &&
        m.details.child.find((f) => f.text === widgetSelected)
      );
    });
    const selectedWidget =
      (extractedWidget &&
        extractedWidget.details.child.find((f) => f.text === widgetSelected)) ||
      childDropdownData.find((m) => m.text === widgetSelected);
    return (selectedWidget && Object.keys(selectedWidget.details)) || [];
  },
  parentWidgetDropdownData: () => parentDropdownData.map((m) => m.text),
  childWidgetDropdownData: (widgetSelected) => {
    const childDropdown =
      (parentDropdownData.find((m) => m.text === widgetSelected).details
        .child &&
        parentDropdownData
          .find((m) => m.text === widgetSelected)
          .details.child.map((m) => m.text)) ||
      [];
    return childDropdown.length > 0
      ? childDropdown
      : childDropdownData.map((m) => m.text);
  },
  dropDownProperty: (m) => m,
  checkMandatoryFields: (widgets) =>
    widgets.length > 0 &&
    widgets.some(
      (m) =>
        m.parentProperties === undefined ||
        Object.keys(m.parentProperties).length !==
          (validation[m.parentDropdown]
            ? validation[m.parentDropdown].length + 4
            : 4)
    ),
  checkChildMandatory: (val) => {
    return (
      val.parentWidgets &&
      val.parentWidgets.some(
        (m) =>
          m &&
          validation[m.parentDropdown] &&
          validation[m.parentDropdown].includes("child") &&
          (m.childWidgets === undefined || m.childWidgets[0] === undefined)
      )
    );
  },
};
