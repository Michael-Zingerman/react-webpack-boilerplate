import React from "react";
import { useStore } from "../store/StoreContext";

export const TestForm = () => {
  const [dataText, setDataText] = React.useState("");
  const dataStore = useStore();

  return (
    <>
      <input
        value={dataText}
        onChange={(e) => setDataText(e.target.value)}
        type="text"
      />
      <button onClick={() => dataStore.addData(dataText)}>Add Data</button>
    </>
  );
};
