import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import commands from "../mock/command.json";
import { Button } from "antd";
import { AudioFilled } from "@ant-design/icons";
import { useForm } from "react-final-form";

const VoiceCommandButton = () => {
  const lengthOfWidgets = React.useRef(0);
  const { transcript } = useSpeechRecognition();
  const { change } = useForm();
  transcript !== undefined &&
    transcript !== "" &&
    change(
      `parentWidgets[${lengthOfWidgets.current}].parentDropdown`,
      commands[transcript]
    );
  return (
    <Button
      style={{ marginLeft: "1%" }}
      onClick={() => {
        SpeechRecognition.startListening();
        commands[transcript] && lengthOfWidgets.current++;
      }}
      shape="circle"
      icon={<AudioFilled />}
    />
  );
};

export default VoiceCommandButton;
