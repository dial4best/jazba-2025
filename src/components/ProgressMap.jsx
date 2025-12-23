import { getCurrentLevel } from "../utils/levels";
import { MILESTONES } from "../utils/milestones";
import Milestone from "./Milestone";
import Pointer from "./Pointer";
import SvgPath from "./SvgPath";
import Destination from "./Destination";
import thailandImg from "../assets/thailand.png";
import taiwanImg from "../assets/taiwan.png";
import munichImg from "../assets/munich.png";
import bannerImg from "../assets/banner.png";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";

export default function ProgressMap({ imdName, current }) {
  const level = getCurrentLevel(current);

  const pointerPosition =
    MILESTONES.find((m) => m.step === level) || MILESTONES[0]; // fallback to step 1

  const mapRef = useRef(null);

  const downloadImage = async () => {
    if (!mapRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(mapRef.current, {
        cacheBust: true,
        pixelRatio: 2, // sharper image
        backgroundColor: "#eaf4ff",
      });

      const link = document.createElement("a");
      link.download = `${imdName || "IMD"}-progress.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <div>
      <div className="map-container" ref={mapRef}>
        <img
          src={bannerImg}
          alt="Campaign Banner"
          className="campaign-banner"
        />

        <div className="imd-name">{imdName}</div>

        <SvgPath activeLevel={level} />

        {/* Thailand */}
        <Destination
          src={thailandImg}
          unlocked={level >= 5}
          style={{ top: 530, left: 10 }}
        />

        {/* Taiwan */}
        <Destination
          src={taiwanImg}
          unlocked={level >= 8}
          style={{ top: 360, left: 240 }}
        />

        {/* Munich */}
        <Destination
          src={munichImg}
          unlocked={level >= 11}
          style={{ top: 225, left: 25 }}
        />

        {MILESTONES.map((m) => {
          if ([5, 8, 11].includes(m.step)) return null;

          return (
            <Milestone
              key={m.step}
              step={m.step}
              active={level >= m.step}
              style={{ top: m.top, left: m.left }}
            />
          );
        })}

        {pointerPosition && (
          <Pointer
            style={{
              top: pointerPosition.top,
              left: pointerPosition.left,
            }}
          />
        )}
      </div>
      <button
        onClick={downloadImage}
        style={{
          marginTop: "12px",
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
    </div>
  );
}
