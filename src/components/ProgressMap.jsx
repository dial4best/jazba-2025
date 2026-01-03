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

export default function ProgressMap({ imd, current }) {
  const level = getCurrentLevel(current);

  const pointerPosition =
    MILESTONES.find((m) => m.step === level) || MILESTONES[0]; // fallback to step 1

  const minTgt = imd?.minTgt ?? null;
  const isEligible = minTgt !== null && current >= minTgt;

  if (!imd) {
    return (
      <div className="map-container">
        <div style={{ marginTop: "120px", textAlign: "center" }}>
          Select an IMD to begin
        </div>
      </div>
    );
  }

  if (!isEligible) {
    return (
      <div className="map-container">
        <div className="imd-name">{imd.name}</div>

        <div
          style={{
            marginTop: "140px",
            padding: "20px",
            textAlign: "center",
            background: "rgba(255,255,255,0.8)",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <h3>🔒 Not Eligible Yet</h3>
          <p>Minimum Target: ₹{minTgt.toLocaleString()}</p>
          <p>Current Premium: ₹{current.toLocaleString()}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="map-container">
        <img
          src={bannerImg}
          alt="Campaign Banner"
          className="campaign-banner"
        />

        <div className="imd-name">{imd.name}</div>

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
    </div>
  );
}
