import ProgressMap from "./components/ProgressMap";
import InputForm from "./components/InputForm";
import { useState } from "react";

export default function App() {
  const [imdName, setImdName] = useState("IMD Name");
  const [target, setTarget] = useState(1000000);
  const [current, setCurrent] = useState(0);

  return (
    // <>
    // Hello World
    // </>
    <div className="app">
      {/* <h1>Hello World</h1> */}
      <InputForm
        imdName={imdName}
        setImdName={setImdName}
        current={current}
        setCurrent={setCurrent}
      />

      <ProgressMap
        imdName={imdName}
        current={current}
      />
    </div>
  );
}
