import { IMDS } from "../data/imds";

export default function InputForm({
  selectedIMD,
  setSelectedIMD,
  current,
  setCurrent,
}) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <select
        value={selectedIMD || ""}
        onChange={(e) => setSelectedIMD(e.target.value)}
        style={inputStyle}
      >
        <option value="">Select IMD</option>
        {IMDS.map((imd) => (
          <option key={imd.code} value={imd.code}>
            {imd.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Current Premium"
        value={current}
        onChange={(e) => setCurrent(parseInt(e.target.value || "0", 10))}
        style={inputStyle}
      />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "8px",
  fontSize: "14px",
};
