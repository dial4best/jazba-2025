import targetImg from "../assets/target.png";

export default function CommitmentPointer({ style, reached }) {
  if (reached) return null;

  return (
    <img
      src={targetImg}
      alt="Commitment Target"
      className="commitment-pointer"
      style={style}
    />
  );
}
