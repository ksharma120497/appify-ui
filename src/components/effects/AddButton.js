import React from "react";
import { Button } from "antd";
import { useForm } from "react-final-form";
import { PlusCircleOutlined} from "@ant-design/icons";
import {effects} from "../utils/helper";

const AddButton = ({ parentIndex,parentName, widgetSelected }) => {
    const [addWidgetButton, setAddWidgetButton] = React.useState(false);
    const { getState, mutators: { push },change } = useForm();

    const handleAddWidget = () => {
        if(widgetSelected === 'TabBar' && getState().values.parentWidgets[parentIndex].childWidgets === undefined)
            change(`${parentName}.childWidgets`, {childDropdown: "TabBarView", childProperties: {}});
        push(`${parentName}.childWidgets`, undefined)
        effects['checkChildMandatory'](getState().values) && setAddWidgetButton(true);
    }
  return (
    <Button
      disabled={addWidgetButton}
      style={{
        backgroundColor: "#5CB270",
        color: "white",
        borderRadius: "5px",
        marginLeft: "1%",
      }}
      icon={<PlusCircleOutlined />}
      onClick={handleAddWidget}
    >
      ADD CHILD WIDGET
    </Button>
  );
};

export default AddButton;
