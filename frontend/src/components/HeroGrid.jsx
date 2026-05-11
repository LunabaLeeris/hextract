import React, { useEffect, useRef, useState } from "react";
import "../styles.css";

const HeroHexGrid = () => {
  const hexRefs = useRef([]);
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });

  // Hexagon dimensions
  const HEX_WIDTH = 60;
  const HEX_HEIGHT = 70;
  const EFFECT_RADIUS = 2; // Number of hexagons from center to highlight

  // 1. Calculate grid size based on window
  useEffect(() => {
    const updateGridSize = () => {
      const cols = Math.ceil(window.innerWidth / (HEX_WIDTH * 0.75)) + 4;
      const rows = Math.ceil(window.innerHeight / (HEX_HEIGHT * 0.75)) + 4;
      setGridSize({ rows, cols });
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  // 2. Handle mouse movement with index-based proximity
  useEffect(() => {
    if (hexRefs.current.length === 0) return;

    // Cache hexagon positions and indices
    const hexagons = hexRefs.current
      .map((hex) => {
        if (!hex) return null;
        return {
          element: hex,
          row: parseInt(hex.dataset.row),
          col: parseInt(hex.dataset.col),
          rect: hex.getBoundingClientRect(),
        };
      })
      .filter(Boolean);

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      requestAnimationFrame(() => {
        // Find which hexagon the mouse is over
        let centerHex = null;
        for (const hex of hexagons) {
          const rect = hex.rect;
          if (
            mouseX >= rect.left &&
            mouseX <= rect.right &&
            mouseY >= rect.top &&
            mouseY <= rect.bottom
          ) {
            centerHex = hex;
            break;
          }
        }

        // Update all hexagons based on index distance from center
        hexagons.forEach((hex) => {
          if (!centerHex) {
            // Reset if no hex under cursor
            hex.element.style.borderColor = "rgba(64, 224, 208, 0.3)";
            hex.element.style.transform = "scale(1)";
            hex.element.style.zIndex = "1";
          } else {
            const rowDist = Math.abs(hex.row - centerHex.row);
            const colDist = Math.abs(hex.col - centerHex.col);
            
            // Calculate Manhattan distance for hexagon grid
            const dist = rowDist + colDist;
            
            if (dist <= EFFECT_RADIUS) {
              // Hexagons within effect radius
              const proximity = 1 - dist / (EFFECT_RADIUS + 1);
              const opacity = Math.max(0.3, proximity);
              const scale = 1 + proximity * 0.4;
              
              hex.element.style.borderColor = `rgba(64, 224, 208, ${opacity})`;
              hex.element.style.transform = `scale(${scale})`;
              hex.element.style.zIndex = Math.round(scale * 10);
            } else {
              // Reset hexagons outside effect radius
              hex.element.style.borderColor = "rgba(64, 224, 208, 0.3)";
              hex.element.style.transform = "scale(1)";
              hex.element.style.zIndex = "1";
            }
          }
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [gridSize]);

  // Create grid
  const rows = Array.from({ length: gridSize.rows });
  const cols = Array.from({ length: gridSize.cols });
  hexRefs.current = [];

  return (
    <section id="hero">
      <div id="hex-grid">
        {rows.map((_, rowIndex) => (
          <div className="hex-row" key={`row-${rowIndex}`}>
            {cols.map((_, colIndex) => {
              const hexIndex = rowIndex * gridSize.cols + colIndex;
              return (
                <div
                  className="hex"
                  key={`hex-${hexIndex}`}
                  data-row={rowIndex}
                  data-col={colIndex}
                  ref={(el) => (hexRefs.current[hexIndex] = el)}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1>Welcome to the Future</h1>
        <p className="subtitle">Move your mouse to reveal the grid</p>
        <div className="cta-buttons">
          <a href="/services" className="button">Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default HeroHexGrid;