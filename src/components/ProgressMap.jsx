import { getCurrentLevel } from "../utils/levels";
import CommitmentPointer from "./CommitmentPointer";
import { LEVELS } from "../utils/levels";
import { MILESTONES } from "../utils/milestones";
import Milestone from "./Milestone";
import Pointer from "./Pointer";
import SvgPath from "./SvgPath";
import Destination from "./Destination";
import thailandImg from "../assets/thailand.png";
import taiwanImg from "../assets/taiwan.png";
import munichImg from "../assets/munich.png";
import bannerImg from "../assets/banner.png";

export default function ProgressMap({ imd, current, isEligible }) {
  const level = getCurrentLevel(current);

  const commitmentLevelObj = LEVELS.find(
    (l) => l.reward && imd?.commitment && imd.commitment.includes(l.reward)
  );

  const pointerPosition =
    MILESTONES.find((m) => m.step === level) || MILESTONES[0]; // fallback to step 1

  const commitmentMilestone = commitmentLevelObj
    ? MILESTONES.find((m) => m.step === commitmentLevelObj.level)
    : null;

  const isCommitmentReached =
    commitmentLevelObj && level >= commitmentLevelObj.level;

  if (!imd) {
    return (
      <div className="map-container">
        <div style={{ marginTop: "120px", textAlign: "center" }}>
          Select an IMD to begin
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={`map-container ${!isEligible ? "locked" : ""}`}>
        <img
          src={bannerImg}
          alt="Campaign Banner"
          className="campaign-banner"
        />

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

        {commitmentMilestone && !isCommitmentReached && (
          <CommitmentPointer
            style={{
              top: commitmentMilestone.top - 30,
              left: commitmentMilestone.left + 30,
            }}
          />
        )}
      </div>
    </div>
  );
}
