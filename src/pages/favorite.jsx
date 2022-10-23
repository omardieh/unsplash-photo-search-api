import { Link } from "react-router-dom";

export default function Favorite() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>here is favorite, back to home ? </h2>
      <Link to="/">take me home!</Link>
    </div>
  );
}
