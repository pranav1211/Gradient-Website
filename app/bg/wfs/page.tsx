"use client";
import React, { useState, useCallback, useEffect } from "react";

const FullscreenImage: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen?.().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false));
    }
  }, []);

  // Prevent body scrollbars / margins
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.margin = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={toggleFullscreen}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: isFullscreen ? "none" : "pointer",
        zIndex: 9999, // stay above any footer
      }}
    >
      <img
        src="/wfs.png"
        alt="Fullscreen"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default FullscreenImage;
