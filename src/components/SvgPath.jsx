import { useEffect, useRef, useState } from "react";
import { MILESTONES } from "../utils/milestones";

export default function SvgPath({ activeLevel }) {
  const refPath = useRef(null);
  const [length, setLength] = useState(0);

  // Build points
  const points = MILESTONES.map((m) => ({
    x: m.left + 21,
    y: m.top + 21,
  }));

  // Build smooth cubic path
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const dx = (curr.x - prev.x) * 0.35;

    d += ` C 
      ${prev.x + dx} ${prev.y},
      ${curr.x - dx} ${curr.y},
      ${curr.x} ${curr.y}
    `;
  }

  // Measure path length ONCE
  useEffect(() => {
    if (refPath.current) {
      setLength(refPath.current.getTotalLength());
    }
  }, []);

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
      {/* Hidden reference path (for measuring length) */}
      <path
        ref={refPath}
        d={d}
        fill="none"
        stroke="none"
      />

      {/* Inactive dotted path */}
      <path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="3"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />

      {/* Active dotted path */}
      {length > 0 && activeLevel > 0 && (
        <path
          d={d}
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeDasharray={length}
          strokeDashoffset={length * (1 - progress)}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.6s ease",
          }}
        />
      )}
    </svg>
  );
}
