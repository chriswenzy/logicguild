import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
  monochrome?: boolean;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  showText = true,
  size = 34,
  monochrome = false,
  inverted = false,
}) => {
  const navyColor = inverted ? "#FFFFFF" : "#0F2744";
  const sapphireColor = inverted ? "#93C5FD" : "#1E3A8A";
  const nodeColor = inverted ? "#60A5FA" : "#2563EB";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Executive Chamfered Monolith Monogram */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 hover:scale-105"
      >
        {monochrome ? (
          <>
            <path d="M8 6H20L17 14H8V6Z" fill="currentColor" />
            <path d="M8 17H20L17 25H8V17Z" fill="currentColor" />
            <path d="M8 28H38L42 34L37 39H8V28Z" fill="currentColor" />
            <circle cx="36" cy="10" r="3" fill="currentColor" />
          </>
        ) : (
          <>
            {/* Tier 1: Deep Navy */}
            <path d="M8 6H20L17 14H8V6Z" fill={navyColor} />
            {/* Tier 2: Sapphire Accent */}
            <path d="M8 17H20L17 25H8V17Z" fill={sapphireColor} />
            {/* Foundation L-Bar: Deep Navy */}
            <path d="M8 28H38L42 34L37 39H8V28Z" fill={navyColor} />
            {/* Engineering Node */}
            <circle cx="36" cy="10" r="3" fill={nodeColor} />
          </>
        )}
      </svg>

      {showText && (
        <span
          className={`text-xl md:text-2xl font-heading font-extrabold tracking-tight ${
            inverted ? "text-white" : "text-[#0F2744]"
          }`}
        >
          LOGIC<span className={inverted ? "text-[#93C5FD]" : "text-[#1E3A8A]"}>GUILD</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
