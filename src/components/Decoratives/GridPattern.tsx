import React from "react";

export interface GridPatternProps {
  /** size in pixels for the grid cell (default 40) */
  size?: number;
  /** opacity of the overall pattern (0-1) */
  opacity?: number;
  /** color used for the grid lines */
  color?: string;
  className?: string;
}

const GridPattern: React.FC<GridPatternProps> = ({
  size = 40,
  opacity = 0.06,
  color = "#06b6d4",
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
          backgroundSize: `${size}px ${size}px`,
        }}
      />
    </div>
  );
};

export default GridPattern;
