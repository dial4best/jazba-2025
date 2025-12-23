export default function InputForm({
  imdName,
  setImdName,
  current,
  setCurrent,
}) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <input
        placeholder="IMD Name"
        value={imdName}
        onChange={(e) => setImdName(e.target.value)}
        style={inputStyle}
      />

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
