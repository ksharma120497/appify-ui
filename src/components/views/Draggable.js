import React, { useState } from "react";
import "./App.css";
import Box from "./Box";

const App = () => {
  const [dragId, setDragId] = useState({});
  const [boxes, setBoxes] = useState([
    {
      id: "Box1",
      color: "red",
      order: 1,
    },
    {
      id: "Box2",
      color: "green",
      order: 1,
    },
    {
      id: "Box3",
      color: "blue",
      order: 1,
    },
  ]);

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id)
  }

  const handleDrop = (ev) => {
    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);
    console.log(dragBox)
    console.log(dropBox)

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };

  return (
    <div className="App">
      {boxes
        .sort((a, b) => a.order - b.order)
        .map((box) => {
          return <Box key={box.id} boxColor={box.color} boxNumber={box.id} handleDrag={handleDrag} handleDrop={handleDrop}/>;
        })}
    </div>
  );
};

export default App;
