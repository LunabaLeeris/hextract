import React from "react";

function BackgroundPattern() {
  // Bounding box coordinates in a simulated 1440x900 canvas.
  // Each rect simulates an OCR extraction bounding box block.
  const ocrBlocks = [
    // Header block
    { x: 40, y: 30, w: 320, h: 140, label: "HEADER_BLOCK", conf: "0.999", type: "container" },
    { x: 380, y: 30, w: 460, h: 90, label: "NAV_BAR", conf: "1.000", type: "nav" },
    { x: 860, y: 30, w: 240, h: 180, label: "LOG_PANEL", conf: "0.998", type: "aside" },
    { x: 1120, y: 30, w: 280, h: 130, label: "USER_WIDGET", conf: "0.995", type: "aside" },

    // Middle/Hero content blocks
    { x: 40, y: 190, w: 180, h: 320, label: "SIDE_NAV", conf: "0.999", type: "nav" },
    { x: 240, y: 190, w: 600, h: 220, label: "HERO_TEXT_ZONE", conf: "0.997", type: "text" },
    { x: 860, y: 230, w: 540, h: 190, label: "METRICS_GRID", conf: "1.000", type: "table" },

    // Detail & Showcase blocks
    { x: 240, y: 430, w: 380, h: 260, label: "PLAYGROUND_CANVAS", conf: "0.999", type: "canvas" },
    { x: 640, y: 440, w: 480, h: 120, label: "STATUS_BAR", conf: "0.999", type: "status" },
    { x: 640, y: 580, w: 480, h: 280, label: "DATA_FEED_RAW", conf: "0.998", type: "json" },
    { x: 1140, y: 440, w: 260, h: 420, label: "SIDE_FORM_VAL", conf: "0.997", type: "form" },

    // Bottom section blocks
    { x: 40, y: 530, w: 180, h: 330, label: "ACCURACY_METER", conf: "1.000", type: "chart" },
    { x: 240, y: 710, w: 380, h: 150, label: "FOOTER_NOTES", conf: "0.992", type: "label" },
  ];

  return (
    <div className="background-pattern-container">
      <svg
        className="background-pattern-svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Render Grid Dots in background for styling */}
        <defs>
          <pattern id="grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dots)" />

        {/* Render OCR Blocks */}
        {ocrBlocks.map((block, i) => {
          const isDashed = i % 3 === 0;
          const showDetails = i % 2 === 0;
          const rectClass = isDashed ? "bg-rect-dashed" : "bg-rect-solid";

          return (
            <g key={i} className="bg-pattern-g" style={{ transition: "opacity 0.3s ease" }}>
              {/* Main Rectangle Outline */}
              <rect
                x={block.x}
                y={block.y}
                width={block.w}
                height={block.h}
                className={rectClass}
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity={isDashed ? "0.08" : "0.15"}
                strokeDasharray={isDashed ? "4,4" : undefined}
                fill="currentColor"
                fillOpacity="0.003"
              />

              {/* Corner brackets/crosshairs for scanner/OCR aesthetic */}
              {/* Top-Left Bracket */}
              <path
                d={`M ${block.x} ${block.y + 6} L ${block.x} ${block.y} L ${block.x + 6} ${block.y}`}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.25"
              />
              {/* Top-Right Bracket */}
              <path
                d={`M ${block.x + block.w - 6} ${block.y} L ${block.x + block.w} ${block.y} L ${block.x + block.w} ${block.y + 6}`}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.25"
              />
              {/* Bottom-Left Bracket */}
              <path
                d={`M ${block.x} ${block.y + block.h - 6} L ${block.x} ${block.y + block.h} L ${block.x + 6} ${block.y + block.h}`}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.25"
              />
              {/* Bottom-Right Bracket */}
              <path
                d={`M ${block.x + block.w - 6} ${block.y + block.h} L ${block.x + block.w} ${block.y + block.h} L ${block.x + block.w} ${block.y + block.h - 6}`}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.25"
              />

              {/* Field Metadata labels */}
              {showDetails && (
                <>
                  {/* Top-left metadata type label */}
                  <text
                    x={block.x + 6}
                    y={block.y + 12}
                    fontSize="7.5"
                    fontFamily="monospace"
                    fontWeight="500"
                    fill="currentColor"
                    fillOpacity="0.3"
                  >
                    {block.label}
                  </text>

                  {/* Top-right confidence scoring */}
                  <text
                    x={block.x + block.w - 6}
                    y={block.y + 12}
                    textAnchor="end"
                    fontSize="7"
                    fontFamily="monospace"
                    fill="currentColor"
                    fillOpacity="0.25"
                  >
                    c:{block.conf}
                  </text>
                  
                  {/* Bottom-left coordinates label */}
                  <text
                    x={block.x + 6}
                    y={block.y + block.h - 6}
                    fontSize="6.5"
                    fontFamily="monospace"
                    fill="currentColor"
                    fillOpacity="0.2"
                  >
                    x:{block.x} y:{block.y}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>
      {/* Overlay mask fades out the grids smoothly towards the edges and bottom */}
      <div className="background-pattern-overlay" />
    </div>
  );
}

export default BackgroundPattern;
