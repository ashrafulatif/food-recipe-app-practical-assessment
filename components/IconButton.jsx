import React from "react";
import * as LucideIcons from "lucide-react";

const IconButton = ({ icon, label, onClick, className }) => {
  // Dynamically get icon 
  const IconComponent = LucideIcons[icon] || LucideIcons["X"];

  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-full transition-colors duration-200 ${className}`}
    >
      <IconComponent className="h-5 w-5 mr-2" />
      {label}
    </button>
  );
};

export default IconButton;
