import pointerImg from "../assets/pointer.png";

export default function Pointer({ style }) {
  return (
    <img
      src={pointerImg}
      alt="You are here"
      style={{
        position: "absolute",
        width: "36px",
        transform: "translate(-50%, -100%)",
        zIndex: 5,
        ...style,
      }}
    />
  );
}
