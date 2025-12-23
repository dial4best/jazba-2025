export default function Destination({ src, unlocked, style }) {
  return (
    <img
      src={src}
      alt="destination"
      style={{
        position: "absolute",
        width: "150px",
        zIndex: 3,
        opacity: unlocked ? 1 : 0.25,
        filter: unlocked
          ? "drop-shadow(0 0 10px rgba(255,255,255,0.6))"
          : "none",
        transition: "all 0.4s ease",
        ...style,
      }}
    />
  );
}
