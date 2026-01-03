import { useState } from "react";
import InputForm from "./components/InputForm";
import ProgressMap from "./components/ProgressMap";
import { IMDS } from "./data/imds";
import IMDInfoPanel from "./components/IMDInfoPanel";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";

export default function App() {
  const [selectedIMD, setSelectedIMD] = useState("");
  const [current, setCurrent] = useState(0);

  const exportRef = useRef(null);
  const imd = IMDS.find((i) => i.code === selectedIMD);

  const downloadImage = async () => {
    if (!exportRef.current) return;

    const dataUrl = await htmlToImage.toPng(exportRef.current, {
      pixelRatio: 2,
      backgroundColor: "#eaf4ff",
    });

    const link = document.createElement("a");
    link.download = `${imd?.name || "IMD"}-progress.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="app">
      <InputForm
        selectedIMD={selectedIMD}
        setSelectedIMD={setSelectedIMD}
        current={current}
        setCurrent={setCurrent}
      />

      <button
        onClick={downloadImage}
        style={{
          marginBottom: "12px",
          width: "100%",
          padding: "10px",
          fontSize: "14px",
          fontWeight: 600,
          borderRadius: "8px",
          border: "none",
          background: "#0078ff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Download Image
      </button>

      <div ref={exportRef} className="export-area">
        <IMDInfoPanel imd={imd} current={current} />
        <ProgressMap imd={imd} current={current} />
      </div>
    </div>
  );
}
