"use client";
import React, { useState } from "react";

interface ClickToPlayVideoProps {
  src: string;
  poster?: string;
  style?: React.CSSProperties;
  className?: string;
}

const ClickToPlayVideo: React.FC<ClickToPlayVideoProps> = ({
  src,
  poster = "/default-thumbnail.jpg", // fallback image
  style = {},
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
  className={className}
  style={{
    position: "relative",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    zIndex: 1, // ensure video wrapper is on top
    ...style,
  }}
  onClick={() => setIsPlaying(true)}
>
  {!isPlaying ? (
    <>
      <img
        src={poster}
        alt="Video Preview"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "8px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "40px",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "50%",
          pointerEvents: "none", // allow click to pass through
          zIndex: 2
        }}
      >
        ▶
      </div>
    </>
  ) : (
    <video
      src={src}
      autoPlay
      controls
      muted
      playsInline
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        borderRadius: "8px",
      }}
    />
  )}
</div>

  );
};

export default ClickToPlayVideo;
