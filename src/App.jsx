import { useState } from "react";
import InputForm from "./components/InputForm";
import ProgressMap from "./components/ProgressMap";
import { IMDS } from "./data/imds";

export default function App() {
  const [selectedIMD, setSelectedIMD] = useState("");
  const [current, setCurrent] = useState(0);

  const imd = IMDS.find((i) => i.code === selectedIMD);

  return (
    <div className="app">
      <InputForm
        selectedIMD={selectedIMD}
        setSelectedIMD={setSelectedIMD}
        current={current}
        setCurrent={setCurrent}
      />

      <ProgressMap
        imd={imd}
        current={current}
      />
    </div>
  );
}
