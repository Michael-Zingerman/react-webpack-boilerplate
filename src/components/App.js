import React from "react";
import { TestForm } from "./StoreForm/StoreForm";
import { useStore } from "./store/StoreContext"; //"../store/StoreContext";
import { useObserver } from "mobx-react";

export default function App() {
  const dataStore = useStore();
  return useObserver(() => (
    <>
      <ul>
        {dataStore.data.map((data) => (
          <li onClick={() => dataStore.removeData(data.text)} key={data.text}>
            {data.text}
          </li>
        ))}
      </ul>

      <TestForm />
    </>
  ));
}
