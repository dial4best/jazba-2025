import { LEVELS } from "../utils/levels";

export default function IMDInfoPanel({ imd, current }) {
  if (!imd) return null;

  const isEligible = current >= imd.minTgt;

  const currentLevelObj = [...LEVELS]
    .reverse()
    .find(l => current >= l.target) || { level: 0, target: 0 };

  return (
    <div className="imd-info-panel">
      <div className="imd-info-name">{imd.name}</div>

      <div className="imd-info-grid">
        <div>
          <span>Min Target</span>
          <strong>₹ {imd.minTgt.toLocaleString()}</strong>
        </div>

        <div>
          <span>Achieved</span>
          <strong>₹ {current.toLocaleString()}</strong>
        </div>

        <div>
          <span>Commitment</span>
          <strong>{imd.commitment}</strong>
        </div>

        <div>
          <span>Current Level</span>
          <strong>
            Level {currentLevelObj.level} (
            {currentLevelObj.reward})
          </strong>
        </div>

      </div>

      <div
        className={`imd-info-status ${
          isEligible ? "eligible" : "not-eligible"
        }`}
      >
        {isEligible ? "✅ Eligible" : "❌ Not Eligible Yet"}
      </div>
    </div>
  );
}
