import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* LogicGuild Symbol */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        {/* Pillar segments */}
        <path d="M4 24L12 20V28L4 32V24Z" fill="currentColor" fillOpacity="0.7" />
        <path d="M4 14L12 10V18L4 22V14Z" fill="currentColor" fillOpacity="0.85" />
        <path d="M4 4L12 0V8L4 12V4Z" fill="currentColor" />
        
        {/* Base / L-extension */}
        <path d="M12 28H32V34H12V28Z" fill="currentColor" />
      </svg>
      
      {showText && (
        <span className="text-2xl font-heading font-black tracking-tighter text-text-primary">
          Logic<span className="text-primary">Guild</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
