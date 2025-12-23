import { MILESTONES } from "../utils/milestones";

export default function SvgPath({ activeLevel }) {
  // Center of milestone icons (42px / 2 = 21)
  const points = MILESTONES.map((m) => ({
    x: m.left + 21,
    y: m.top + 21,
  }));

  // Build cubic bezier path that PASSES THROUGH points
  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];

    const dx = (curr.x - prev.x) / 2;
    // const dx = (curr.x - prev.x) * 0.50;

    const c1x = prev.x + dx;
    const c1y = prev.y;
    const c2x = curr.x - dx;
    const c2y = curr.y;

    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${curr.x} ${curr.y}`;
  }

  // Progress ratio
  const progress = activeLevel / 15;

  return (
    <svg
      width="100%"
      height="900"
      viewBox="0 0 360 900"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {/* Inactive dotted path */}
      <path
        d={d}
        fill="none"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />

      {/* Active dotted path */}
      {activeLevel > 0 && (
        <path
          d={d}
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeDasharray="6 8"
          strokeLinecap="round"
          pathLength="1"
          strokeDashoffset={1 - progress}
          style={{
            transition: "stroke-dashoffset 0.4s ease",
          }}
        />
      )}
    </svg>
  );
}
