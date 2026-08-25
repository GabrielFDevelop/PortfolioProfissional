import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #101418 100%)",
          borderRadius: "6px",
          color: "#FFFFFF",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontWeight: 900,
          fontSize: 13,
          letterSpacing: "-0.3px",
        }}
      >
        <span
          style={{
            background: "linear-gradient(90deg, #60a5fa 0%, #22d3ee 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            padding: "0 2px",
          }}
        >
          {"<GD>"}
        </span>
      </div>
    ),
    { ...size }
  );
}
