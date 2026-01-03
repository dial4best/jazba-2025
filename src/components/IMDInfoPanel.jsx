export default function IMDInfoPanel({ imd, current }) {
  if (!imd) return null;

  const isEligible = current >= imd.minTgt;

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
