import milestoneImg from "../assets/milestone.png";

export default function Milestone({ step, active, style }) {
  return (
    <div
      className={`milestone-wrapper ${active ? "active" : ""}`}
      style={style}
    >
      <img src={milestoneImg} alt={`Step ${step}`} />
      <span className="milestone-number">{step}</span>
    </div>
  );
}
